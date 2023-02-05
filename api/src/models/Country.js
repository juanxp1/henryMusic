import { DataTypes } from "sequelize"
import { connection } from "../database/Connection.js"

export default connection.define('Country', {
    
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
    }

},
{
  tableName: 'countries',
  createdAt: 'created_at',
  updatedAt: 'updated_at'
})