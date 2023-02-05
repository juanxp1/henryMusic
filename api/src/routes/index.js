import { Router } from 'express'
import { getAlbumTracks, getArtistAlbums, getArtistDetail, getTrackDetail } from '../Controllers/Controllers.js'
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

// const cors = require('cors')

const router = Router();




router.post('/precio/checkout', (req, res) =>{
console.log(req.body)
res.send('received')


})
router.get('/artistDetail', getArtistDetail);

router.get('/artistAlbums', getArtistAlbums);

router.get('/albumTracks', getAlbumTracks);

router.get('/trackDetail', getTrackDetail);







export default router;
