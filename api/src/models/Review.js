import User from './User.js'
import { DataTypes } from "sequelize"
import { connection } from "../database/connection.js"

export default connection.define('Review', {
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
  rating: {
    type: DataTypes.INTEGER,
    unique: false,
    allowNull: true,
    validate: { notEmpty: true, isInt: true, min: 0, max: 5 }
  },
  comment: {
    type: DataTypes.STRING,
    unique: false,
    allowNull: true,
    validate: { notEmpty: true }
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
  },
},
{
  tableName: 'reviews',
  createdAt: 'created_at',
  updatedAt: 'updated_at'
})