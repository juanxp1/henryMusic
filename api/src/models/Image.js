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
        unique: true,
        allowNull: false,
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
    }

},
{
  tableName: 'images',
  createdAt: 'created_at',
  updatedAt: 'updated_at'
})