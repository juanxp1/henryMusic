const { DataTypes } = require('sequelize');
const { conn } = require('../db.js');

export default conn.define('Image', {
    
    id: {
        type: DataTypes.STRING,
        primaryKey: true,
        unique: true,
        allowNull: false,
    },

    path: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
    }

})