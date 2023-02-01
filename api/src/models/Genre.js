const { DataTypes } = require('sequelize');
const { conn } = require('../db.js');

export default conn.define('Genre', {
    
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


})