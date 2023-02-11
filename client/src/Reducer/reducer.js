import { GET_ALBUM, GET_ALL_ALBUMS, GET_ALL_ARTISTS, GET_ALL_TRACKS, GET_ARTIST,  GET_TRACK, SEARCH_ALBUM, SEARCH_ARTIST, SEARCH_TRACK } from "../Actions/actions";


export const initialState = {
    trackDetail: [],
    tracks: {},
    artistDetail: {},
    albumDetail: [],
    albums: [],
    artists: [],
    landing: true,
};

const reducer = (state=initialState, action) => {
    switch(action.type) {

        // NUESTRA BASE DE DATOS CASES

        case GET_TRACK:
            return {
                ...state,
                trackDetail: action.payload,
            }

            case "LANDING":
                return {
                    ...state,
                    landing: false,

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