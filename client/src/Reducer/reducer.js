import { GET_TOKEN, GET_ALBUM, GET_ALL_ALBUMS, GET_ALL_ARTISTS, GET_ALL_TRACKS, GET_ARTIST, GET_TRACK, SEARCH_ALBUM, SEARCH_ARTIST, SEARCH_TRACK, FILTRO_GENERO, RESET_DETALLES, GET_PLAYER, IS_PLAYING, ORDEN_BY_NAME } from "../Actions/actions";


export const initialState = {
    token: null,
    trackDetail: [],
    tracks: {},
    artistDetail: {},
    albumDetail: [],
    albums: [],
    artists: [],
    allArtists: [],
    player: { tracks: [], playing: false },
    landing: true,
};

const reducer = (state = initialState, action) => {
    switch (action.type) {

        // NUESTRA BASE DE DATOS CASES
        case GET_TOKEN:
            return {
                ...state,
                token: action.payload,
            }

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

        case GET_PLAYER:
            return {
                ...state,
                player: { ...state.player, tracks: action.payload }
            }

        case IS_PLAYING:
            return {
                ...state,
                player: { ...state.player, playing: true }
            }

        case ORDEN_BY_NAME:
            let order = action.payload === 'asc' ?
            state.allArtists.artists.sort(function (a, b) {

                if (a.name.toLowerCase() > b.name.toLowerCase()) {

                    return 1
                }
                if (b.name.toLowerCase() > a.name.toLowerCase()) {
                    return -1
                }
                return 0
            }) :
            state.allArtists.artists.sort(function (a, b) {
                if (a.name.toLowerCase() > b.name.toLowerCase()) {
                    return -1
                }
                if (b.name.toLowerCase() > a.name.toLowerCase()) {
                    return 1
                }
                return 0
            })
        return {
            ...state,
            ORDEN_BY_NAME: order

        }






        default:
            return { ...state };

    }
}

export default reducer;