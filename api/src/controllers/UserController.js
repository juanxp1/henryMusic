import { models } from "../database/relations.js";
import { jsonError, jsonOk } from "../lib/utils.js";

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