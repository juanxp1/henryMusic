import Image from './Image.js';
import { DataTypes } from "sequelize"
import { connection } from "../database/connection.js"

export default connection.define('Artist', {

    id: {
        type: DataTypes.STRING,
        primaryKey: true,
        unique: true,
        allowNull: false,
    },

    name: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
        validate: { notEmpty: true }
    },

    popularity: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: false,
        validate: { notEmpty: true, min: 0, max: 100 },
        defaultValue: 0
    }

},
{
  tableName: 'artists',
  createdAt: 'created_at',
  updatedAt: 'updated_at'
})