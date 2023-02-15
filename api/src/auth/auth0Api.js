import { auth } from 'express-oauth2-jwt-bearer'

const { AUTH0_AUDIENCE, AUTH0_ISSUER_BASE_URL } = process.env

// export const checkJwt = auth({
//   audience: AUTH0_AUDIENCE,
//   issuerBaseURL: AUTH0_ISSUER_BASE_URL,
// });



// Old style auth0 code

import { expressjwt } from 'express-jwt'
import jwksRsa from 'jwks-rsa'

export const checkJwt = expressjwt({
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: 'https://dev-183wwf4clw7n6848.us.auth0.com/.well-known/jwks.json'
  }),
  audience: 'https://henrymusic.tech/',
  issuer: 'https://dev-183wwf4clw7n6848.us.auth0.com/',
  algorithms: ['RS256']
});

// server.get('/api/public', function(req, res) {
//   res.json({
//     message: 'Hello from a public endpoint! You don\'t need to be authenticated to see this.'
//   });
// });

// server.get('/api/private', checkJwt, function(req, res) {
//   res.json({
//     message: 'Hello from a private endpoint! You need to be authenticated to see this.'
//   });
// });
