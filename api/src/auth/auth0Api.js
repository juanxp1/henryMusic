import { auth } from 'express-oauth2-jwt-bearer'
import User from '../models/User.js'

const { AUTH0_AUDIENCE, AUTH0_ISSUER_BASE_URL } = process.env

export const checkJwt = auth({
  audience: AUTH0_AUDIENCE,
  issuerBaseURL: AUTH0_ISSUER_BASE_URL,
});

// middleware para inyectar el usuario en el request
export const injectUser = async (req, res, next) => {
  if (!req.auth) return next()
  try {
    let user = await User.findByPk(req.auth.payload.sub)
    if (!user) return req.user = { id: req.auth.payload.sub }
    delete user.dataValues.password
    delete user.dataValues.deleted_at
    req.user = user
    next()
  }
  catch (_) { next() }
}

// Old style auth0 code

// import { expressjwt } from 'express-jwt'
// import jwksRsa from 'jwks-rsa'

// export const checkJwt = expressjwt({
//   secret: jwksRsa.expressJwtSecret({
//     cache: true,
//     rateLimit: true,
//     jwksRequestsPerMinute: 5,
//     jwksUri: 'https://dev-183wwf4clw7n6848.us.auth0.com/.well-known/jwks.json'
//   }),
//   audience: 'https://henrymusic.tech/',
//   issuer: 'https://dev-183wwf4clw7n6848.us.auth0.com/',
//   algorithms: ['RS256']
// });