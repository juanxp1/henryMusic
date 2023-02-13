import axios from 'axios';

const URL = 'http://localhost:3001';

// Actions de nuestra base de datos

export const GET_TRACK = 'GET_TRACK';
export const SEARCH_TRACK = 'SEARCH_TRACK';
export const GET_ALBUM = 'GET_ALBUM';
export const SEARCH_ALBUM = 'SEARCH_ALBUM';
export const GET_ARTIST = 'GET_ARTIST';
export const SEARCH_ARTIST = 'SEARCH_ARTIST';
export const GET_ALL_TRACKS = 'GET_ALL_TRACKS';
export const GET_ALL_ALBUMS = 'GET_ALL_ALBUMS';
export const GET_ALL_ARTISTS = 'GET_ALL_ARTISTS';
export const FILTRO_GENERO = 'FILTRO_GENERO';


const initialLimit = 10;

export const getTrack = (ID) => {
    return async function (dispatch) {
        return fetch(`${URL}/track/${ID}`)
            .then(res => res.json())
            .then(json => dispatch({ type: GET_TRACK, payload: json }))
    };
};

export const searchTrack = (track, limit = initialLimit) => {
    return async function (dispatch) {
        return fetch(`${URL}/track/search?q=${track}&limit=${limit}`)
            .then(res => res.json())
            .then(json => dispatch({ type: SEARCH_TRACK, payload: json }))
    };
};

export const getAllTracks = (limit = initialLimit) => {
    return async function (dispatch) {
        return fetch(`${URL}/track/all?limit=${limit}`)
            .then(res => res.json())
            .then(json => dispatch({ type: GET_ALL_TRACKS, payload: json }))
    };
};

export const getAlbum = (ID) => {
    return async function (dispatch) {
        return fetch(`${URL}/album/${ID}`)
            .then(res => res.json())
            .then(json => dispatch({ type: GET_ALBUM, payload: json }))
    };
};

export const searchAlbum = (album, limit = initialLimit) => {
    return async function (dispatch) {
        return fetch(`${URL}/album/search?q=${album}&limit=${limit}`)
            .then(res => res.json())
            .then(json => dispatch({ type: SEARCH_ALBUM, payload: json }))
    };
};

export const getAllAlbums = (limit = initialLimit) => {
    return async function (dispatch) {
        return fetch(`${URL}/album/all?limit=${limit}`)
            .then(res => res.json())
            .then(json => dispatch({ type: GET_ALL_ALBUMS, payload: json }))
    };
};

export const getArtist = (ID) => {
    return async function (dispatch) {
        return fetch(`${URL}/artist/${ID}`)
            .then(res => res.json())
            .then(json => dispatch({ type: GET_ARTIST, payload: json }))
    };
};

export const searchArtist = (artist, limit = initialLimit) => {
    return async function (dispatch) {
        return fetch(`${URL}/artist/search?q=${artist}&limit=${limit}`)
            .then(res => res.json())
            .then(json => dispatch({ type: SEARCH_ARTIST, payload: json }))
    };
};

export const getAllArtists = (limit = initialLimit) => {
    return async function (dispatch) {
        return fetch(`${URL}/artist/all?limit=${limit}`)
            .then(res => res.json())
            .then(json => dispatch({ type: GET_ALL_ARTISTS, payload: json }))

    };

};

export const postSong = (song) => {
    return async function () {
        let json = await axios.post(`${URL}`, song)
        return json;
    }
}


export const Landing = () => {
    return {
        type: "LANDING"
    }


}

export const filtroGenero = (payload) => {
    return {
        type: FILTRO_GENERO,
        payload
    }
}