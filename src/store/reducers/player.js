import * as actionTypes from '../actions/actionTypes';

const initialState = {
    position : [0, 0],
    spriteLocation: '0px 0px',
    direction: 'east',
    walkIndex: 0
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.MOVE_PLAYER:
            return {
                ...action.payload
            }
        default:
            return state;
    }
}

export default reducer;