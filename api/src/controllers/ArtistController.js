import { sequelize } from "../database/relations.js"

const { Track } = sequelize.models

export async function allTracks(req, res) {
  try { res.status(200).json(await Track.findAll()) }
  catch (err) { res.status(500).json(err) }
}