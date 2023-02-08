import { GET_ALBUM, GET_ALBUM_TRACKS, GET_ALL_ALBUMS, GET_ALL_ARTISTS, GET_ALL_TRACKS, GET_ARTIST, GET_ARTIST_ALBUMS, GET_ARTIST_DETAIL, GET_SINGLES, GET_TRACK, GET_TRACK_DETAIL, SEARCH_ALBUM, SEARCH_ARTIST, SEARCH_TRACK } from "../Actions/actions";


export const initialState = {
    singles: [],
    trackDetail: [],
    tracks: [],
    artistDetail: [],
    artistAlbums: [],
    albumTracks: [],
    albumDetail: [],
    albums: [],
    artists: [],
};

const reducer = (state=initialState, action) => {
    switch(action.type) {

        // API AUDIODB CASES

        case GET_SINGLES:
            return {
                ...state,
                singles: action.payload,
            }

        case GET_TRACK_DETAIL:
            return {
                ...state,
                trackDetail: action.payload,
            }

        case GET_ALBUM_TRACKS:
            return {
                ...state,
                albumTracks: action.payload,
            }

        case GET_ARTIST_ALBUMS:
            return {
                ...state,
                artistAlbums: action.payload,
            }

        case GET_ARTIST_DETAIL:
            return {
                ...state,
                artistDetail: action.payload,
            }

        // NUESTRA BASE DE DATOS CASES

        case GET_TRACK:
            return {
                ...state,
                trackDetail: action.payload,
            }

        case SEARCH_TRACK:
            return {
                ...state,
                tracks: action.payload,
            }

        case GET_ALBUM:
            return {
                ...state,
                albumDetail: action.payload,
            }

        case SEARCH_ALBUM:
            return {
                ...state,
                albums: action.payload,
            }

        case GET_ARTIST:
            return {
                ...state,
                artistDetail: action.payload,
            }

        case SEARCH_ARTIST:
            return {
                ...state,
                artists: action.payload,
            }

        case GET_ALL_TRACKS:
            return {
                ...state,
                tracks: action.payload,
            }

        case GET_ALL_ALBUMS:
            return {
                ...state,
                albums: action.payload,
            }

        case GET_ALL_ARTISTS:
            return {
                ...state,
                artists: action.payload,
            }

        default:
            return { ...state };

    }
}

export default reducer;