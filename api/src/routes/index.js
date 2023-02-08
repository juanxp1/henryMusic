import * as ArtistController from '../controllers/ArtistController.js'
import * as AlbumController from '../controllers/AlbumController.js'
import * as TrackController from '../controllers/TrackController.js'
import { Router } from 'express'
import authRouter from './auth.js'
import { getAlbumTracks, getArtistAlbums, getArtistDetail, getTrackDetail, getRenderSingles } from '../controllers/Controllers.js'
// Importar todos los routers;

const router = Router();

// rutas de theaudiodb
router.get('/artistDetail', getArtistDetail);
router.get('/artistAlbums', getArtistAlbums);
router.get('/albumTracks', getAlbumTracks);
router.get('/trackDetail', getTrackDetail);
router.get("/Cards", getRenderSingles);

// rutas para nuestra api
router.get('/track/search', TrackController.searchTrack)
router.get('/track/:id', TrackController.getTrack)

router.get('/album/search', AlbumController.searchAlbum)
router.get('/album/:id', AlbumController.getAlbum)

router.get('/artist/search', ArtistController.searchArtist)
router.get('/artist/:id', ArtistController.getArtist)

// rutas para la autenticacion
router.use('/auth', authRouter);

export default router;
