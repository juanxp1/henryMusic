import Country from './Country.js';

const { DataTypes } = require('sequelize');
const { conn } = require('../db.js');


export default conn.define('User', {

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
        type: DataTypes.NUMBER
    },

    active: {
        type: DataTypes.BOOLEAN
    },

    country_id: {
        type: DataTypes.NUMBER,
        allowNull: false,
        references: {
            model: Country,
            key: 'id',
        }
    }

})