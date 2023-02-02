import Artist from "./Artist.js"
import Genre from "./Genre.js"
import { DataTypes } from "sequelize"
import { connection } from "../database/connection.js"

export default connection.define('ArtistGenre', {
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
  genre_id: {
    type: DataTypes.STRING,
    unique: false,
    allowNull: false,
    references: {
      model: Genre,
      key: 'id'
    }
  }
},
{
  tableName: 'artist_genres',
  createdAt: 'created_at',
  updatedAt: 'updated_at'
})