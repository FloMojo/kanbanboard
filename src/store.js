import { createStore, combineReducers, applyMiddleware } from 'redux';
import { cardsReducer }                 from './reducer';
import thunk                            from 'redux-thunk';

const store = createStore(combineReducers({
    cards : cardsReducer
}),applyMiddleware(thunk));

export default store;