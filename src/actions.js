export const FETCH_CARDS_BEGIN      = 'FETCH_CARDS_BEGIN';
export const FETCH_CARDS_SUCCESS    = 'FETCH_CARDS_SUCCESS';
export const FETCH_CARDS_ERROR      = 'FETCH_CARDS_ERROR';

export const fetchCards = () => {
    return dispatch => {
        dispatch(fetchCardsBegin());
        //this only works as thunk is imported as middleware (see app.js)
        return fetch('http://localhost:8081/getCards')
        .then(response => {
            if ( !response.ok ) {
                throw Error(response.statusText);
            } else {
                return response;
            }
        })
        .then(response => response.json() )
        .then(cards => {dispatch(fetchCardsSuccess(cards));console.log("CARDS",cards);})
        .then(error => dispatch(fetchCardsError(error)));
    };
}

export const fetchCardsBegin = ()=>{
    return {
        type : FETCH_CARDS_BEGIN
    };
}

export const fetchCardsSuccess = (cards) =>{
    console.log("fectchCardsSucccess",{cards});
    return {
        type : FETCH_CARDS_SUCCESS,
        payload : cards
    };
}

export const fetchCardsError = (error) =>{
    return {
        type : FETCH_CARDS_ERROR,
        payload : { error }
    };
}


export const fetchCardUpdate = (item) => {
    return dispatch => {
        dispatch(fetchCardsBegin());

        return fetch('http://localhost:8081/setNewStatus',{ 
            method : 'post',headers: { 'Accept': 'application/json','Content-Type': 'application/json'}, body : JSON.stringify({ itemId : item })})
        .then(response => {
            console.log("FETCHED Card Update reponse error handling",response);
            if ( !response.ok ) {
                throw Error(response.statusText);
            } else {
                return response;
            }
        })
        .then(response => {
            console.log("FETCHED Card Update reponse",response);
            return response.json();
        })
        .then(cards => {
            console.log("FETCHED Card Update",cards);
            return dispatch(fetchCardsSuccess(cards));
        })
        .catch(error => dispatch(fetchCardsError(error)));
    };
}