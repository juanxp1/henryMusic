import { models } from "../database/relations.js";
import { jsonError, jsonOk } from "../lib/utils.js";
import short from 'short-uuid';

const { User, Image } = models;

export async function getUser(req, res) {
  const { sub } = req.auth;
  try {
    const user = await User.findOne({
      where: { id: sub },
      attributes: { exclude: ['password', 'image_id', 'created_at', 'updated_at'] },
      include: [
        { model: Image, as: 'avatar', attributes: ['id', 'url', 'width', 'height'] }
      ]
    });
    if (!user) { return jsonError(res, 'User not found', 404); }
    return jsonOk(res, user);
  }
  catch (err) { return jsonError(res, err.message); }
}

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