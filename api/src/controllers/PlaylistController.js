import { models } from "../database/relations.js";
import { jsonError, jsonOk } from "../lib/utils.js";
import { Op } from "sequelize";
import shortUUID from "short-uuid";
import Validator from "validatorjs";

const { Artist, Album, Playlist, Image, Track } = models;
const DEF_LIMIT = 10
const MAX_LIMIT = 1000

export async function getAllPlaylists(req, res) {
  const validator = new Validator(req.query, {
    limit: 'integer|min:1|max:' + MAX_LIMIT,
    offset: 'integer|min:0',
    public: 'boolean'
  });
  if (validator.fails()) { return jsonError(res, validator.errors, 422) }

  const limit = req.query.limit || DEF_LIMIT, offset = req.query.offset || 0;
  req.query.public = req.query.public === 'true'

  try {
    const result = await Playlist.findAndCountAll({
      where: req.query.public ? { public: true } : { user_id: req.user.id },
      attributes: { exclude: ['user_id', 'created_at', 'updated_at'] },
      include: [
        { model: Image, as: 'images', attributes: ['id', 'url', 'width', 'height'] }
      ],
      limit, offset
    });
    return jsonOk(res, { playlists: result.rows, total: result.count, limit, offset });
  }
  catch (err) { return jsonError(res, err.message); }
}

export async function getPlaylist(req, res) {
  const validator = new Validator(req.params, {
    id: 'required|string|min:1|max:36',
    public: 'boolean'
  });
  if (validator.fails()) { return jsonError(res, validator.errors) }

  const where = { id: req.params.id }
  req.query.public = req.query.public === 'true'
  req.query.public ? where.public = true : where.user_id = req.user.id

  try {
    const playlist = await Playlist.findOne({
      where,
      attributes: { exclude: ['user_id', 'created_at', 'updated_at'] },
      include: [
        { model: Image, as: 'images', attributes: ['id', 'url', 'width', 'height'] }
      ]
    });
    if (!playlist) { return jsonError(res, 'Playlist not found', 404); }
    return jsonOk(res, playlist);
  }
  catch (err) { return jsonError(res, err.message); }
}

export async function searchPlaylists(req, res) {
  const validator = new Validator(req.query, {
    q: 'required|string|min:2|max:100',
    page: 'integer|min:1',
    limit: 'integer|min:1|max:' + MAX_LIMIT,
    public: 'boolean'
  });
  if (validator.fails()) { return jsonError(res, validator.errors, 422) }

  const where = { name: { [Op.iLike]: `%${req.query.q}%` } }
  req.query.public = req.query.public === 'true'
  req.query.public ? where.public = true : where.user_id = req.user.id

  try {
    const page = req.query.page || 1;
    const limit = req.query.limit || DEF_LIMIT;
    const offset = (page - 1) * limit;

    const result = await Playlist.findAndCountAll({
      where,
      attributes: { exclude: ['user_id', 'created_at', 'updated_at'] },
      include: [
        { model: Image, as: 'images', attributes: ['id', 'url', 'width', 'height'] }
      ],
      offset,
      limit,
    });
    return jsonOk(res, { playlists: result.rows, total: result.count, limit, offset });
  }
  catch (err) { return jsonError(res, err.message); }
}

export async function createPlaylist(req, res) {
  const validator = new Validator(req.body, {
    name: 'required|string|min:3|max:100',
    description: 'string|min:3|max:250',
    public: 'boolean',
  });
  if (validator.fails()) { return jsonError(res, validator.errors); }

  try {
    const playlist = await Playlist.create({
      id: shortUUID.generate(),
      name: req.body.name,
      description: req.body.description,
      user_id: req.user.id,
      public: req.body.public,
    });
    return jsonOk(res, playlist);
  }
  catch (err) { return jsonError(res, err.message); }
}

