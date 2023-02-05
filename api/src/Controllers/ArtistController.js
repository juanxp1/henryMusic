import { sequelize } from "../database/relations.js"

const { Track } = sequelize.models

export function allTracks(req, res) {
    Track.findAll()
        .then(tracks => res.status(200).json(tracks))
        .catch(err => res.status(500).json(err))
}