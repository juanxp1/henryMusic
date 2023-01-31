import Image from './Image.js';

const { DataTypes } = require('sequelize');
const { conn } = require('../db.js');


export default conn.define('Artist', {

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

    popularity: {
        type: DataTypes.NUMBER,
        allowNull: false,
    },

    image_id: {
        type: DataTypes.NUMBER,
        allowNull: false,
        references: {
            model: Image,
            key: 'id'
        }
    }

})