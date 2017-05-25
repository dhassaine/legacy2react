const SET_VALUE = 'KVSTORE:SET_VALUE';
const GET_VALUE = 'KVSTORE:GET_VALUE';
const STORE_MOUNT_POINT = 'KVSTORE';

const setValue = (key, data) => ({type: SET_VALUE, payload: {key, data}});
const getValue = (state, key) => {
    return state[STORE_MOUNT_POINT].get(key);
};

const initialState = {};
const reducer = (state = initialState, action = {}) => {
    switch (action.type) {
        case SET_VALUE:
            return state.set(action.payload.key, action.payload.data);
        default:
            return state;
    }
};

const keyvalues = {
    mountPoint: STORE_MOUNT_POINT,
    actionTypes: {SET_VALUE, GET_VALUE},
    actionCreators: {setValue},
    selectors: {getValue},
    reducer
};

export default keyvalues;