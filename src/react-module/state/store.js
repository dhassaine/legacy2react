import {createStore, applyMiddleware, combineReducers, compose} from 'redux';
import globalDucks from './ducks';

export function mapDucksToReducers(ducks) {
    const reducers = Object.keys(ducks).map(key => {
        const duck = ducks[key];
        return {
            [duck.mountPoint]: duck.reducer
        };
    });
    return Object.assign({}, ...reducers);
}


export default function makeStore() {    
    const ducks = Object.assign(globalDucks);
    const reducers = mapDucksToReducers(ducks);
    const rootReducer = combineReducers(reducers);
    return createStore(rootReducer);
}