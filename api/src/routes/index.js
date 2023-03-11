import * as ArtistController from '../controllers/ArtistController.js'
import * as AlbumController from '../controllers/AlbumController.js'
import * as FrontController from '../controllers/FrontController.js'
import * as TrackController from '../controllers/TrackController.js'
import * as UserController from '../controllers/UserController.js'
import * as AdminController from '../controllers/AdminController.js'
import * as PlaylistController from '../controllers/PlaylistController.js'
import authRouter from './auth.js'
import multer from 'multer'
import { Router } from 'express'
import { checkJwt, injectUser, checkAdmin } from '../auth/auth0Api.js'

const router = Router();
const secured = Router();
const admin = Router();
const upload = multer({ dest: process.env.UPLOADS_PATH })
const uploadMultiple = upload.fields([
  { name: 'image', maxCount: 1 },
  { name: 'song', maxCount: 1 }
])
const uploadImage = upload.single('image')

// --- rutas publicas ---
// Esta ruta es llamada solo desde Auth0
router.post('/api/register-auth0-user', UserController.createUser)

// --- rutas privadas, se necesita un token valido para acceder a ellas
secured.get('/front', FrontController.getFront)

secured.get('/user', UserController.getUser)
secured.post('/user/update', uploadImage, UserController.updateMyUser)
secured.post('/user/delete', UserController.deleteUser)

admin.get('/user/all', AdminController.getAllUsers)
admin.get('/user/search', AdminController.searchUser)
admin.get('/user/:id', AdminController.getUser)
admin.post('/user/update', AdminController.updateUser)
admin.post('/user/delete', AdminController.deleteUser)
admin.post('/user/restore', AdminController.restoreUser)

secured.get('/track/all', TrackController.getAllTracks)
secured.get('/track/search', TrackController.searchTrack)
secured.get('/track/:id', TrackController.getTrack)
secured.get('/song/all', TrackController.getAllSongs)
secured.get('/song/search', TrackController.searchSongs)
secured.get('/song/:id', TrackController.getSong)
secured.post('/song/create', uploadMultiple, TrackController.createSong)
secured.post('/song/update', TrackController.updateSong)
secured.post('/song/delete', TrackController.deleteSong)

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
router.use('/api', checkJwt, injectUser, secured);
router.use('/api/admin', checkJwt, injectUser, checkAdmin, admin);

export default router;