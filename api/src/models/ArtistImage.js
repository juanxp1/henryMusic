import Artist from "./Artist.js"
import Image from "./Image.js"
import { DataTypes } from "sequelize"
import { connection } from "../database/connection.js"

export default connection.define('ArtistImage', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    unique: true,
    allowNull: false,
    autoIncrement: true,
  },
  artist_id: {
    type: DataTypes.STRING,
    unique: false,
    allowNull: false,
    references: {
      model: Artist,
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
  tableName: 'artist_images',
  createdAt: 'created_at',
  updatedAt: 'updated_at'
})