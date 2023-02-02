import Album from "./Album.js"
import Artist from "./Artist.js"
import { DataTypes } from "sequelize"
import { connection } from "../database/connection.js"

export default connection.define('AlbumArtist', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    unique: true,
    allowNull: false,
    autoIncrement: true,
  },
  album_id: {
    type: DataTypes.STRING,
    unique: false,
    allowNull: false,
    references: {
      model: Album,
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
  tableName: 'album_artists',
  createdAt: 'created_at',
  updatedAt: 'updated_at'
})