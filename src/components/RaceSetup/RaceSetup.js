import React, { PureComponent, Fragment } from 'react';
import { connect } from 'react-redux';
import * as ReducerActions from '../../store/game/actions/index';
import * as Classes from './RaceSetup.module.css';

class RaceSetup extends PureComponent {
  constructor(props) {
    super(props);
    const players = [(props.players && props.players[0].name) || 'Hasana', (props.players && props.players[1].name) || ''];
    const type = [(props.players && props.players[0].questiontype.type) || '+-', (props.players && props.players[1].questiontype.type) || '+-'];

    this.state = {
      type0: type[0],
      type1: type[1],
      player0: players[0],
      player1: players[1],
    };

    console.log('RaceSetup[constructor]', this.state);
  }

  // shouldComponentUpdate(nextProps, newState) {
  //     console.log('[RaceSetup] shouldComponentUpdate', this.props, nextProps);
  //     return true;
  // }

  // shouldComponentUpdate(nextProps, newState) {
  //     return true;
  // }

  // startGame = () => {
  //     const questiontype = {
  //         type: '+-',
  //         nos: 3,
  //         numbers: 2,
  //         decimals: 0,
  //         points: 10,

  //     };
  //     this.props.start('Hasana', 'Nanna', questiontype);
  // }
  handleSubmit = (e) => {
    e.preventDefault();

    const { player0, player1, digits0, numbers0, decimals0, type0, points0, inwords0, digits1, numbers1, decimals1, type1, points1, inwords1 } = this.form;

    const questiontype0 = {
      type: type0.value,
      nos: +numbers0.value,
      digits: +digits0.value,
      decimals: +decimals0.value,
      points: +points0.value,
      inwords: (inwords0.value === 'true'),
    };
    const questiontype1 = {
      type: type1.value,
      nos: +numbers1.value,
      digits: +digits1.value,
      decimals: +decimals1.value,
      inwords: (inwords1.value === 'true'),
    };

    // console.log(this.form, questiontype0, questiontype1);
    this.props.start(player0.value, player1.value, questiontype0, questiontype1);
  };

  // startGame = () => {
  //     this.props.start();
  // }

