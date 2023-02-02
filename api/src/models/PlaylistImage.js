import playlist from "./Playlist.js"
import Image from "./Image.js"
import { DataTypes } from "sequelize"
import { connection } from "../database/connection.js"

export default connection.define('PlaylistImage', {
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
      model: playlist,
      key: 'id'
    }
  },
  image_id: {
    type: DataTypes.STRING,
    unique: false,
    allowNull: false,
    references: {
      model: Image,
      key: 'id'
    }
  }
},
{
  tableName: 'playlist_images',
  createdAt: 'created_at',
  updatedAt: 'updated_at'
})