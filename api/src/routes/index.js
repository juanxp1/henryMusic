import * as ArtistController from '../controllers/ArtistController.js'
import * as AlbumController from '../controllers/AlbumController.js'
import * as TrackController from '../controllers/TrackController.js'
import * as UserController from '../controllers/UserController.js'
import * as PlaylistController from '../controllers/PlaylistController.js'
import authRouter from './auth.js'
import multer from 'multer'
import { Router } from 'express'
import { checkJwt, injectUser } from '../auth/auth0Api.js'

const router = Router();
const secured = Router();
const upload = multer({ dest: process.env.UPLOADS_PATH })
const fieldsUpload = upload.fields([
  { name: 'image', maxCount: 1 },
  { name: 'song', maxCount: 1 }
])

// --- rutas publicas ---
// Esta ruta es llamada solo desde Auth0
router.post('/api/register-auth0-user', UserController.createUser)

// --- rutas privadas, se necesita un token valido para acceder a ellas
secured.get('/user', UserController.getUser)
secured.post('/user/update', UserController.updateUser)
secured.post('/user/delete', UserController.deleteUser)

secured.get('/track/all', TrackController.getAllTracks)
secured.get('/track/search', TrackController.searchTrack)
secured.get('/track/:id', TrackController.getTrack)
secured.get('/song/all', TrackController.getAllSongs)
secured.get('/song/search', TrackController.searchSongs)
secured.post('/song/create', fieldsUpload, TrackController.createSong)

secured.get('/album/all', AlbumController.getAllAlbums)
secured.get('/album/search', AlbumController.searchAlbum)
secured.get('/album/:id', AlbumController.getAlbum)

secured.get('/artist/all', ArtistController.getAllArtists)
secured.get('/artist/search', ArtistController.searchArtist)
secured.get('/artist/:id', ArtistController.getArtist)

secured.get('/playlist/all', PlaylistController.getAllPlaylists)
secured.get('/playlist/search', PlaylistController.searchPlaylists)
secured.get('/playlist/:id', PlaylistController.getPlaylist)
secured.post('/playlist/create', PlaylistController.createPlaylist)
secured.post('/playlist/update', PlaylistController.updatePlaylist)
secured.post('/playlist/delete', PlaylistController.deletePlaylist)
secured.get('/playlist/track/all', PlaylistController.getPlaylistTracks)
secured.post('/playlist/track/add', PlaylistController.addTrackToPlaylist)
secured.post('/playlist/track/remove', PlaylistController.removeTrackFromPlaylist)

// --- setup de las rutas ---
router.use('/', authRouter);// ruta para la autenticacion
router.use('/api', injectUser, secured);

export default router;