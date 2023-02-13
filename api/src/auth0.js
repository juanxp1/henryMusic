import expressSession from 'express-session'
import ESS from 'express-session-sequelize'
import { connection } from './database/connection.js';
import eoidc from 'express-openid-connect'

const SequelizeSessionStore = ESS(expressSession.Store)
const { auth } = eoidc
const {
  BASE_URL,
  AUTH0_CLIENT_ID,
  AUTH0_ISSUER_BASE_URL,
  SESSION_SECRET,
} = process.env

export function setupAuth0(server) {
  server.use(auth({
    authRequired: false,
    auth0Logout: true,
    secret: SESSION_SECRET,
    baseURL: BASE_URL,
    clientID: AUTH0_CLIENT_ID,
    issuerBaseURL: AUTH0_ISSUER_BASE_URL,
    session: { store: new SequelizeSessionStore({ db: connection }) },
    routes: {
      login: false
    }
  }))

  // server.use(expressSession({
  //   secret: process.env.SESSION_SECRET,
  //   resave: false,
  //   saveUninitialized: true,
  //   store: new SequelizeSessionStore({ db: connection }),
  // }))
}

export const requiresAuth = eoidc.requiresAuth

/*
import { expressjwt } from 'express-jwt'
import jwksRsa from 'jwks-rsa'

const checkJwt = expressjwt({
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: 'https://dev-1qthsdxhtwz6pywj.us.auth0.com/.well-known/jwks.json'
  }),
  audience: 'https://henrymusic.tech',
  issuer: 'https://dev-1qthsdxhtwz6pywj.us.auth0.com/',
  algorithms: ['RS256']
});

server.get('/api/public', function(req, res) {
  res.json({
    message: 'Hello from a public endpoint! You don\'t need to be authenticated to see this.'
  });
});

server.get('/api/private', checkJwt, function(req, res) {
  res.json({
    message: 'Hello from a private endpoint! You need to be authenticated to see this.'
  });
});
*/