export async function updatePlaylist(req, res) {
  const validator = new Validator(req.body, {
    id: 'required|string|min:1|max:36',
    name: 'string|min:3|max:100',
    description: 'string|min:3|max:250',
    public: 'boolean',
  });
  if (validator.fails()) { return jsonError(res, validator.errors); }

  try {
    const playlist = await Playlist.findOne({
      where: { id: req.body.id, user_id: req.user.id },
      attributes: { exclude: ['user_id', 'created_at', 'updated_at'] },
      include: [
        { model: Image, as: 'images', attributes: ['id', 'url', 'width', 'height'] }
      ]
    });
    if (!playlist) { return jsonError(res, 'Playlist not found', 404); }

    if (req.body.name) { playlist.name = req.body.name; }
    if (req.body.description) { playlist.description = req.body.description; }
    if (req.body.public !== undefined) { playlist.public = req.body.public; }

    await playlist.save();
    return jsonOk(res, playlist);
  }
  catch (err) { return jsonError(res, err.message); }
}

export async function deletePlaylist(req, res) {
  const validator = new Validator(req.body, { id: 'required|string|min:1|max:36' });
  if (validator.fails()) { return jsonError(res, validator.errors) }

  try {
    const playlist = await Playlist.findOne({
      where: { id: req.body.id, user_id: req.user.id },
      attributes: { exclude: ['user_id', 'created_at', 'updated_at'] },
    });
    if (!playlist) { return jsonError(res, 'Playlist not found', 404); }

    await playlist.destroy();
    return jsonOk(res, 'Playlist deleted');
  }
  catch (err) { return jsonError(res, err.message); }
}

export async function addTrackToPlaylist(req, res) { addOrRemoveTrack(req, res, true) }

export async function removeTrackFromPlaylist(req, res) { addOrRemoveTrack(req, res, false) }

async function addOrRemoveTrack(req, res, add) {
  const validator = new Validator(req.body, {
    playlist_id: 'required|string|min:1|max:36',
    track_id: 'required|string|min:1|max:36',
  });
  if (validator.fails()) { return jsonError(res, validator.errors) }

  const { playlist_id, track_id } = req.body
  try {
    const playlist = await Playlist.findOne({
      where: { id: playlist_id, user_id: req.user.id },
      attributes: ['id'],
    });
    if (!playlist) { return jsonError(res, 'Playlist not found', 404); }

    const track = await Track.findByPk(track_id)
    if (!track) { return jsonError(res, 'Track not found', 404); }

    const has_track = await playlist.hasTrack(track);

    if (add && has_track) { return jsonError(res, 'Track already in playlist', 400); }
    if (!add && !has_track) { return jsonError(res, 'Track not in playlist', 400); }

    add ? await playlist.addTrack(track) : await playlist.removeTrack(track);

    return jsonOk(res, add ? 'Track added to playlist' : 'Track removed from playlist');
  }
  catch (err) { return jsonError(res, err.message); }
}

export async function getPlaylistTracks(req, res) {
  const validator = new Validator(req.query, {
    id: 'required|string|min:1|max:36',
    public: 'boolean',
  });
  if (validator.fails()) { return jsonError(res, validator.errors) }

  const where = { id: req.query.id }
  const in_public = req.query.public === 'true'
  in_public ? where.public = true : where.user_id = req.user.id

  try {
    const playlist = await Playlist.findOne({
      where,
      attributes: ['id', 'name', 'description', 'public'],
      include: [
        { model: Image, as: 'images', attributes: ['id', 'url', 'width', 'height'] },
        {
          model: Track,
          as: 'tracks',
          attributes: ['id', 'name', 'duration', 'play_url'],
          through: { attributes: [] },
          include: [
            { model: Artist, as: 'artists', attributes: ['id', 'name'] },
            { model: Album, as: 'album', attributes: ['id', 'name'], include: 
              [{ model: Image, as: 'images', attributes: ['id', 'url', 'width', 'height'] }]
            },
          ],
        }
      ]
    });
    if (!playlist) { return jsonError(res, 'Playlist not found', 404); }

    return jsonOk(res, playlist);
  }
  catch (err) { return jsonError(res, err.message); }
}