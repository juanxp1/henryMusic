import User from './user.js';
import Image from './Image.js';

const { DataTypes } = require('sequelize');
const { conn } = require('../db.js');

export default conn.define('Playlist', {
    
    id: {
        type: DataTypes.STRING,
        primaryKey: true,
        unique: true,
        allowNull: false,
    },

    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },

    description: {
        type: DataTypes.STRING,

    },

    user_id: {
        type: DataTypes.NUMBER,
        allowNull: false,
        references: {
            model: User,
            key: 'id',
        }
    },

    image_id: {
        type: DataTypes.NUMBER,
        allowNull: false,
        references: {
            model: Image,
            key: 'id',
        }
    },

    public: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    }


})