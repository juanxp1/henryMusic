import { auth } from 'express-oauth2-jwt-bearer'
import axios from 'axios'
import shortUUID from 'short-uuid'
import User from '../models/User.js'

const { AUTH0_AUDIENCE, AUTH0_ISSUER_BASE_URL } = process.env

export const checkJwt = auth({
  audience: AUTH0_AUDIENCE,
  issuerBaseURL: AUTH0_ISSUER_BASE_URL,
});

export const checkAdmin = (req, res, next) => {
  if (req.user.rol !== 100)
    return res.status(401).json({message: 'Unauthorized'})
  next()
}

// middleware para inyectar el usuario en el request
export const injectUser = async (req, res, next) => {
  if (!req.auth) return next()
  try {
    const { sub } = req.auth.payload
    let user = await User.findByPk(sub)
    if (!user) {
      user = await createUser(req.headers)
      user || (user = { id: sub, dataValues: {} })
    }
    delete user.dataValues.password
    delete user.dataValues.deleted_at
    req.user = user
    next()
  }
  catch (_) { next() }
}

async function createUser(headers) {
  try {
    const bearer = headers.authorization
    const { data } = await axios.get(`${AUTH0_ISSUER_BASE_URL}/userinfo`, {headers: {Authorization: bearer}})

    const user = await User.create({
      id: data.sub,
      name: data.name || null,
      username: data.nickname || null,
      email: data.email || null,
      password: null,
      country_id: null,
    })
    user.createPlaylist({
      id: shortUUID.generate(),
      name: 'liked songs',
      description: 'songs you liked',
    })
    return user
  }
  catch (err) { return null }
}

// Old style auth0 code

// import { expressjwt } from 'express-jwt'
// import jwksRsa from 'jwks-rsa'

// export const checkJwt = expressjwt({
//   secret: jwksRsa.expressJwtSecret({
//     cache: true,
//     rateLimit: true,
//     jwksRequestsPerMinute: 5,
//     jwksUri: AUTH0_ISSUER_BASE_URL + '/.well-known/jwks.json'
//   }),
//   audience: AUTH0_AUDIENCE,
//   issuer: AUTH0_ISSUER_BASE_URL + '/',
//   algorithms: ['RS256']
// });