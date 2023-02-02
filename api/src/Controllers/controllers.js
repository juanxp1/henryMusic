import axios from 'axios';

//Return Artist details from artist name
const getArtistAPI = async () => {
    try {
        const pruebaAPI = await axios.get(`https://www.theaudiodb.com/api/v1/json/2/search.php?s=coldplay`);
        let artista = pruebaAPI.data.artists.map(e => {
            return {
                id: e.idArtist,
                name: e.strArtist,
                image: e.strArtistThumb,
                country: e.strCountry,
                Genres:e.strStyle,
            }
        })
      console.log(artista);
      return artista;
        
    } catch (error) {
        console.log(error);
    }
}
//Return Album details 

const getAlbumAPI = async () => {
    try {
        const albumAPI = await axios.get(`https://theaudiodb.com/api/v1/json/2/discography.php?s=coldplay`);
        let album = albumAPI.data.album.map(e => {
            return {
                albumName: e.strAlbum,
                year: e.intYearReleased, 
            }
        })
      console.log(album);
      return album;
        
    } catch (error) {
        console.log(error); 
    }
}


export default {
    getArtistAPI,
    getAlbumAPI
}
