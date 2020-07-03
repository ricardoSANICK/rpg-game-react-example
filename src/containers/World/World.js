import React from 'react';
import Player from '../Player/Player';
import Map from '../Map/Map';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/index';

const World = (props) => {

    props.onInitTiles();

    return (
        <div
            style={{
                position: 'relative',
                width: '800px',
                height: '400px',
                margin: '20px auto'
            }}
        >
            <Map />
            <Player />
        </div>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        onInitTiles: () => dispatch(actions.initTiles())
    }
}

export default connect(null, mapDispatchToProps)(World);