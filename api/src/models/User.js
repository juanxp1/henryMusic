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
        allowNull: false,
        unique: false,
        validate: { notEmpty: true }
    },

    username: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
        validate: { notEmpty: true, isAlphanumeric: true }
    },

    email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
        validate: { isEmail: true }
    },

    password: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: false,
        validate: { notEmpty: true }
    },

    // tipo de plan: free, premium, etc
    plan: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: false,
        validate: { notEmpty: true, min: 0 },
        defaultValue: 0
    },

    active: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        unique: false,
        validate: { notEmpty: true },
        defaultValue: true
    },

    country_id: {
        type: DataTypes.STRING,
        unique: false,
        allowNull: false,
        references: {
            model: Country,
            key: 'id',
        }
    }

},
{
  tableName: 'users',
  paranoid: true,
  createdAt: 'created_at',
  updatedAt: 'updated_at'
})
