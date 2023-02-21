/** @typedef { import('express').Request } Request */
/** @typedef { import('express').Response } Response */
import Validator from "validatorjs"
import { sequelize } from "../database/relations.js"
import { fileTypeFromFile } from 'file-type'
import { getAudioDurationInSeconds } from 'get-audio-duration'
import { jsonError, jsonOk } from "../lib/utils.js"
import { Op } from 'sequelize'
import Song from "../models/Song.js"
import fs from "fs"
import path from "path"
import short from "short-uuid"
import sharp from "sharp"

const { Album, Artist, Image, Track } = sequelize.models
const DEF_LIMIT = 10
const MAX_IMG_SIZE = 1024 * 1024
const MAX_IMG_WIDTH = 640
const MAX_IMG_HEIGHT = 640
const MAX_AUDIO_SIZE = 1024 * 1024 * 10

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
    const result = await Track.findAndCountAll({
      include: [
        { model: Album, as: 'album', attributes: { exclude: ["created_at", "updated_at"] }, include: [
          { model: Image, as: 'images', attributes: ['id', 'url', 'width', 'height']}
        ] },
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

export async function getAllSongs(req, res) {
  const validator = new Validator(req.query, {
    limit: "integer|min:1",
    offset: "integer|min:0",
    public: "boolean"
  })
  if (validator.fails()) return jsonError(res, validator.errors)
  const limit = req.query.limit || DEF_LIMIT, offset = req.query.offset || 0

  req.query.public = req.query.public === 'true'

  try {
    const songs = await Song.findAndCountAll({
      where: req.query.public ? { public: true } : { user_id: req.user.id },
      attributes: { exclude: ["created_at", "updated_at"] },
      include: [ { model: Image, as: 'images', attributes: ['id', 'url', 'width', 'height'] } ],
      limit, offset, distinct: true
    })
    jsonOk(res, { total: songs.count, songs: songs.rows, limit, offset })
  }
  catch (error) { jsonError(res, error.message) }
}


export async function updateSong(req, res){
  const validator = new Validator(req.params, { id: "required|alpha_dash|min:10"})
  if (validator.fails()) return jsonError(res, validator.errors)

  try{
    const song = await Song.findByPk(req.params.id)
    if (!song) return jsonError(res, "Song not found", 404)
    if (song.user_id !== req.user.id) return jsonError(res, "Unauthorized", 403)

    const validator = new Validator(req.body, {
      name: "required|string|min:2",
      public: "boolean"
    })
    if (validator.fails()) return jsonError(res, validator.errors)

    req.body.public = req.body.public === 'true'

    await song.update(req.body)
    jsonOk(res, song)
  }
  catch (error) { jsonError(res, error.message) }
}

export async function searchSongs(req, res) {
  const validator = new Validator(req.query, {
    q: "required|string|min:2",
    limit: "integer|min:1",
    offset: "integer|min:0",
    public: "boolean"
  })
  if (validator.fails()) return jsonError(res, validator.errors)
  const limit = req.query.limit || DEF_LIMIT, offset = req.query.offset || 0

  req.query.public = req.query.public === 'true'

  try {
    const songs = await Song.findAndCountAll({
      where: {
        name: { [Op.iLike]: '%' + req.query.q + '%' },
        ...(req.query.public ? { public: true } : { user_id: req.user.id })
      },
      attributes: { exclude: ["created_at", "updated_at"] },
      include: [ { model: Image, as: 'images', attributes: ['id', 'url', 'width', 'height'] } ],
      limit, offset, distinct: true
    })
    jsonOk(res, { total: songs.count, songs: songs.rows, limit, offset })
  }
  catch (error) { jsonError(res, error.message) }
}

export async function createSong(req, res) {
  console.log(req.files)
  let validator = new Validator(req.body, {
    name: 'required|string|min:3|max:100',
    artist: 'required|string|min:3|max:100',
    album: 'string|min:3|max:100',
    genre: 'string|min:3',
    explicit: 'boolean',
    public: 'boolean'
  })
  if (validator.fails()) return jsonError(res, validator.errors)
  validator = new Validator(req.files, { image: 'required', song: 'required' })
  if (validator.fails()) return jsonError(res, validator.errors)

  if (await Song.findOne({ where: { name: req.body.name, artist: req.body.artist, user_id: req.auth.payload.sub } })) {
    deleteTempFiles([req.files.image[0], req.files.song[0]])
    jsonError(res, "Song already exists", 409)
    return
  }

  try {
    const result = await Promise.all([validateImage(req.files.image[0]), validateAudio(req.files.song[0])])
    const errors = result.filter(r => r !== true)
    if (errors.length > 0) {
      deleteTempFiles([req.files.image[0], req.files.song[0]])
      const err_obj = {}
      errors.forEach(err => err_obj[err[0]] = [err[1]])
      return jsonError(res, {errors: err_obj})
    }
    const files = await processFiles(req.files.image[0], req.files.song[0])

    const image = files[0]
    const audio = files[1]

    let { name, artist, album, genre, explicit } = req.body
    const song = await Song.create({
      id: audio.name,
      user_id: req.auth.payload.sub,
      extension: audio.extension,
      public: req.body.public,
      duration: parseInt(audio.duration),
      name, artist, album, genre, explicit,
    })
    Image.create({ id: image.name, width: image.width, height: image.height, type: 'song', entity_id: audio.name })

    jsonOk(res, {
      song: {
        ...song.dataValues,
        images: [{
          id: image.name,
          url: process.env.BASE_URL + '/images/' + image.name + '.jpg',
          width: image.width,
          height: image.height
        }]
      }
    })
  } catch (error) {
    jsonError(res, error.message)
  }
}

// export async function updateSong(req, res) {
//   const validator = new Validator(req.body, {
//     id: 'required|string|min:1',
//     name: 'string|min:3|max:100',
//     artist: 'string|min:3|max:100',
//     album: 'string|min:3|max:100',
//     genre: 'string|min:3',
//     explicit: 'boolean',
//     public: 'boolean'
//   })
//   if (validator.fails()) return jsonError(res, validator.errors)

//   try {
//     const song = await Song.findOne({ where: { id: req.body.id, user_id: req.user.id } })
//     if (!song) return jsonError(res, "Song not found", 404)
//     await song.update(req.body)
//     jsonOk(res, { song })
//   }
//   catch (error) { jsonError(res, error.message) }
// }

export async function deleteSong(req, res) {
  const validator = new Validator(req.body, { id: 'required|string|min:1' })
  if (validator.fails()) return jsonError(res, validator.errors)

  try {
    const song = await Song.findOne({ where: { id: req.body.id, user_id: req.user.id } })
    if (!song) return jsonError(res, "Song not found", 404)
    await song.destroy()
    jsonOk(res, { message: "Song deleted" })
  }
  catch (error) { jsonError(res, error.message) }
}

async function validateImage(file) {
  const tmp_file = path.resolve(file.path)
  if (file.size > MAX_IMG_SIZE) {
    fs.unlink(tmp_file, blank)
    return ['image', 'the image is too large (max ' + MAX_IMG_SIZE/1024 + ' KB)']
  }
  const { mime } = await fileTypeFromFile(tmp_file)
  if (!mime.startsWith('image/')) {
    fs.unlink(tmp_file, blank)
    return ['image', 'the file is not an image']
  }
  return true
}

async function validateAudio(file) {
  const tmp_file = path.resolve(file.path)
  if (file.size > MAX_AUDIO_SIZE) {
    fs.unlink(tmp_file, blank)
    return ['song', 'the audio is too large (max ' + MAX_AUDIO_SIZE/1024 + ' KB)']
  }
  const { mime } = await fileTypeFromFile(tmp_file)
  if (!mime.startsWith('audio/')) {
    fs.unlink(tmp_file, blank)
    return ['song', 'the file is not an audio']
  }
  return true
}

async function processFiles(fimage, faudio) {
  const names = []
  let tmp_file = path.resolve(fimage.path)
  let file_name = short.generate()
  const image = sharp(tmp_file)
  const metadata = await image.metadata()
  if (metadata.width > MAX_IMG_WIDTH || metadata.height > MAX_IMG_HEIGHT) {
    image.resize(MAX_IMG_WIDTH, MAX_IMG_HEIGHT)
    metadata.width = MAX_IMG_WIDTH
    metadata.height = MAX_IMG_HEIGHT
  }
  await image.toFile(path.join(global.STORAGE_PATH, 'images', file_name + '.jpg'))
  fs.unlink(tmp_file, blank)
  names.push({ name: file_name, width: metadata.width, height: metadata.height })

  tmp_file = path.resolve(faudio.path)
  const extension = faudio.originalname.substring(faudio.originalname.lastIndexOf('.') + 1)
  file_name = short.generate()
  const duration = await getAudioDurationInSeconds(tmp_file)
  fs.rename(tmp_file, path.join(global.STORAGE_PATH, 'songs', file_name + '.' + extension), blank)
  names.push({ name: file_name, extension, duration: duration * 1000 })

  return names
}

function deleteTempFiles(files) {
  files.forEach(file => {
    fs.unlink(file.path, blank)
  })
}

function blank() {}

function moveFile(file, mimetype) {
  const tmp_file = path.resolve(file.path)
  if (!file.mimetype.startsWith(mimetype)) {
    fs.unlink(tmp_file, blank)
    return [false, 'the file is not the correct type (' + mimetype + ')']
  }
  
  const extension = file.originalname.substring(file.originalname.lastIndexOf('.') + 1)
  const file_name = short.generate() + '.' + extension
  fs.renameSync(tmp_file, path.join(global.STORAGE_PATH, 'songs', file_name))
  return [true, file_name]
}