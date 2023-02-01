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
    }

},
{
  tableName: 'images',
  createdAt: 'created_at',
  updatedAt: 'updated_at'
})