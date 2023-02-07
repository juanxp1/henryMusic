/** @typedef { import('express').Request } Request */
/** @typedef { import('express').Response } Response */
import Validator from "validatorjs"
import { sequelize } from "../database/relations.js"
import { jsonError, jsonOk } from "../lib/utils.js"
import { Op } from 'sequelize'

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