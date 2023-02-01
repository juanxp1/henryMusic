import { DataTypes } from "sequelize"
import { connection } from "../database/connection.js"

export default connection.define('Genre', {
    
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
    },

},
{
  tableName: 'genres',
  createdAt: 'created_at',
  updatedAt: 'updated_at'
})