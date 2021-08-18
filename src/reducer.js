export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    //token: "BQAdm0_z_yiOcf5lanotW74z3AtDYKm4nuWPMtwViK2203DmYRBGaBTCPrwDT44zxIGaIetDv3XfOBsz9Ubenu3-N4a8hY1KoGDQV2T6LY0KU8pHwrxfp1WnuyA6BkBESIzuZFnOAQCTAV_qtEdE5rxA7hB1I7RN"
};

const reducer = (state, action) => {

    switch(action.type) {
        case 'SET_USER':
            return{
                ...state,
                user: action.user
            };
        case 'SET_TOKEN':
            return{
                ...state,
                token: action.token
            };
        case 'SET_PLAYLISTS':
            return{
                ...state,
                playlists: action.playlists
            };
        case 'SET_DISCOVER_WEEKLY':
            return{
                ...state,
                discover_weekly: action.discover_weekly
                };
            default:
                return state;
    }

}

export default reducer;