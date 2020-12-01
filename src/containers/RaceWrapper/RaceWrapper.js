import React, { Component, Fragment } from 'react'
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Race from '../../components/Race/Race'
import * as ReducerActions from '../../store/game/actions/index'
import RaceSetup from '../../components/RaceSetup/RaceSetup'
import PlayerSection from '../../components/PlayerSection/PlayerSection'
import * as Classes from './RaceWrapper.module.css'
import RaceComplete from '../../components/RaceComplete/RaceComplete';

class RaceWrapper extends Component {
    constructor(props) {
        super(props)
        console.log('[Racewrapper] constructor');
        this.state = {

        }

        this.props.reset();
        // const questiontype = {
        //     type: '+-',
        //     nos: 4,
        //     digits: 3,
        //     decimals: 0,
        // };
        // this.props.init('Nanna', 'Hasana', questiontype);
        // this.props.start();
    }

    shouldComponentUpdate(nextProps, newState) {
        console.log('[RaceWrapper] shouldComponentUpdate', !this.props.players && nextProps.players);
        return (!this.props.players && nextProps.players) || this.props.starttime !== nextProps.starttime
            || this.props.endtime !== nextProps.endtime;
        // return true;
    }

    render() {
        console.log('[Racewrapper] render', this.props.players, this.props.endtime);

        if (!this.props.starttime)
            return (<div className={Classes.Race}><RaceSetup /></div>);
        else if (this.props.endtime)
            return (<div className={Classes.Race}><RaceComplete players={this.props.players} reset={this.props.reset} /></div>);

        const players = this.props.players.map((player, index) => (
            <PlayerSection
                        key={player.id}
                        playerno={`${player.id}`}
                    />
        ));
        // console.log('[Race] render', this.props.players);
        return (
            <div className={Classes.Race}>
                        {players}
                        {/* <div className={Classes.Divider}/> */}
                    </div>
        )
        // return (
        //         <Race players={this.props.players} />
        // )
    }
}

// RaceWrapper.propTypes = {

// }

const mapStateToProps = (state) => ({
                        players: state.game.players,
    starttime: state.game.starttime,
    endtime: state.game.endtime,
})

const mapDispatchToProps = (dispatch) => ({
                        reset: () => dispatch(ReducerActions.reset()),
    // start: () => dispatch(ReducerActions.start()),
    // start: (playername1, playername2, questiontype) => dispatch(ReducerActions.start(playername1, playername2, questiontype)),
})

export default connect(mapStateToProps, mapDispatchToProps)(RaceWrapper)
