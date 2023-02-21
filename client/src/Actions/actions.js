import axios from 'axios';

const URL = process.env.NODE_ENV === 'production' ? 'https://henrymusic.tech/api' : 'http://localhost:3001/api';

// Actions de nuestra base de datos

export const GET_TOKEN = 'GET_TOKEN';
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
export const RESET_DETALLES = "RESET_DETALLES;"
export const GET_PLAYER = "GET_PLAYER;"
export const IS_PLAYING = 'IS_PLAYING';
export const GET_USER = "GET_USER;"
export const ORDEN_BY_NAME = "ORDEN_BY_NAME;"

const initialLimit = 10;

export const getToken = (token) => {
    return {
        type: GET_TOKEN,
        payload: token
    }
}

export const getTrack = (ID) => {
    return async function (dispatch) {
        const info = await axios.get(`${URL}/track/${ID}`)
        return dispatch({ type: GET_TRACK, payload: info.data })
    };
};

export const searchTrack = (track, limit = initialLimit) => {
    return async function (dispatch) {
        const info = await axios.get(`${URL}/track/search?q=${track}&limit=${limit}`)
        return dispatch({ type: SEARCH_TRACK, payload: info.data })
    };
};

export const getAllTracks = (limit = initialLimit) => {
    return async function (dispatch) {
        const info = await axios.get(`${URL}/track/all?limit=${limit}`)
        return dispatch({ type: GET_ALL_TRACKS, payload: info.data })
    };
};

export const getAlbum = (ID) => {
    return async function (dispatch) {
        const info = await axios.get(`${URL}/album/${ID}`)
        return dispatch({ type: GET_ALBUM, payload: info.data })
    };
};

export const searchAlbum = (album, limit = initialLimit) => {
    return async function (dispatch) {
        const info = await axios.get(`${URL}/album/search?q=${album}&limit=${limit}`)
        return dispatch({ type: SEARCH_ALBUM, payload: info.data })
    };
};

export const getAllAlbums = (limit = initialLimit) => {
    return async function (dispatch) {
        const info = await axios.get(`${URL}/album/all?limit=${limit}`)
        return dispatch({ type: GET_ALL_ALBUMS, payload: info.data })
    };
};

export const getArtist = (ID) => {
    return async function (dispatch) {
        const info = await axios.get(`${URL}/artist/${ID}`)
        return dispatch({ type: GET_ARTIST, payload: info.data })
    };
};

export const searchArtist = (artist, limit = initialLimit) => {
    return async function (dispatch) {
        const info = await axios.get(`${URL}/artist/search?q=${artist}&limit=${limit}`)
        return dispatch({ type: SEARCH_ARTIST, payload: info.data })
    };
};

export const getAllArtists = (limit = initialLimit) => {
    return async function (dispatch) {
        const info = await axios.get(`${URL}/artist/all?limit=${limit}`)
        return dispatch({ type: GET_ALL_ARTISTS, payload: info.data })

    };

};

export const postSong = (song) => {
    return async function () {
        let json = await axios.post(`${URL}`, song)
        return json;
    }
}

export const update = (user) => {
    return async function () {
        let json = await axios.put(`${URL}`, user)
        return json;
    }
}

export const Landing = () => {
    return {
        type: "LANDING"
    }
}

  //reset  detail
export function resetDetalles() {
    return async function (dispatch) {
        dispatch({ type: RESET_DETALLES })
    }
}

export const filtroGenero = (payload) => {
    return {
        type: FILTRO_GENERO,
        payload
    }
}

export const getPlayer = (payload) => {
    return {
        type: GET_PLAYER,
        payload
    }
}

export const isPlaying = () => {
    return {
        type: IS_PLAYING
    }
}

export const getUser = (payload) => {
    return {
        type: GET_USER,
        payload
    }
}

export const ordenPorAbc = (payload) => {
    return {
        type: ORDEN_BY_NAME,
        payload
    }
}
