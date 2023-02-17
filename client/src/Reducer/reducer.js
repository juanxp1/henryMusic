import { GET_ALBUM, GET_ALL_ALBUMS, GET_ALL_ARTISTS, GET_ALL_TRACKS, GET_ARTIST, GET_TRACK, SEARCH_ALBUM, SEARCH_ARTIST, SEARCH_TRACK, FILTRO_GENERO, RESET_DETALLES } from "../Actions/actions";


export const initialState = {
    trackDetail: [],
    tracks: {},
    artistDetail: {},
    albumDetail: [],
    albums: [],
    artists: [],
    allArtists: [],
    landing: true,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {


        // NUESTRA BASE DE DATOS CASES

        case GET_TRACK:
            return {
                ...state,
                trackDetail: action.payload,
            }

        case RESET_DETALLES:
            return {
                ...state,
                artistDetail: {},
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

        case FILTRO_GENERO:
            const allGeneros = state.allArtists.artists;
            const filtroGenero = action.payload === "All" ? allGeneros :
                allGeneros.filter(el => el.genres[0]?.name.toLowerCase().includes(action.payload.toLowerCase()))
            console.log("asdasdsad", filtroGenero)
            return {
                ...state,
                artists: { ...state.artists, artists: filtroGenero }
            }

        case GET_ALL_ARTISTS:
            return {
                ...state,
                artists: action.payload,
                allArtists: action.payload
            }

        default:
            return { ...state };

    }
}

export default reducer;