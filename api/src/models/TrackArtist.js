import Artist from "./Artist.js"
import Track from "./Track.js"
import { DataTypes } from "sequelize"
import { connection } from "../database/connection.js"

export default connection.define('TrackArtist', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    unique: true,
    allowNull: false,
    autoIncrement: true,
  },
  track_id: {
    type: DataTypes.STRING,
    unique: false,
    allowNull: false,
    references: {
      model: Track,
      key: 'id'
    }
  },
  artist_id: {
    type: DataTypes.STRING,
    unique: false,
    allowNull: false,
    references: {
      model: Artist,
      key: 'id'
    }
  }
},
{
  tableName: 'track_artists',
  createdAt: 'created_at',
  updatedAt: 'updated_at'
})