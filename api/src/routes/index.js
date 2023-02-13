import * as ArtistController from '../controllers/ArtistController.js'
import * as AlbumController from '../controllers/AlbumController.js'
import * as TrackController from '../controllers/TrackController.js'
import { Router } from 'express'
import authRouter from './auth.js'
import multer from 'multer'
// Importar todos los routers;

const router = Router();
const upload = multer({ dest: process.env.UPLOADS_PATH })
const fieldsUpload = upload.fields([
  { name: 'image', maxCount: 1 },
  { name: 'song', maxCount: 1 }
])

// rutas para nuestra api
router.get('/api/track/all', TrackController.getAllTracks)
router.get('/api/track/search', TrackController.searchTrack)
router.get('/api/track/:id', TrackController.getTrack)
router.post('/api/track/create', fieldsUpload, TrackController.postSong)
router.get('/api/song/all', TrackController.getAllSongs)

router.get('/api/album/all', AlbumController.getAllAlbums)
router.get('/api/album/search', AlbumController.searchAlbum)
router.get('/api/album/:id', AlbumController.getAlbum)

router.get('/api/artist/all', ArtistController.getAllArtists)
router.get('/api/artist/search', ArtistController.searchArtist)
router.get('/api/artist/:id', ArtistController.getArtist)

// rutas para la autenticacion
router.use('/', authRouter);

export default router;
