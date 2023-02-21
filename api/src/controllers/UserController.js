import { models } from "../database/relations.js";
import { jsonError, jsonOk } from "../lib/utils.js";
import short from 'short-uuid';
import Validator from "validatorjs";

const { User, Image, Country } = models;

export async function getUser(req, res) {
  try {
    const user = await User.findOne({
      where: { id: req.user.id },
      attributes: { exclude: ['password', 'image_id', 'country_id', 'created_at', 'updated_at'] },
      include: [
        { model: Image, as: 'avatar', attributes: ['id', 'url', 'width', 'height'] },
        { model: Image, as: 'images', attributes: ['id', 'url', 'width', 'height'] },
        { model: Country, as: 'country', attributes: ['name' ] },
      ]
    });
    if (!user) { return jsonError(res, 'User not found', 404); }
    return jsonOk(res, user);
  }
  catch (err) { return jsonError(res, err.message); }
}

export async function updateMyUser(req, res) {
  const validator = new Validator(req.body, {
    name: 'string|min:3|max:100',
    username: 'string|min:3|max:100',
    country_id: 'string|min:1|max:20',
    image_id: 'string|min:1|max:20',
  });
  if (validator.fails()) { return jsonError(res, validator.errors); }

  const { user } = req;
  const body = req.body;
  const user_data = {}
  if (body.name && body.name !== user.name) user_data.name = body.name;

  body.username = body.username?.toLowerCase();
  if (body.username && body.username !== user.username) {
    const found_user = await User.findOne({ where: { username: body.username } });
    if (found_user && found_user.id !== user.id) { return jsonError(res, 'Username already in use', 400); }
    user_data.username = body.username;
  }
  if (body.country_id) {
    const country = await Country.findOne({ where: { id: body.country_id } });
    if (!country) { return jsonError(res, 'Country not found', 404); }
    user_data.country_id = body.country_id;
  }
  if (body.image_id) {
    const image = await Image.findOne({ where: { id: body.image_id, entity_id: user.id } });
    if (!image) { return jsonError(res, 'Image not found', 404); }
    user_data.image_id = body.image_id;
  }

  if (!Object.keys(user_data).length) { return jsonError(res, 'No data to update', 400); }

  try {
    const result = await User.update(user_data, { where: { id: user.id } });
    if (!result[0]) { return jsonError(res, 'User not found', 404); }
    return jsonOk(res, 'User updated');
  }
  catch (err) { return jsonError(res, err.message); }
}

export async function updateUser(user, body, res) {
  const user_data = {}
  if (body.name && body.name !== user.name) user_data.name = body.name;

  body.username = body.username?.toLowerCase();
  if (body.username && body.username !== user.username) {
    const found_user = await User.findOne({ where: { username: body.username } });
    if (found_user && found_user.id !== user.id) { return jsonError(res, 'Username already in use', 400); }
    user_data.username = body.username;
  }
  if (body.country_id) {
    const country = await Country.findOne({ where: { id: body.country_id } });
    if (!country) { return jsonError(res, 'Country not found', 404); }
    user_data.country_id = body.country_id;
  }
  if (body.image_id) {
    const image = await Image.findOne({ where: { id: body.image_id, entity_id: user.id } });
    if (!image) { return jsonError(res, 'Image not found', 404); }
    user_data.image_id = body.image_id;
  }

  if (!Object.keys(user_data).length) { return jsonError(res, 'No data to update', 400); }

  try {
    const result = await User.update(user_data, { where: { id: user.id } });
    if (!result[0]) { return jsonError(res, 'User not found', 404); }
    return jsonOk(res, 'User updated');
  }
  catch (err) { return jsonError(res, err.message); }
}

export async function deleteUser(req, res) {
  try {
    const result = await User.destroy({ where: { id: req.user.id } });
    if (!result) { return jsonError(res, 'User not found', 404); }
    return jsonOk(res, 'User deleted');
  }
  catch (err) { return jsonError(res, err.message); }
}

// Este metodo es llamado solo desde Auth0
export async function createUser(req, res) {
  const { user, secret } = req.body;
  if (secret !== process.env.SESSION_SECRET) { return jsonError(res, 'Invalid secret', 401); }

  try {
    const [new_user, created] = await User.findOrCreate({
      where: { id: user.user_id },
      defaults: {
        id: user.user_id,
        name: user.name || null,
        username: user.username || null,
        email: user.email || null,
        password: null,
        country_id: null,
      }
    })
    if (!created) return jsonError(res, 'user already exists')

    new_user.createPlaylist({
      id: short.generate(),
      name: 'liked songs',
      description: 'songs you liked',
    })
    return jsonOk(res, 'user created');
  }
  catch (err) { return jsonError(res, err.message); }
}