import React from 'react';
import { connect } from 'react-redux';
import MapRow from './MapRow/MapRow';
import './styles.css';

const Map = (props) => {

    return (
        <div 
            style={{
                position: 'relative',
                top: '0px',
                left: '0px',
                width: '800px',
                height: '480px',
                border: '4px solid white',
            }}>
                { props.tiles.map( (row, index) => <MapRow key={index} tiles={row} /> ) }
        </div>
    );
    
}

const mapStateToProps = (state) => {
    return {
        tiles: state.map.tiles
    }
}

export default connect(mapStateToProps)(Map) 