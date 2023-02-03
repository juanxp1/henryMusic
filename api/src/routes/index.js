import { Router } from 'express'
import { getAlbumTracks, getArtistAlbums, getArtistDetail, getTrackDetail } from '../Controllers/controllers.js'
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

router.get('/artistDetail', getArtistDetail);

router.get('/artistAlbums', getArtistAlbums);

router.get('/albumTracks', getAlbumTracks);

router.get('/trackDetail', getTrackDetail);







export default router;