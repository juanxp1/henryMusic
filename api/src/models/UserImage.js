import Image from "./Image.js"
import User from "./User.js"
import { DataTypes } from "sequelize"
import { connection } from "../database/connection.js"

export default connection.define('UserImage', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    unique: true,
    allowNull: false,
    autoIncrement: true,
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
  tableName: 'user_images',
  createdAt: 'created_at',
  updatedAt: 'updated_at'
})