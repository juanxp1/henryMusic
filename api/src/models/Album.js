import Image from './Image.js';

const { DataTypes } = require('sequelize');
const { conn } = require('../db.js');

export default conn.define('Album', {
    
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

    released_date: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    total_tracks: {
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