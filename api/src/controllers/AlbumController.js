/** @typedef { import('express').Request } Request */
/** @typedef { import('express').Response } Response */
import Validator from "validatorjs"
import { sequelize } from "../database/relations.js"
import { jsonError, jsonOk } from "../lib/utils.js"
import { Op } from 'sequelize'

const { Album, Artist, Image, Track } = sequelize.models
const DEF_LIMIT = 10

export async function getAlbum(req, res) {
  const validator = new Validator(req.params, { id: "required|alpha_dash|min:10" })
  if (validator.fails()) return jsonError(res, validator.errors)

  try {
    const album = await Album.findByPk(req.params.id, {
      attributes: { exclude: ["created_at", "updated_at"] },
      include: [
        { model: Track, as: 'tracks', attributes: { exclude: ["created_at", "updated_at", "album_id"] } },
        { model: Image, as: 'images', attributes: { exclude: ["created_at", "updated_at", "entity_id"] } },
        { model: Artist, as: 'artists', attributes: {
          exclude: ["created_at", "updated_at"] },
          through: { attributes: [] }
        }
      ]
    })
    if (!album) return jsonError(res, "Album not found", 404)
    jsonOk(res, album)
  }
  catch (error) { jsonError(res, error.message) }
}

export async function searchAlbum(req, res) {
  const validator = new Validator(req.query, {
    q: "required|string|min:3",
    limit: "integer|min:1|max:100",
    offset: "integer|min:0"
  })
  if (validator.fails()) return jsonError(res, validator.errors)
  const limit = req.query.limit || DEF_LIMIT, offset = req.query.offset || 0

  try {
    const result = await Album.findAndCountAll({
      where: { name: { [Op.like]: `%${req.query.q}%` } },
      attributes: { exclude: ["created_at", "updated_at"] },
      include: [
        { model: Track, as: 'tracks', attributes: { exclude: ["created_at", "updated_at", "album_id"] } },
        { model: Image, as: 'images', attributes: { exclude: ["created_at", "updated_at", "entity_id"] } },
        { model: Artist, as: 'artists', attributes: {
          exclude: ["created_at", "updated_at"] },
          through: { attributes: [] }
        }
      ],
      distinct: true, limit, offset
    })
    jsonOk(res, {
      total: result.count,
      albums: result.rows,
      limit, offset
    })
  }
  catch (error) { jsonError(res, error.message) }
}