

export const GET_ARTIST_DETAIL = 'GET_ARTIST_DETAIL';
export const GET_ARTIST_ALBUMS = 'GET_ARTIST_ALBUMS';
export const GET_ALBUM_TRACKS = 'GET_ALBUM_TRACKS';
export const GET_TRACK_DETAIL = 'GET_TRACK_DETAIL';
export const GET_SINGLES = 'GET_SINGLES';

const URL = 'http://localhost:3001';

export const getSingles = () => {
    return async function (dispatch) {
        return fetch(`${URL}/Cards`)
            .then(res => res.json())
            .then(json => dispatch({ type: GET_SINGLES, payload: json }))
    };
};


export const getTrackDetail = (artist, track) => {
    return async function (dispatch) {
        return fetch(`${URL}/trackDetail?artist=${artist}&track=${track}`)
            .then(res => res.json())
            .then(json => dispatch({ type: GET_TRACK_DETAIL, payload: json }))

    };

};



export const getArtistDetail = (artist) => {

    return async function (dispatch) {
        return fetch(`${URL}/artistDetail?artist=${artist}`)
            .then(res => res.json())
            .then(json => dispatch({ type: GET_ARTIST_DETAIL, payload: json }))
    };
};

export const getArtistAlbums = (artist) => {
    return async function (dispatch) {
        return fetch(`${URL}/artistAlbums?artist=${artist}`)
            .then(res => res.json())
            .then(json => dispatch({ type: GET_ARTIST_ALBUMS, payload: json }))
    };
};

export const getAlbumTracks = (albumID) => {
    return async function (dispatch) {
        return fetch(`${URL}/albumTracks?albumId=${albumID}`)
            .then(res => res.json())
            .then(json => dispatch({ type: GET_ALBUM_TRACKS, payload: json }))
    };
};