import * as ArtistController from '../controllers/ArtistController.js'
import * as AlbumController from '../controllers/AlbumController.js'
import * as TrackController from '../controllers/TrackController.js'
import * as UserController from '../controllers/UserController.js'
import authRouter from './auth.js'
import multer from 'multer'
import { Router } from 'express'
import { checkJwt } from '../auth/auth0Api.js'

const router = Router();
const secured = Router();
const upload = multer({ dest: process.env.UPLOADS_PATH })
const fieldsUpload = upload.fields([
  { name: 'image', maxCount: 1 },
  { name: 'song', maxCount: 1 }
])

// rutas publicas eg:
// router.get('/public', PublicController.getSomething)
router.post('/api/register-auth0-user', UserController.createUser)

// rutas privadas, se necesita un token valido para acceder a ellas
secured.get('/track/all', TrackController.getAllTracks)
secured.get('/track/search', TrackController.searchTrack)
secured.get('/track/:id', TrackController.getTrack)
secured.post('/song/create', fieldsUpload, TrackController.createSong)
secured.get('/song/all', TrackController.getAllSongs)

secured.get('/album/all', AlbumController.getAllAlbums)
secured.get('/album/search', AlbumController.searchAlbum)
secured.get('/album/:id', AlbumController.getAlbum)

secured.get('/artist/all', ArtistController.getAllArtists)
secured.get('/artist/search', ArtistController.searchArtist)
secured.get('/artist/:id', ArtistController.getArtist)

secured.get('/user', UserController.getUser)
secured.get('/user/edit', UserController.getUser)

// setup de las rutas
router.use('/', authRouter);// ruta para la autenticacion
router.use('/api', checkJwt, secured);

export default router;