import React, { Component, Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
// import Race from '../../components/Race/Race';
import * as ReducerActions from '../../store/game/actions/index';
import RaceSetup2 from '../../components/RaceSetup-2/RaceSetup-2';
import PlayerSection from '../../components/PlayerSection/PlayerSection';
import * as Classes from './RaceWrapper.module.css';
import RaceComplete from '../../components/RaceComplete/RaceComplete';
import DrawArea from '../../components/DrawArea/DrawArea';
import RaceSetup1 from '../../components/RaceSetup-1/RaceSetup-1';
import MultiplayerPlay from '../../components/MultiplayerPlay/MultiplayerPlay';

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
        <Route path="/math-race" exact component={RaceSetup1} />
        <Route path="/math-race/setup" exact component={RaceSetup2} />
        <Route path="/math-race/play" exact component={MultiplayerPlay} />
        <Route path="/math-race/complete" exact render={(props) => (<RaceComplete {...props} players={this.props.players} reset={this.props.reset} />)} />
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
  starttime: state.game.starttime,
  endtime: state.game.endtime,
});

const mapDispatchToProps = (dispatch) => ({
  reset: () => dispatch(ReducerActions.reset()),
  // start: () => dispatch(ReducerActions.start()),
  // start: (playername1, playername2, questiontype) => dispatch(ReducerActions.start(playername1, playername2, questiontype)),
});

export default connect(mapStateToProps, mapDispatchToProps)(RaceWrapper);
