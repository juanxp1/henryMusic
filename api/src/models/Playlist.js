import User from './User.js';
import { DataTypes } from "sequelize"
import { connection } from "../database/connection.js"

export default connection.define('Playlist', {

  id: {
    type: DataTypes.STRING,
    primaryKey: true,
    unique: true,
    allowNull: false,
  },

  name: {
    type: DataTypes.STRING,
    unique: false,
    allowNull: false,
    validate: { notEmpty: true }
  },

  description: {
    type: DataTypes.STRING,
    unique: false,
    allowNull: true,
  },

  user_id: {
    type: DataTypes.STRING,
    allowNull: false,
    references: {
      model: User,
      key: 'id',
    }
  },

  public: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    unique: false,
    defaultValue: false
  }

},
  {
    tableName: 'playlists',
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    paranoid: true,
    deletedAt: 'deleted_at',
  })
