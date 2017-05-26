import {createStore, applyMiddleware, combineReducers, compose} from 'redux';
import globalDucks from './ducks';

// We only have one Duck at the moment, but if we had more
// this is one approach to extracting the reducers to pass into
// the redux createStore factory function
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