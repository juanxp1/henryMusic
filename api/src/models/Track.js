import Album from './Album.js';
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
        unique: false,
        allowNull: false,
        validate: { notEmpty: true }
    },

    album_id: {
        type: DataTypes.STRING,
        unique: false,
        allowNull: false,
        references: {
            model: Album,
            key: 'id'
        }
    },

    // duration in miliseconds
    duration: {
        type: DataTypes.INTEGER,
        unique: false,
        allowNull: false,
        validate: { notEmpty: true, isInt: true, min: 0 }
    },

    popularity: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: false,
        validate: { notEmpty: true, min: 0, max: 100 },
        defaultValue: 0
    },

    preview_url: {
        type: DataTypes.STRING,
        allowNull: true,
        unique: false,
        validate: { isUrl: true }
    },

    // play_url: {
    //     type: DataTypes.VIRTUAL,
    //     allowNull: true,
    //     unique: false,
    //     validate: { isUrl: true },
    //     get() {
    //         return 'https://henrymusic.tech/tracks/' + this.id + '.mp3'
    //     }
    // },

    trac_number: {
        type: DataTypes.INTEGER,
        allowNull: true,
        unique: false,
        validate: { notEmpty: true, isInt: true, min: 1 },
        defaultValue: 1
    },

    disc_number: {
        type: DataTypes.INTEGER,
        allowNull: true,
        unique: false,
        validate: { notEmpty: true, isInt: true, min: 1 },
        defaultValue: 1
    },

    is_local: {
        type: DataTypes.BOOLEAN,
        unique: false,
        allowNull: false,
        defaultValue: false
    },

    explicit: {
        type: DataTypes.BOOLEAN,
        unique: false,
        allowNull: false,
        defaultValue: false
    }

},
{
  tableName: 'tracks',
  createdAt: 'created_at',
  updatedAt: 'updated_at'
})