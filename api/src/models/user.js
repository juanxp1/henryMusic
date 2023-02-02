import Country from './Country.js';
import { DataTypes } from "sequelize"
import { connection } from "../database/connection.js"

export default connection.define('User', {

    id: {
        type: DataTypes.STRING,
        primaryKey: true,
        unique: true,
        allowNull: false,
    },

    name: {
        type: DataTypes.STRING,
        allowNull: false
    },

    username: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    },

    email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    },

    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    plan: {
        type: DataTypes.INTEGER
    },

    active: {
        type: DataTypes.BOOLEAN
    },

    country_id: {
        type: DataTypes.STRING,
        allowNull: false,
        references: {
            model: Country,
            key: 'id',
        }
    }

},
{
  tableName: 'users',
  createdAt: 'created_at',
  updatedAt: 'updated_at'
})