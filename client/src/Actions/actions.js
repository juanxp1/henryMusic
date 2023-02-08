
// Actions de la API AudioDB

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

// Actions de nuestra base de datos

export const GET_TRACK = 'GET_TRACK';
export const SEARCH_TRACK = 'SEARCH_TRACK';
export const GET_ALBUM = 'GET_ALBUM';
export const SEARCH_ALBUM = 'SEARCH_ALBUM';
export const GET_ARTIST = 'GET_ARTIST';
export const SEARCH_ARTIST = 'SEARCH_ARTIST';


export const getTrack = (ID) => {
    return async function (dispatch) {
        return fetch(`${URL}/track/${ID}`)
            .then(res => res.json())
            .then(json => dispatch({ type: GET_TRACK, payload: json }))
    };
};

export const searchTrack = (track) => {
    return async function (dispatch) {
        return fetch(`${URL}/track/search?q=${track}`)
            .then(res => res.json())
            .then(json => dispatch({ type: SEARCH_TRACK, payload: json }))
    };
};

export const getAlbum = (ID) => {
    return async function (dispatch) {
        return fetch(`${URL}/album/${ID}`)
            .then(res => res.json())
            .then(json => dispatch({ type: GET_ALBUM, payload: json }))
    };
};

export const searchAlbum = (album) => {
    return async function (dispatch) {
        return fetch(`${URL}/album/search?q=${album}`)
            .then(res => res.json())
            .then(json => dispatch({ type: SEARCH_ALBUM, payload: json }))
    };
};

export const getArtist = (ID) => {
    return async function (dispatch) {
        return fetch(`${URL}/artist/${ID}`)
            .then(res => res.json())
            .then(json => dispatch({ type: GET_ARTIST, payload: json }))
    };
};

export const searchArtist = (artist) => {
    return async function (dispatch) {
        return fetch(`${URL}/artist/search?q=${artist}`)
            .then(res => res.json())
            .then(json => dispatch({ type: SEARCH_ARTIST, payload: json }))
    };
};


