import { models } from "../database/relations.js";
import { jsonError, jsonOk } from "../lib/utils.js";
import { Op } from "sequelize";
import Validator from "validatorjs";
import { updateUser as userUpdate } from "./UserController.js";

const { User } = models;
const DEF_LIMIT = 10
const MAX_LIMIT = 1000

export async function getAllUsers(req, res) {
  const validator = new Validator(req.query, {
    limit: 'integer|min:1|max:' + MAX_LIMIT,
    offset: 'integer|min:0'
  });
  if (validator.fails()) { return jsonError(res, validator.errors, 422) }

  const limit = req.query.limit || DEF_LIMIT, offset = req.query.offset || 0;

  try {
    const result = await User.findAndCountAll({
      attributes: { exclude: ['password', 'created_at', 'updated_at'] },
      limit, offset
    });
    return jsonOk(res, { users: result.rows, total: result.count, limit, offset });
  }
  catch (err) { return jsonError(res, err.message); }
}

export async function getUser(req, res) {
  const validator = new Validator(req.params, { id: 'required|string|min:1|max:36' });
  if (validator.fails()) { return jsonError(res, validator.errors, 422) }

  try {
    const user = await User.findByPk(req.params.id, {
      attributes: { exclude: ['password', 'created_at', 'updated_at'] }
    });
    if (!user) { return jsonError(res, 'User not found', 404); }
    return jsonOk(res, user);
  }
  catch (err) { return jsonError(res, err.message); }
}

export async function searchUser(req, res) {
  const validator = new Validator(req.query, {
    q: 'required|string|min:2',
    limit: 'integer|min:1|max:' + MAX_LIMIT,
    offset: 'integer|min:0'
  });
  if (validator.fails()) { return jsonError(res, validator.errors, 422) }

  const limit = req.query.limit || DEF_LIMIT, offset = req.query.offset || 0;

  try {
    const result = await User.findAndCountAll({
      where: { username: { [Op.iLike]: `%${req.query.q}%` } },
      attributes: { exclude: ['password', 'created_at', 'updated_at'] },
      limit, offset
    });
    return jsonOk(res, { users: result.rows, total: result.count, limit, offset });
  }
  catch (err) { return jsonError(res, err.message); }
}

export async function deleteUser(req, res) {
  const validator = new Validator(req.body, { id: 'required|string|min:1|max:36' });
  if (validator.fails()) { return jsonError(res, validator.errors, 422) }

  try {
    const user = await User.findByPk(req.body.id);
    if (!user) { return jsonError(res, 'User not found', 404); }
    await user.destroy();
    return jsonOk(res, 'User deleted');
  }
  catch (err) { return jsonError(res, err.message); }
}

export async function restoreUser(req, res) {
  const validator = new Validator(req.body, { id: 'required|string|min:1|max:36' });
  if (validator.fails()) { return jsonError(res, validator.errors, 422) }

  try {
    const user = await User.findByPk(req.body.id, { paranoid: false });
    if (!user) { return jsonError(res, 'User not found', 404); }
    await user.restore();
    return jsonOk(res, 'User restored');
  }
  catch (err) { return jsonError(res, err.message); }
}

export async function updateUser(req, res) {
  const validator = new Validator(req.body, {
    id: 'required|string|min:1',
    name: 'string|min:3|max:100',
    username: 'string|min:3|max:100',
    country_id: 'string|min:1|max:20',
    image_id: 'string|min:1|max:20',
    rol: 'integer|min:0|max:100'
  });
  if (validator.fails()) { return jsonError(res, validator.errors, 422) }

  try {
    const user = await User.findByPk(req.body.id);
    if (!user) { return jsonError(res, 'User not found', 404); }

    await userUpdate(user, req.body, res);
  }
  catch (err) { return jsonError(res, err.message); }
}