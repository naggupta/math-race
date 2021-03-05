import React, { Fragment, PureComponent } from 'react';
import { connect } from 'react-redux';
import SingleplayerSection from '../SingleplayerSection/SingleplayerSection';
import * as Classes from './SingleplayerWrapper.module.css';

class SingleplayerWrapper extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    const player = this.props.players[0];
    return (
      <div className={Classes.Race}>
        <SingleplayerSection history={this.props.history} key={player.id} playerno={`${player.id}`} />
        {/* <div className={Classes.Divider}/> */}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  players: state.game.players,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(SingleplayerWrapper);
