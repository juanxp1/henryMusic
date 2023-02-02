import Album from './album.js';

import { DataTypes } from "sequelize"
import { connection } from "../database/connection.js"

export default connection.define('Track', {
    
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
        type: DataTypes.STRING,
        allowNull: false,
        references: {
            model: Album,
            key: 'id'
        }
    },

    duration: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },

    popularity: {
        type: DataTypes.INTEGER,
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

},
{
  tableName: 'tracks',
  createdAt: 'created_at',
  updatedAt: 'updated_at'
})