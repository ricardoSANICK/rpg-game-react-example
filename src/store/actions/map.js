import * as actionTypes from './actionTypes';
import { tiles } from '../../data/maps/1';

export const initTiles = () => {
    return {
        type: actionTypes.ADD_TILES,
        payload: {
            tiles: tiles
        }
    }
}
