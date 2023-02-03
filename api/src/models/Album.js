import { DataTypes } from "sequelize"
import { connection } from "../database/connection.js"

export default connection.define('Album', {

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

    released_date: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    type: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: false,
        validate: { notEmpty: true, isIn: [['album', 'single', 'compilation']] },
        defaultValue: 'album'
    },

    total_tracks: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: false,
        validate: { notEmpty: true, isInt: true, min: 1 }
    }

},
{
  tableName: 'albums',
  createdAt: 'created_at',
  updatedAt: 'updated_at'
})