import * as actionTypes from './actionTypes';
import { SPRITE_SIZE, MAP_WIDTH, MAP_HEIGHT } from '../../config/constants';

export const getNewPosition = (position, direction) => {
    const oldPos = position;
    switch(direction) {
        case actionTypes.WEST:
            return [ oldPos[0] - SPRITE_SIZE, oldPos[1] ];
        case actionTypes.EAST:
            return [ oldPos[0] + SPRITE_SIZE, oldPos[1] ];
        case actionTypes.NORTH:
            return [ oldPos[0], oldPos[1] - SPRITE_SIZE ];
        case actionTypes.SOUTH:
            return [ oldPos[0], oldPos[1] + SPRITE_SIZE ];
        default:
            console.log(direction);
    }
};

export const getSpriteLocation = (direction, walkIndex) => {
    switch(direction) {
        case actionTypes.SOUTH:
            return `${SPRITE_SIZE * walkIndex}px ${SPRITE_SIZE * 0}px`
        case actionTypes.EAST:
            return `${SPRITE_SIZE * walkIndex}px ${SPRITE_SIZE * 1}px`
        case actionTypes.WEST:
            return `${SPRITE_SIZE * walkIndex}px ${SPRITE_SIZE * 2}px`
        case actionTypes.NORTH:
            return `${SPRITE_SIZE * walkIndex}px ${SPRITE_SIZE * 3}px`
        default: break;
    }
}

export const getWalkIndex = (paramWalkIndex) => {
    //const walkIndex = store.getState().player.walkIndex;
    const walkIndex = paramWalkIndex;
    return walkIndex >= 7 ? 0 : walkIndex + 1;
}

export const observeBoundaries = (oldPos, newPos) => {
    return (newPos[0] >= 0 && newPos[0] <= MAP_WIDTH - SPRITE_SIZE) &&
           (newPos[1] >= 0 && newPos[1] <= MAP_HEIGHT - SPRITE_SIZE);
}

export const observeImpassable = (oldPos, newPos, tiles) => {
    const y = newPos[1] / SPRITE_SIZE;
    const x = newPos[0] / SPRITE_SIZE;
    const nextTile = tiles[y][x];
    return  nextTile < 5;
}

export const dispatchMove = (direction, newPos, paramWalkIndex) => {
    const walkIndex = getWalkIndex(paramWalkIndex);
    return {
        type: actionTypes.MOVE_PLAYER,
        payload: {
            position: newPos,
            direction: direction,
            walkIndex: walkIndex,
            spriteLocation: getSpriteLocation(direction, walkIndex)
        }
    }
}

export const attemptMove = (direction, position, tiles, paramWalkIndex) => {
    const oldPos = position;
    const newPos = getNewPosition(oldPos, direction);
    if(observeBoundaries(oldPos, newPos) && observeImpassable(oldPos, newPos, tiles) ) {
        return dispatchMove(direction, newPos, paramWalkIndex);
    }
    return {
        type: actionTypes.MOVE_PLAYER,
        payload: { 
            position: oldPos,
            direction: direction,
            walkIndex: paramWalkIndex,
            spriteLocation: getSpriteLocation(direction, paramWalkIndex)
        }
    }
    
}

