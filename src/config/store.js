import { createStore, combineReducers } from 'redux';
import playerReducer from '../store/reducers/player';
import mapReducer from '../store/reducers/map';

const rootReducer = combineReducers({
    player: playerReducer,
    map: mapReducer
});

const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;