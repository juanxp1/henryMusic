import Playlist from "./Playlist.js"
import Track from "./Track.js"
import { DataTypes } from "sequelize"
import { connection } from "../database/connection.js"

export default connection.define('PlaylistTrack', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    unique: true,
    allowNull: false,
    autoIncrement: true,
  },
  playlist_id: {
    type: DataTypes.STRING,
    unique: false,
    allowNull: false,
    references: {
      model: Playlist,
      key: 'id'
    }
  },
  track_id: {
    type: DataTypes.STRING,
    unique: false,
    allowNull: false,
    references: {
      model: Track,
      key: 'id'
    }
  }
},
{
  tableName: 'playlist_tracks',
  createdAt: 'created_at',
  updatedAt: 'updated_at'
})