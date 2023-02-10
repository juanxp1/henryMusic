import * as ArtistController from '../controllers/ArtistController.js'
import * as AlbumController from '../controllers/AlbumController.js'
import * as TrackController from '../controllers/TrackController.js'
import { Router } from 'express'
import authRouter from './auth.js'
// Importar todos los routers;

const router = Router();

// rutas para nuestra api
router.get('/track/all', TrackController.getAllTracks)
router.get('/track/search', TrackController.searchTrack)
router.get('/track/:id', TrackController.getTrack)
router.post('/track/create', TrackController.postSong)

router.get('/album/all', AlbumController.getAllAlbums)
router.get('/album/search', AlbumController.searchAlbum)
router.get('/album/:id', AlbumController.getAlbum)

router.get('/artist/all', ArtistController.getAllArtists)
router.get('/artist/search', ArtistController.searchArtist)
router.get('/artist/:id', ArtistController.getArtist)

// rutas para la autenticacion
router.use('/auth', authRouter);

export default router;
