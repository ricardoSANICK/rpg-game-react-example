import React from 'react';
import { SPRITE_SIZE } from '../../../../config/constants';
import '../../styles.css';

const MapTile = (props) => {

    const getTileSprite = (type) => {
        switch(type) {
            case 0: return 'grass';
            case 3: return 'tree';
            case 4: return 'chest';
            case 5: return 'rock';
            case 6: return 'tree';
            default: return 'grass';
        }
    }

    return (
        <div 
            className={`tile ${getTileSprite(props.tile)}`}
            style={{ height: SPRITE_SIZE, width: SPRITE_SIZE}}
        />
    );
}

export default MapTile;