import { GET_ALBUM_TRACKS, GET_ARTIST_ALBUMS, GET_ARTIST_DETAIL, GET_SINGLES, GET_TRACK_DETAIL } from "../Actions/actions";


export const initialState = {
    singles: [],
    trackDetail: [],
    artistDetail: [],
    artistAlbums: [],
    albumTracks: [],
};

const reducer = (state=initialState, action) => {
    switch(action.type) {

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

        default:
            return { ...state };

    }
}

export default reducer;