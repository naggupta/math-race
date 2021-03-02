import React, { Fragment, PureComponent } from 'react';
import { connect } from 'react-redux';
import PlayerSection from '../PlayerSection/PlayerSection';
import * as Classes from './Multiplayer.module.css';

class MultiplayerPlay extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const players = this.props.players.map((player, index) => (player.name ? <PlayerSection history={this.props.history} key={player.id} playerno={`${player.id}`} /> : <Fragment key={player.id} />));
    return (
      <div
        className={Classes.Race}
        style={{
          backgroundImage: `url(${process.env.PUBLIC_URL}/images/underwater.png)`,
        }}
      >
        {players}
        {/* <div className={Classes.Divider}/> */}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  players: state.game.players,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(MultiplayerPlay);
