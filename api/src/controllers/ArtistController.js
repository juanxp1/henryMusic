/** @typedef { import('express').Request } Request */
/** @typedef { import('express').Response } Response */
import Validator from "validatorjs"
import { sequelize } from "../database/relations.js"
import { jsonError, jsonOk } from "../lib/utils.js"
import { Op } from 'sequelize'

const { Album, Artist, Genre, Image, Track } = sequelize.models
const DEF_LIMIT = 10

export async function getArtist(req, res) {
  const validator = new Validator(req.params, { id: "required|alpha_dash|min:10" })
  if (validator.fails()) return jsonError(res, validator.errors)

  try {
    const artist = await Artist.findByPk(req.params.id, {
      attributes: { exclude: ["created_at", "updated_at"] },
      include: [
        { model: Album, as : 'albums', attributes: {
          exclude: ["created_at", "updated_at"] },
          through: { attributes: [] }
        },
        { model: Track, as: 'tracks', attributes: {
          exclude: ["created_at", "updated_at"] },
          through: { attributes: [] }
        },
        { model: Image, as: 'images', attributes: { exclude: ["created_at", "updated_at", "entity_id"] } },
        { model: Genre, as: 'genres', attributes: ['name'], through: { attributes: [] } },
      ]
    })
    if (!artist) return jsonError(res, "Artist not found", 404)
    jsonOk(res, artist)
  }
  catch (error) { jsonError(res, error.message) }
}

export async function searchArtist(req, res) {
  const validator = new Validator(req.query, {
    q: "required|string|min:2",
    limit: "integer|min:1",
    offset: "integer|min:0"
  })
  if (validator.fails()) return jsonError(res, validator.errors)
  const limit = req.query.limit || DEF_LIMIT, offset = req.query.offset || 0

  try {
    const result = await Artist.findAndCountAll({
      where: { name: { [Op.iLike]: `%${req.query.q}%` } },
      attributes: { exclude: ["created_at", "updated_at"] },
      include: [
        { model: Album, as : 'albums', attributes: {
          exclude: ["created_at", "updated_at"] },
          through: { attributes: [] }
        },
        { model: Track, as: 'tracks', attributes: {
          exclude: ["created_at", "updated_at"] },
          through: { attributes: [] }
        },
        { model: Image, as: 'images', attributes: { exclude: ["created_at", "updated_at", "entity_id"] } },
        { model: Genre, as: 'genres', attributes: ['name'], through: { attributes: [] } },
      ],
      distinct: true, limit, offset
    })
    jsonOk(res, {
      total: result.count,
      artists: result.rows,
      limit, offset
    })
  }
  catch (error) { jsonError(res, error.message) }
}