  render() {
    console.log('[RaceSetup] render');

    const players = [(this.props.players && this.props.players[0].name) || 'Hasana', (this.props.players && this.props.players[1].name) || ''];

    const playersetup = [1, 0].map((index) => {
      const { name, questiontype } = this.props.players[index];
      return (
        <div key={index} className={Classes.RaceSetup}>
          <div className={Classes.Players}>
            <div>
              <h2>{`Player - ${index + 1}`}</h2>

              <div style={{ display: index === 1 ? 'block' : 'none' }}>
                <input type="radio" name={`player${index}`} value="" onChange={(e) => this.setState({ [`player${index}`]: e.currentTarget.value })} defaultChecked={!players[index]} />
                <label>None</label>
              </div>

              <div>
                <input
                  type="radio"
                  name={`player${index}`}
                  value="Bruhathi"
                  onChange={(e) => this.setState({ [`player${index}`]: e.currentTarget.value })}
                  defaultChecked={players[index] === 'Bruhathi'}
                />
                <label>Bruhathi</label>
              </div>
              <div>
                <input
                  type="radio"
                  name={`player${index}`}
                  value="Hasana"
                  onChange={(e) => this.setState({ [`player${index}`]: e.currentTarget.value })}
                  defaultChecked={players[index] === 'Hasana'}
                />
                <label>Hasana</label>
              </div>
              <div>
                <input
                  type="radio"
                  name={`player${index}`}
                  value="Krishna"
                  onChange={(e) => this.setState({ [`player${index}`]: e.currentTarget.value })}
                  defaultChecked={players[index] === 'Krishna'}
                />
                <label>Krishna</label>
              </div>
              <div>
                <input type="radio" name={`player${index}`} value="Nanna" onChange={(e) => this.setState({ [`player${index}`]: e.currentTarget.value })} defaultChecked={players[index] === 'Nanna'} />
                <label>Nanna</label>
              </div>
              <div>
                <input type="radio" name={`player${index}`} value="Amma" onChange={(e) => this.setState({ [`player${index}`]: e.currentTarget.value })} defaultChecked={players[index] === 'Amma'} />
                <label>Amma</label>
              </div>
            </div>
            {/* <div><h2>Player1</h2>
                    <div>
                        <input type="radio" name="player1" value="Bruhathi" defaultChecked={player1 === 'Bruhathi'} />
                        <label>Bruhathi</label>
                    </div>
                    <div>
                        <input type="radio" name="player1" value="Hasana" defaultChecked={player1 === 'Hasana'} />
                        <label>Hasana</label>
                    </div>
                    <div>
                        <input type="radio" name="player1" value="Krishna" defaultChecked={player1 === 'Krishna'} />
                        <label>Krishna</label>
                    </div>
                    <div>
                        <input type="radio" name="player1" value="Nanna" defaultChecked={player1 === 'Nanna'} />
                        <label>Nanna</label>
                    </div>
                    <div>
                        <input type="radio" name="player1" value="Amma" defaultChecked={player1 === 'Amma'} />
                        <label>Amma</label>
                    </div>
                </div> */}
          </div>
          <div style={{ display: this.state[`player${index}`] ? 'flex' : 'none' }} className={Classes.Options}>
            <div className={Classes.ExtraWide}>
              <h2>Type</h2>
              <div>
                <input type="radio" name={`type${index}`} value="+-" onChange={(e) => this.setState({ [`type${index}`]: e.currentTarget.value })} defaultChecked={questiontype.type === '+-'} />
                <label>+-</label>
              </div>
              {/* <div>
                <input type="radio" placeholder="In words" name={`type${index}`} value="+-W" onChange={(e) => this.setState({ [`type${index}`]: e.currentTarget.value })} defaultChecked={questiontype.type === '+-W'} />
                <label>+-(Words)</label>
              </div> */}
              {/* <div>
                        <input type="radio" name="type" value="*" onChange={(e) => this.setState({ type: e.currentTarget.value })} />
                        <label>X</label>
                    </div> */}
            </div>
            <div style={{ display: ['+-'].includes(this.state[`type${index}`]) ? 'flex' : 'none' }}>
              <h2>Digits</h2>
              <div>
                <input type="radio" name={`digits${index}`} value="1" defaultChecked={questiontype.digits === 1} />
                <label>1</label>
              </div>
              <div>
                <input type="radio" name={`digits${index}`} value="2" defaultChecked={questiontype.digits === 2} />
                <label>2</label>
              </div>
              <div>
                <input type="radio" name={`digits${index}`} value="3" defaultChecked={questiontype.digits === 3} />
                <label>3</label>
              </div>
            </div>
            <div style={{ display: ['+-'].includes(this.state[`type${index}`]) ? 'flex' : 'none' }}>
              <h2>Numbers</h2>

              <div>
                <input type="radio" name={`numbers${index}`} value="2" defaultChecked={questiontype.nos === 2} />
                <label>2</label>
              </div>
              <div>
                <input type="radio" name={`numbers${index}`} value="3" defaultChecked={questiontype.nos === 3} />
                <label>3</label>
              </div>
              <div style={{ display: this.state[`type${index}`] === '+-' ? 'flex' : 'none' }}>
                <input type="radio" name={`numbers${index}`} value="4" defaultChecked={questiontype.nos === 4} />
                <label>4</label>
              </div>
              <div style={{ display: this.state[`type${index}`] === '+-' ? 'flex' : 'none' }}>
                <input type="radio" name={`numbers${index}`} value="5" defaultChecked={questiontype.nos === 5} />
                <label>5</label>
              </div>
            </div>
            <div style={{ display: this.state[`type${index}`] === '+-' ? 'flex' : 'none' }}>
              <h2>Decimals</h2>
              <div>
                <input type="radio" name={`decimals${index}`} value="0" defaultChecked={questiontype.decimals === 0} />
                <label>0</label>
              </div>
              <div>
                <input type="radio" name={`decimals${index}`} value="1" defaultChecked={questiontype.decimals === 1} />
                <label>1</label>
              </div>
              <div>
                <input type="radio" name={`decimals${index}`} value="2" defaultChecked={questiontype.decimals === 2} />
                <label>2</label>
              </div>
            </div>
            <div>
              <h2>In Words</h2>
              <div>
                <input type="radio" name={`inwords${index}`} value="true" defaultChecked={!!questiontype.inwords} />
                <label>Yes</label>
              </div>
              <div>
                <input type="radio" name={`inwords${index}`} value="false" defaultChecked={!questiontype.inwords} />
                <label>No</label>
              </div>
            </div>
            <div>
              <h2>Points</h2>
              {/* <div>
                        <input type="radio" name={`points${index}`} value="1" defaultChecked={questiontype.points === 1} />
                        <label>1</label>
                    </div> */}
              {/* <div>
                <input type="radio" name={`points${index}`} value="2" defaultChecked={questiontype.points === 2} />
                <label>2</label>
              </div> */}
              <div>
                <input type="radio" name={`points${index}`} value="5" defaultChecked={questiontype.points === 5} />
                <label>5</label>
              </div>
              <div>
                <input type="radio" name={`points${index}`} value="10" defaultChecked={questiontype.points === 10} />
                <label>10</label>
              </div>
              <div>
                <input type="radio" name={`points${index}`} value="15" defaultChecked={questiontype.points === 15} />
                <label>15</label>
              </div>
              <div>
                <input type="radio" name={`points${index}`} value="20" defaultChecked={questiontype.points === 20} />
                <label>20</label>
              </div>
              <div>
                <input type="radio" name={`points${index}`} value="25" defaultChecked={questiontype.points === 25} />
                <label>25</label>
              </div>
            </div>
          </div>
        </div>
      );
    });
    return (
      // <div>
      //     <label>
      //         <input type="radio" defaultChecked value="Male" name={`player${index}`} />
      //             Hasana
      //     </label>
      //     <label>
      //         <input type="radio" defaultChecked={false} value="Male1" name={`player${index}`} />
      //             Hasana
      //     </label>
      //     <label>
      //         <input type="radio" defaultChecked={false} value="Male1" name={`player${index}`} />
      //             Hasana
      //     </label>

      // </div>

      <Fragment>
        <form
          onSubmit={this.handleSubmit}
          ref={(e) => {
            this.form = e;
          }}
        >
          <h2 style={{ textAlign: 'center' }}>Maths Race</h2>
          <div>{playersetup}</div>
          <div>
            <button
              type="submit"
              value="Start"
              // onKeyPress={(e) => this.startGame(e)}
              // onClick={(e) => this.startGame(e)}
              className={['w3-btn', 'w3-round-large', Classes.BtnGo].join(' ')}
            >
              Start &gt;&gt;
            </button>
          </div>
        </form>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  players: state.game.players,
  //   questiontype: state.game.questiontype,
  // starttime: state.game.starttime,
  // endtime: state.game.endtime,
});

const mapDispatchToProps = (dispatch) => ({
  // reset: () => dispatch(ReducerActions.reset()),
  // start: () => dispatch(ReducerActions.start()),
  start: (playername1, playername2, questiontype1, questiontype2) => dispatch(ReducerActions.start(playername1, playername2, questiontype1, questiontype2)),
});

export default connect(mapStateToProps, mapDispatchToProps)(RaceSetup);
