import axios from 'axios';

//Return Artist details from artist name

export const getArtistDetail = async (req, res) => {
    try {
        let { artist } = req.query;
        const pruebaAPI = await axios.get(`https://www.theaudiodb.com/api/v1/json/523532/search.php?s=${artist}`);
         let artista = pruebaAPI.data.artists.map(e => {
             return {
                 id: e.idArtist,
                 name: e.strArtist,
                 image: e.strArtistThumb,
                 country: e.strCountry,
                 Genres:e.strStyle,
             }
         })
      res.send(artista);
        
    } catch (error) {
        res.send({error: error.message});
    }
}

//Return Album details 

export const getArtistAlbums = async (req, res) => {

    try {
        let { artist } = req.query;
        const albumAPI = await axios.get(`https://theaudiodb.com/api/v1/json/523532/searchalbum.php?s=${artist}`);
        let album = albumAPI.data.album.map(e => {
            return {
                id: e.idAlbum,
                image: e.strAlbumThumb,
                name: e.strAlbum,
                genre: e.strGenre,
                year: e.intYearReleased, 
            }
        })
      res.send(album)
        
    } catch (error) {
        res.send({error: error.message}); 
    }

}

export const getAlbumTracks = async (req, res) => {

    try {
        let { albumId } = req.query;
        const tracksAPI = await axios.get(`https://theaudiodb.com/api/v1/json/523532/track.php?m=${albumId}`);
        const tracks = tracksAPI.data.track.map(e => {
            return {
                id: e.idTrack,
                name: e.strTrack,
                duration: e.intDuration,
                genre: e.strGenre,
            }
        })
        res.send({album: tracksAPI.data.track[0].strAlbum,
                tracks})

    } catch (error) {
        res.send({error: error.message});
    }

}

export const getTrackDetail = async (req,res) => {

    try {
        let { artist, track } = req.query;
        const trackAPI = await axios.get(`https://theaudiodb.com/api/v1/json/523532/searchtrack.php?s=${artist}&t=${track}`);
        const trackDetail = trackAPI.data.track.map(e => {
            return {
                id: e.idTrack,
                name: e.strTrack,
                album: e.strAlbum,
                artist: e.strArtist,
                duration: e.intDuration,
                genre: e.strGenre,
                description: e.strDescriptionEN,
            }
        })
        res.send(trackDetail);

    } catch (error) {
        res.send({error: error.message});
    }

}

export const getRenderSingles = async (req,res) => {

    try {
        const singlesAPI = await axios.get(`https://theaudiodb.com/api/v1/json/523532/trending.php?country=us&type=itunes&format=singles`);
        const renderDetail = singlesAPI.data.trending.map(e => {
            return {
                id: e.idTrend,
                name: e.strArtist,
                album: e.strAlbum,
                cancion: e.strTrack,
                imagen: e.strTrackThumb

            }
        })
        res.send(renderDetail);

    } catch (error) {
        res.send({error: error.message});
    }

}