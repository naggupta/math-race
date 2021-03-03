import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import * as ReducerActions from '../../store/game/actions/index';
import * as Classes from './PlayerSelection.module.css';

class PlayerSelection extends PureComponent {
  constructor(props) {
    super(props);
    const players = [(props.players && props.players[0].name) || 'Hasana', (props.players && props.players[1].name) || ''];
    this.state = {
      multiplayer: !!props.multiplayer,
      player0: players[0],
      player1: players[1],
    };
  }

  goNext = () => {
    let { player1 } = this.state;
    if (this.state.multiplayer && !this.state.player1) player1 = 'Player 2';
    else if (!this.state.multiplayer && this.state.player1) player1 = '';

    this.props.setMultiplayer(this.state.multiplayer, this.state.player0, player1);
    this.props.history.push('/math-race/setup');
  };

  render() {
    return (
      <div>
        <h2 style={{ textAlign: 'center' }}>Maths Race</h2>
        <div className={Classes.RaceSetup}>
          <div>
            <input type="radio" name="mode" value="false" onChange={(e) => this.setState({ multiplayer: false })} defaultChecked={!this.state.multiplayer} />
            <label>Single Player</label>
            <input type="text" placeholder="Player Name" onChange={(e) => this.setState({ player0: e.currentTarget.value })} name="player1" value={this.state.player0} />
          </div>

          <div>
            <input type="radio" name="mode" value="true" onChange={(e) => this.setState({ multiplayer: true })} defaultChecked={!!this.state.multiplayer} />
            <label>Two Player</label>
            <input
              style={{ visibility: !this.state.multiplayer ? 'hidden' : 'visible' }}
              type="text"
              name="player1"
              placeholder="Player Name"
              onChange={(e) => this.setState({ player1: e.currentTarget.value })}
              value={this.state.player1}
            />
          </div>
        </div>
        <div style={{ display: 'flex', flexFlow: 'row', justifyContent: 'center' }}>
          <button
            type="submit"
            value="Start"
            // onKeyPress={(e) => this.startGame(e)}
            onClick={this.goNext}
            className={['w3-btn', 'w3-round-large', Classes.BtnGo].join(' ')}
          >
            Next &gt;&gt;
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  multiplayer: state.game.multiplayer,
  players: state.game.players,
});

const mapDispatchToProps = (dispatch) => ({
  setMultiplayer: (multiplayer, playername1, playername2) => dispatch(ReducerActions.multiplayermode(multiplayer, playername1, playername2)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PlayerSelection);
