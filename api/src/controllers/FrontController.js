import { jsonError, jsonOk } from "../lib/utils.js";
import { models } from "../database/relations.js";
import { Op, Sequelize } from "sequelize";
import { DEF_LIMIT, MAX_LIMIT } from "../lib/Constants.js";

const { Album, Artist, Image, Playlist, Track } = models;
const sequelize = Album.sequelize

export function front(req, res) {

}

// get 10 random artists
export async function getArtists(req, res) {
  try {
    const artists = await Artist.findAll({
      attributes: { exclude: ["created_at", "updated_at"] },
      include: [
        // { model: Album, as: "albums", attributes: { exclude: ["created_at", "updated_at"] }, through: { attributes: [] } },
        // { model: Track, as: "tracks", attributes: { exclude: ["created_at", "updated_at"] }, through: { attributes: [] } },
        { model: Image, as: "images", attributes: { exclude: ["created_at", "updated_at", "entity_id"] } },
      ],
      order: sequelize.random(),
      limit: DEF_LIMIT
    });
    jsonOk(res, artists);
  } catch (error) { jsonError(res, error.message); }
}

// get 10 random albums, 10 artists, 10 random tracks and all playlists of the user
export async function getFront(req, res) {
  try {
    const [albums, artists, tracks, playlists] = await Promise.all([
      Album.findAll({
        attributes: { exclude: ["created_at", "updated_at"] },
        include: [
          // { model: Artist, as: "artists", attributes: { exclude: ["created_at", "updated_at"] } },
          { model: Image, as: "images", attributes: { exclude: ["created_at", "updated_at", "entity_id"] } },
        ],
        order: sequelize.random(),
        limit: DEF_LIMIT
      }),
      Artist.findAll({
        attributes: { exclude: ["created_at", "updated_at"] },
        include: [
          // { model: Album, as: "albums", attributes: { exclude: ["created_at", "updated_at"] }, through: { attributes: [] } },
          // { model: Track, as: "tracks", attributes: { exclude: ["created_at", "updated_at"] }, through: { attributes: [] } },
          { model: Image, as: "images", attributes: { exclude: ["created_at", "updated_at", "entity_id"] } },
        ],
        order: sequelize.random(),
        limit: DEF_LIMIT
      }),
      Track.findAll({
        attributes: { exclude: ["created_at", "updated_at"] },
        include: [
          { model: Album, as: "album", attributes: { exclude: ["created_at", "updated_at"] },
            include: [ { model: Image, as: "images", attributes: ['id', 'url', 'width', 'height'] } ]
          },
          { model: Artist, as: "artists", attributes: { exclude: ["created_at", "updated_at"] } },
        ],
        order: sequelize.random(),
        limit: DEF_LIMIT
      }),
      Playlist.findAll({
        where: { user_id: req.user.id },
        attributes: { exclude: ["created_at", "updated_at"] },
        include: [
          { model: Track, as: "tracks", attributes: { exclude: ["created_at", "updated_at"] }, through: { attributes: [] } },
        ],
      })
    ]);
    jsonOk(res, { albums, artists, tracks, playlists });
  } catch (error) { jsonError(res, error.message); }
}