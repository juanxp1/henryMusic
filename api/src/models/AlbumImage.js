import Album from "./Album.js"
import Image from "./Image.js"
import { DataTypes } from "sequelize"
import { connection } from "../database/connection.js"

export default connection.define('AlbumImage', {
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
  tableName: 'album_images',
  createdAt: 'created_at',
  updatedAt: 'updated_at'
})