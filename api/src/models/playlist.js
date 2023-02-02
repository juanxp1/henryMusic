import User from './User.js';
import Image from './Image.js';

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
        allowNull: false,
    },

    description: {
        type: DataTypes.STRING,

    },

    user_id: {
        type: DataTypes.STRING,
        allowNull: false,
        references: {
            model: User,
            key: 'id',
        }
    },

    image_id: {
        type: DataTypes.STRING,
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

},
{
  tableName: 'playlists',
  createdAt: 'created_at',
  updatedAt: 'updated_at'
})