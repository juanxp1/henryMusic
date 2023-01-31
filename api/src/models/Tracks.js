import Album from './album.js';

const { DataTypes } = require('sequelize');
const { conn } = require('../db.js');

export default conn.define('Track', {
    
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

    album_id: {
        type: DataTypes.NUMBER,
        allowNull: false,
        references: {
            model: Album,
            key: 'id'
        }
    },

    duration: {
        type: DataTypes.NUMBER,
        allowNull: false,
    },

    popularity: {
        type: DataTypes.NUMBER,
        allowNull: false,
    },

    preview_url: {
        type: DataTypes.STRING,

    },

    is_local: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },

    explicit: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    }


})