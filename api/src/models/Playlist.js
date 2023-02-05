import User from './User.js';
import { DataTypes } from "sequelize"
import { connection } from "../database/connection.js"

export default connection.define('Playlist', {
    
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

    description: {
        type: DataTypes.STRING,
        unique: false,
        allowNull: true,
    },

    user_id: {
        type: DataTypes.STRING,
        allowNull: false,
        references: {
            model: User,
            key: 'id',
        }
    },

    public: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    }

},
{
    hooks: {
        afterFind: (playlist) => {
            if (!playlist) return;
            if (Array.isArray(playlist)) {
                playlist.forEach(playlist => {
                    playlist.dataValues.owner = playlist.user;
                    delete playlist.dataValues.user_id;
                });
            } else {
                playlist.dataValues.owner = playlist.user;
                delete playlist.dataValues.user_id;
            }
        }
    },
    tableName: 'playlists',
    paranoid: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at'
})
