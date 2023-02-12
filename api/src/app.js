import * as dotenv from 'dotenv'; dotenv.config()
import express from 'express';
import cookieParser from 'cookie-parser';
import morgan from 'morgan';
import routes from './routes/index.js';
import { setupAuth0 } from './auth0.js';

const server = express();
// ruta donde se guardaran todos los archivos que se suban al servidor, ex: D:\proyectos\henry\public
// el servidor tiene su propia ruta especificada en el archivo .env
const { STORAGE_PATH, UPLOADS_PATH } = process.env;
global.STORAGE_PATH = STORAGE_PATH;
global.UPLOADS_PATH = UPLOADS_PATH;

server.use(express.urlencoded({ extended: true, limit: '50mb' }))
server.use(express.json({ limit: '50mb' }))
server.use(cookieParser());
server.use(morgan('dev'));
server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*'); // update to match the domain you will make the request from
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});

setupAuth0(server)

server.use('/', routes);
server.use('/', express.static(STORAGE_PATH))

// Error catching endware.
server.use((err, req, res, next) => { // eslint-disable-line no-unused-vars
  const status = err.status || 500;
  const message = err.message || err;
  console.error(err);
  res.status(status).send(message);
});

export default server

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