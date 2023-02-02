import { Sequelize } from "sequelize"

const {
  DB_USER,
  DB_PASSWORD,
  DB_HOST
} = process.env;

const DB_NAME = 'henry_music'

export const connection = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`, {
  logging: false,
  native: false
})