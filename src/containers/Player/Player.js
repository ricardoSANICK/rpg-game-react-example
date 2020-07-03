import React, { Component } from 'react';
import { connect } from 'react-redux';
import walkSprite from '../../assets/characters/main/player_walk.png';
import * as actions from '../../store/actions/index';
import * as actionTypes from '../../store/actions/actionTypes';

class Player extends Component {

    handleKeyDown = (e) => {
        e.preventDefault();
        switch(e.keyCode){
            case 37:
                return this.props.onMove(actionTypes.WEST, this.props.position, this.props.tiles, this.props.walkIndex);
            case 38:
                return this.props.onMove(actionTypes.NORTH, this.props.position, this.props.tiles, this.props.walkIndex);
            case 39:
                return this.props.onMove(actionTypes.EAST, this.props.position, this.props.tiles, this.props.walkIndex);
            case 40:
                return this.props.onMove(actionTypes.SOUTH, this.props.position, this.props.tiles, this.props.walkIndex);
            default:
                break;
        }
    }

    componentDidMount() {
        window.addEventListener('keydown', (e) => {
            this.handleKeyDown(e)
        });
    }

    render() {
        return (
            <div 
                style={{
                    position: 'absolute',
                    top: this.props.position[1],
                    left: this.props.position[0],
                    backgroundImage: `url('${walkSprite}')`,
                    backgroundPosition: this.props.spriteLocation,
                    width: '40px',
                    height: '40px'
                }}
            />
        );
    }
}

const mapStateToProps = state =>  {
    return {
        ...state.player,
        ...state.map
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onMove: (direction, position, tiles, walkIndex) => dispatch(actions.attemptMove(direction, position, tiles, walkIndex))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Player)
