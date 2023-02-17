import User from './User.js'
import { DataTypes } from "sequelize"
import { connection } from "../database/connection.js"

export default connection.define('Song', {

  id: {
    type: DataTypes.STRING,
    primaryKey: true,
    unique: true,
    allowNull: false,
  },

  user_id: {
    type: DataTypes.STRING,
    unique: false,
    allowNull: false,
    references: {
      model: User,
      key: 'id'
    }
  },

  extension: {
    type: DataTypes.STRING,
    unique: false,
    allowNull: false,
    validate: { notEmpty: true }
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

  duration: {
    type: DataTypes.INTEGER,
    unique: false,
    allowNull: true,
    validate: { notEmpty: true, isInt: true, min: 0 }
  },

  explicit: {
    type: DataTypes.BOOLEAN,
    unique: false,
    allowNull: false,
    defaultValue: false
  },

  public: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    unique: false,
    validate: { notEmpty: true },
    defaultValue: true
  },

  play_url: {
    type: DataTypes.VIRTUAL,
    get() { return `https://henrymusic.tech/songs/${this.id}.${this.extension}` }
  }

},
  {
    tableName: 'songs',
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    hooks: {
      afterCreate: (song) => {
        if (!song) return;
        song.setDataValue('play_url', `https://henrymusic.tech/songs/${song.id}.${song.extension}`)
      },
    }
  })