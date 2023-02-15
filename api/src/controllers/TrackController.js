/** @typedef { import('express').Request } Request */
/** @typedef { import('express').Response } Response */
import Validator from "validatorjs"
import { sequelize } from "../database/relations.js"
import { jsonError, jsonOk } from "../lib/utils.js"
import { Op } from 'sequelize'
import Song from "../models/Song.js"
import fs from "fs"
import path from "path"
import short from "short-uuid"

const { Album, Artist, Track } = sequelize.models
const DEF_LIMIT = 10

export async function getTrack(req, res) {
  const validator = new Validator(req.params, { id: "required|alpha_dash|min:10" })
  if (validator.fails()) return jsonError(res, validator.errors)

  try {
    const track = await Track.findByPk(req.params.id, {
      attributes: { exclude: ["created_at", "updated_at", "album_id"] },
      include: [
        { model: Album, as : 'album', attributes: { exclude: ["created_at", "updated_at"] } },
        { model: Artist, as: 'artists', attributes: {
          exclude: ["created_at", "updated_at"] },
          through: { attributes: [] }
        }
      ]
    })
    if (!track) return jsonError(res, "Track not found", 404)
    jsonOk(res, track)
  }
  catch (error) { jsonError(res, error.message) }
}

export async function searchTrack(req, res) {
  const validator = new Validator(req.query, {
    q: "required|min:2",
    limit: "integer|min:1",
    offset: "integer|min:0"
  })
  if (validator.fails()) return jsonError(res, validator.errors)
  const limit = req.query.limit || DEF_LIMIT, offset = req.query.offset || 0

  try {
    const result = await Track.findAndCountAll({
      where: { name: { [Op.iLike]: `%${req.query.q}%` } },
      attributes: { exclude: ["created_at", "updated_at", "album_id"] },
      include: [
        { model: Album, as : 'album', attributes: { exclude: ["created_at", "updated_at"] } },
        { model: Artist, as: 'artists', attributes: {
          exclude: ["created_at", "updated_at"] },
          through: { attributes: [] }
        }
      ],
      distinct: true,
      limit, offset
    })
    jsonOk(res, {
      total: result.count,
      tracks: result.rows,
      limit, offset
    })
  }
  catch (error) { jsonError(res, error.message) }
}

export async function getAllTracks(req, res) {
  const validator = new Validator(req.query, {
    limit: "integer|min:1",
    offset: "integer|min:0"
  })
  if (validator.fails()) return jsonError(res, validator.errors)
  const limit = req.query.limit || DEF_LIMIT, offset = req.query.offset || 0

  try {
    const result = await Track.findAll({
      include: [
        { model: Album, as : 'album', attributes: { exclude: ["created_at", "updated_at"] } },
        { model: Artist, as: 'artists', attributes: {
          exclude: ["created_at", "updated_at"] },
          through: { attributes: [] }
        }
      ],
      distinct: true,
      limit, offset
    })
    jsonOk(res, {
      total: result.count,
      tracks: result,
      limit, offset
    })
  }
  catch (error) { jsonError(res, error.message) }
}

export async function postSong(req, res) {
  let validator = new Validator(req.body, {
    name: 'required|string|min:3|max:25',
    artist: 'required|string|min:3|max:25',
    album: 'string|min:3|max:25',
    genre: 'string|min:3',
  })
  if (validator.fails()) return jsonError(res, validator.errors)
  validator = new Validator(req.files, { image: 'required', song: 'required' })
  if (validator.fails()) return jsonError(res, validator.errors)

  try {

    let [ok, image_file] = moveFile(req.files.image[0], 'image/')
    if (!ok) return jsonError(res, image_file)
    let [ok2, song_file] = moveFile(req.files.song[0], 'audio/')
    if (!ok2) return jsonError(res, song_file)

    let {name, artist, album, genre } = req.body
    const newSong = await Song.findOrCreate({
      where: {name},
      defaults: { name, artist, album, genre, image: image_file, song: song_file }
    })
    jsonOk(res, {
      song: newSong[0], is_new: newSong[1]
    })
  } catch (error) {
    jsonError(res, error.message)
  }
}

export async function getAllSongs(req, res) {
  const validator = new Validator(req.query, {
    limit: "integer|min:1",
    offset: "integer|min:0"
  })
  if (validator.fails()) return jsonError(res, validator.errors)
  const limit = req.query.limit || DEF_LIMIT, offset = req.query.offset || 0

  try {
    const songs = await Song.findAll({
      attributes: { exclude: ["created_at", "updated_at"] },
      limit, offset, distinct: true
    })
    jsonOk(res, songs)
  } catch (error) {
    jsonError(res, error.message)
  }
}

function moveFile(file, mimetype) {
  const tmp_file = path.resolve(file.path)
  if (!file.mimetype.startsWith(mimetype)) {
    fs.unlinkSync(tmp_file)
    return [false, 'the file is not the correct type (' + mimetype + ')']
  }
  
  const extension = file.originalname.substring(file.originalname.lastIndexOf('.') + 1)
  const file_name = short.generate() + '.' + extension
  fs.renameSync(tmp_file, path.join(global.STORAGE_PATH, 'songs', file_name))
  return [true, file_name]
}