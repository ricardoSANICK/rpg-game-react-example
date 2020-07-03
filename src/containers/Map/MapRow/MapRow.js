import React from 'react';
import MapTile from './MapTile/MapTile';
import { SPRITE_SIZE } from '../../../config/constants';
import '../styles.css';

const MapRow = (props) => {

    return (
        <div 
            className="row"
            style={{ height: SPRITE_SIZE }}
        >
            { props.tiles.map( (tile, index) => <MapTile key={index} tile={tile} />) }
        </div>
    )
}

export default MapRow;