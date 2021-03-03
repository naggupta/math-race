import React, { Component, Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import Race from '../../components/Race/Race';
import * as ReducerActions from '../../store/game/actions/index';
import MultiplayerSetup from '../../components/MultiplayerSetup/MultiplayerSetup';
import MultiplayerSection from '../../components/MultiplayerSection/MultiplayerSection';
import * as Classes from './RaceWrapper.module.css';
import RaceComplete from '../../components/RaceComplete/RaceComplete';
import DrawArea from '../../components/DrawArea/DrawArea';
import PlayerSelection from '../../components/PlayerSelection/PlayerSelection';
import MultiplayerWrapper from '../../components/MultiplayerWrapper/MultiplayerWrapper';
import SingleplayerSetup from '../../components/SingleplayerSetup/SingleplayerSetup';
import SingleplayerWrapper from '../../components/SingleplayerWrapper/SingleplayerWrapper';

class RaceWrapper extends Component {
  constructor(props) {
    super(props);
    // console.log('[Racewrapper] constructor');
    this.state = {};

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
    // console.log('[RaceWrapper] shouldComponentUpdate', !this.props.players && nextProps.players);
    return (!this.props.players && nextProps.players) || this.props.starttime !== nextProps.starttime || this.props.endtime !== nextProps.endtime;
    // return true;
  }

  render() {
    // console.log('[Racewrapper] render', this.props.players, this.props.endtime);
    return (
      <Fragment>
        <Route path="/math-race" exact component={PlayerSelection} />

        <Route path="/math-race/setup" exact render={(props) => (this.props.multiplayer ? <MultiplayerSetup {...props} /> : <SingleplayerSetup {...props} />)} />
        <Route path="/math-race/play" exact render={(props) => (this.props.multiplayer ? <MultiplayerWrapper {...props} /> : <SingleplayerWrapper {...props} />)} />
        <Route path="/math-race/complete" exact render={(props) => <RaceComplete {...props} players={this.props.players} reset={this.props.reset} />} />
        {/* <Route path="/math-race/setup" exact component={RaceSetup2} />
        <Route path="/math-race/complete" render={(props) => (<RaceComplete players={this.props.players} reset={this.props.reset} />)} /> */}
        {/* <div className={Classes.Race}> */}

        {/* <Route path="/math-race/play" exact component={RacePlayerSelection} /> */}

        {/* </div> */}
      </Fragment>
    );

    // if (!this.props.starttime)
    //   return (
    //     <div className={Classes.Race}>
    //       <Route path="/math-race" exact component={RaceSetup} />
    //     </div>
    //   );
    // else if (this.props.endtime)
    //   return (
    //     <div className={Classes.Race}>
    //       <Route path="/math-race/complete" render={(props) => (<RaceComplete players={this.props.players} reset={this.props.reset} />)} />
    //     </div>
    //   );

    // const players = this.props.players.map((player, index) => (player.name ? <PlayerSection key={player.id} playerno={`${player.id}`} /> : <Fragment key={player.id} />));
    // const players = this.props.players.map((player, index) => (player.name ? <PlayerSection key={player.id} playerno={`${player.id}`} /> : <DrawArea />));
    // console.log('[Race] render', this.props.players);
    // return (
    // <div
    // className={Classes.Race}
    // style={{
    //   backgroundImage: `url(${process.env.PUBLIC_URL}/images/underwater.png)`,
    // }}
    // >
    // {players}
    // {/* <div className={Classes.Divider}/> */}
    // </div>
    // );
    // return (
    //         <Race players={this.props.players} />
    // )
  }
}

// RaceWrapper.propTypes = {

// }

const mapStateToProps = (state) => ({
  players: state.game.players,
  multiplayer: state.game.multiplayer,
  starttime: state.game.starttime,
  endtime: state.game.endtime,
});

const mapDispatchToProps = (dispatch) => ({
  reset: () => dispatch(ReducerActions.reset()),
  // start: () => dispatch(ReducerActions.start()),
  // start: (playername1, playername2, questiontype) => dispatch(ReducerActions.start(playername1, playername2, questiontype)),
});

export default connect(mapStateToProps, mapDispatchToProps)(RaceWrapper);
