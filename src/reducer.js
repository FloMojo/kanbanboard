import {
    FETCH_CARDS_BEGIN,
    FETCH_CARDS_SUCCESS,
    FETCH_CARDS_ERROR

} from './actions';

const initialState = {
    cards       : {},
    apiError    : ''
};

export function cardsReducer(state = initialState,action){
    switch (action.type) {
        case FETCH_CARDS_BEGIN:
            {
                return state;
            }
            break;
        case FETCH_CARDS_SUCCESS:
            {
                console.log("SUCCESS",action.payload);
                return {
                    ...state,
                    cards : action.payload
                };
            }
            break;
        case FETCH_CARDS_ERROR:
            {
                return {
                    ...state,
                    apiError : action.payload
                };
            }
            break;
    
        default:
            return state;
            break;
    }
}
