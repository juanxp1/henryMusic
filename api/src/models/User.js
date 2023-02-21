import Country from './Country.js';
import { DataTypes } from "sequelize"
import { connection } from "../database/connection.js"
import Image from './Image.js';

export default connection.define('User', {

    id: {
        type: DataTypes.STRING,
        primaryKey: true,
        unique: true,
        allowNull: false,
    },

    name: {
        type: DataTypes.STRING,
        allowNull: true,
        unique: false,
        validate: { notEmpty: true }
    },

    username: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: true,
        validate: { notEmpty: true }
    },

    email: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: true,
        validate: { isEmail: true }
    },

    password: {
        type: DataTypes.STRING,
        allowNull: true,
        unique: false,
        validate: { notEmpty: true }
    },

    image_id: {
        type: DataTypes.STRING,
        unique: false,
        allowNull: true,
        references: {
            model: Image,
            key: 'id',
        }
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

    rol: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: false,
        validate: { notEmpty: true, min: 0 },
        defaultValue: 0
    },

    country_id: {
        type: DataTypes.STRING,
        unique: false,
        allowNull: true,
        references: {
            model: Country,
            key: 'id',
        }
    }

},
{
    tableName: 'users',
    createdAt: 'created_at',
    updatedAt: 'updated_at',
    paranoid: true,
    deletedAt: 'deleted_at',
    hooks: {
        afterFind: (users, options) => {
            if (!users) return;
            if (!Array.isArray(users)) users = [users];
            users.forEach(user => {
                user.country && (user.dataValues.country = user.country.name)
                delete user.deleted_at;
                delete user.dataValues.deleted_at;
            });
        }
    }
})