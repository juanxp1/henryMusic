import { DataTypes } from "sequelize"
import { connection } from "../database/connection.js"

export default connection.define('Image', {

  id: {
    type: DataTypes.STRING,
    primaryKey: true,
    unique: true,
    allowNull: false,
  },

  path: {
    type: DataTypes.STRING,
    unique: false,
    allowNull: true,
    validate: { notEmpty: true }
  },

  width: {
    type: DataTypes.INTEGER,
    allowNull: false,
    unique: false,
    validate: { notEmpty: true, min: 0 },
    defaultValue: 0
  },

  height: {
    type: DataTypes.INTEGER,
    allowNull: false,
    unique: false,
    validate: { notEmpty: true, min: 0 },
    defaultValue: 0
  },
  type: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: false,
    validate: { notEmpty: true },
    defaultValue: 'album'
  },
  entity_id: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: false,
    validate: { notEmpty: true },
  }

},
  {
    tableName: 'images',
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    hooks: {
      afterFind: (images) => {
        if (!images) return;
        if (!Array.isArray(images)) images = [images]
        images.forEach(image => {
          if (image.type !== 'album') delete image.dataValues.album
          if (image.type !== 'artist') delete image.dataValues.artist
          if (image.type !== 'playlist') delete image.dataValues.playlist
          if (image.type !== 'user') delete image.dataValues.user
          delete image.dataValues.entity_id
        })
      }
    }
  })