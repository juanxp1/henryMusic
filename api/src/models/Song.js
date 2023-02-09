import { DataTypes } from "sequelize"
import { connection } from "../database/connection.js"

export default connection.define('Song', {

  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    unique: true,
    allowNull: false,
    autoIncrement: true
  },

  name: {
    type: DataTypes.STRING,
    unique: false,
    allowNull: false,
    validate: { notEmpty: true }
  },

  artist: {
    type: DataTypes.STRING,
    unique: false,
    allowNull: true,
    validate: { notEmpty: true }
  },

  album: {
    type: DataTypes.STRING,
    unique: false,
    allowNull: true,
    validate: { notEmpty: true }
  },

  genre: {
    type: DataTypes.STRING,
    unique: false,
    allowNull: true,
    validate: { notEmpty: true }
  },

  image: {
    type: DataTypes.STRING,
    unique: false,
    allowNull: true,
    validate: { notEmpty: true }
  },

  song: {
    type: DataTypes.STRING,
    unique: false,
    allowNull: true,
    validate: { notEmpty: true }
  }

},
  {
    tableName: 'songs',
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  })