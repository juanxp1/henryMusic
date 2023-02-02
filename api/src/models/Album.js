import Image from './Image.js';
import { DataTypes } from "sequelize"
import { connection } from "../database/connection.js"

export default connection.define('Album', {
    
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
        type: DataTypes.INTEGER,
        allowNull: false,
    },

    image_id: {
        type: DataTypes.STRING,
        allowNull: false,
        references: {
            model: Image,
            key: 'id'
        }
    }

},
{
  tableName: 'albums',
  createdAt: 'created_at',
  updatedAt: 'updated_at'
})