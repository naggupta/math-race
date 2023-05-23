import React, { PureComponent, Fragment } from 'react';
import { connect } from 'react-redux';
// import Slider from 'react-rangeslider';
import InputRange from 'react-input-range';
import * as ReducerActions from '../../store/game/actions/index';
import * as Classes from './SingleplayerSetup.module.css';
// import 'react-rangeslider/lib/index.css'
import 'react-input-range/lib/css/index.css';
import ToggleControl from '../controls/ToggleControl/ToggleControl';

class SingleplayerSetup extends PureComponent {
  constructor(props) {
    super(props);
    const players = [(props.players && props.players[0].name) || 'Hasana', (props.players && props.players[1].name) || ''];
    const type = [(props.players && props.players[0].questiontype.type) || '+-', (props.players && props.players[1].questiontype.type) || '+-'];
    const digits = [(props.players && props.players[0].questiontype.digits) || '2', (props.players && props.players[1].questiontype.digits) || '2'];

    this.state = {
      type0: type[0],
      digits0: (props.players && props.players[0].questiontype.digits) || 3,
      player0: players[0],
      numbers0: (props.players && props.players[0].questiontype.nos) || 4,
      decimals0: (props.players && props.players[0].questiontype.decimals) || 0,
      points0: (props.players && props.players[0].questiontype.points) || 10,
      inwords0: props.players && props.players[0].questiontype.inwords,
      tens0: props.players && props.players[0].questiontype.tens,
      delay0: (props.players && props.players[0].questiontype.delay) || 0,
      level0: (props.players && props.players[0].questiontype.level) || 2,
      HR240: props.players && props.players[0].questiontype.HR24,
      testmode0: props.players && props.players[0].questiontype.testmode,
    };

    // console.log('SingleplayerSetup[constructor]', this.state);
  }

  // shouldComponentUpdate(nextProps, newState) {
  //     console.log('[SingleplayerSetup] shouldComponentUpdate', this.props, nextProps);
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

    const { player0, digits0, numbers0, decimals0, type0, points0, inwords0, tens0, delay0, level0, HR240, testmode0 } = this.form;
    // console.log('[SingleplayerSetup]', this.form.inwords0.checked);
    const questiontype0 = {
      type: type0.value,
      nos: +numbers0.value,
      digits: +digits0.value,
      decimals: ['+', '+-'].includes(type0.value) ? +decimals0.value : 0,
      points: +points0.value,
      delay: ['+', '+-', '+-x', 'BAL'].includes(type0.value) ? +delay0.value : 0,
      tens: tens0.checked,
      HR24: HR240.checked,
      level: +level0.value,
      inwords: inwords0.checked,
      testmode: testmode0.checked,
    };
    // const questiontype1 = {
    //   type: type1.value,
    //   nos: +numbers1.value,
    //   digits: +digits1.value,
    //   points: +points1.value,
    //   decimals: ['+-'].includes(type1.value) ? +decimals1.value : 0,
    //   delay: ['+-', '+-x'].includes(type1.value) ? +delay1.value : 0,
    //   tens: tens1.value,
    //   HR24: HR241.value,
    //   level: +level1.value,
    //   inwords: inwords1.value === 'true',
    // };

    // console.log(this.form, questiontype0, questiontype1);
    this.props.start(this.state.player0, '', questiontype0, questiontype0);
    this.props.history.push('/math-race/play');
  };

  // startGame = () => {
  //     this.props.start();
  // }

  render() {
    // console.log('[SingleplayerSetup] render');

    const player = [(this.props.players && this.props.players[0].name) || 'Hasana'];

    const index = 0;
    const { name, questiontype } = this.props.players[0];
    const playersetup = (
      <div key={index}>
        <div className="w3-row">
          <div className={['w3-col m6', Classes.Type].join(' ')}>
            <div className={Classes.Group4}>
              <div>
                <input type="radio" name={`type${index}`} value="+" onChange={(e) => this.setState({ [`type${index}`]: e.currentTarget.value })} defaultChecked={questiontype.type === '+'} />
                <label>+</label>
              </div>
              <div>
                <input type="radio" name={`type${index}`} value="+-" onChange={(e) => this.setState({ [`type${index}`]: e.currentTarget.value })} defaultChecked={questiontype.type === '+-'} />
                <label>+-</label>
              </div>
              <div>
                <input type="radio" name={`type${index}`} value="x" onChange={(e) => this.setState({ [`type${index}`]: e.currentTarget.value })} defaultChecked={questiontype.type === 'x'} />
                <label>X</label>
              </div>
              <div>
                <input type="radio" name={`type${index}`} value="/" onChange={(e) => this.setState({ [`type${index}`]: e.currentTarget.value })} defaultChecked={questiontype.type === '/'} />
                <label>/</label>
              </div>
              
            </div>
            <div className={Classes.Group2}>
              <div>
                <input type="radio" name={`type${index}`} value="+-x" onChange={(e) => this.setState({ [`type${index}`]: e.currentTarget.value })} defaultChecked={questiontype.type === '+-x'} />
                <label>+-x</label>
              </div>
              <div>
                <input type="radio" name={`type${index}`} value="X2" onChange={(e) => this.setState({ [`type${index}`]: e.currentTarget.value })} defaultChecked={questiontype.type === 'X2'} />
                <label>
                  X<sup>2</sup>
                </label>
              </div>
            </div>
            <div className={Classes.Group2}>
              <div>
                <input type="radio" name={`type${index}`} value="TIME+-" onChange={(e) => this.setState({ [`type${index}`]: e.currentTarget.value })} defaultChecked={questiontype.type === 'TIME+-'} />
                <label>Time Difference</label>
              </div>
              <div>
                <input
                  type="radio"
                  name={`type${index}`}
                  value="TIMEHRS+-"
                  onChange={(e) => this.setState({ [`type${index}`]: e.currentTarget.value })}
                  defaultChecked={questiontype.type === 'TIMEHRS+-'}
                />
                <label>Time +- Hrs</label>
              </div>
            </div>
            <div>
              <input type="radio" name={`type${index}`} value="BAL" onChange={(e) => this.setState({ [`type${index}`]: e.currentTarget.value })} defaultChecked={questiontype.type === 'BAL'} />
              <label>Balancing Technique</label>
            </div>
            <div>
              <input type="radio" name={`type${index}`} value="FILL" onChange={(e) => this.setState({ [`type${index}`]: e.currentTarget.value })} defaultChecked={questiontype.type === 'FILL'} />
              <label>Fill</label>
            </div>
            {/* <div>
              <input type="radio" name={`type${index}`} value="MONEY" onChange={(e) => this.setState({ [`type${index}`]: e.currentTarget.value })} defaultChecked={questiontype.type === 'MONEY'} />
              <label>Money</label>
            </div>
            <div>
              <input type="radio" name={`type${index}`} value="WORD" onChange={(e) => this.setState({ [`type${index}`]: e.currentTarget.value })} defaultChecked={questiontype.type === 'WORD'} />
              <label>Word</label>
            </div> */}
            <div>
              <input type="radio" name={`type${index}`} value="x/y" onChange={(e) => this.setState({ [`type${index}`]: e.currentTarget.value })} defaultChecked={questiontype.type === 'x/y'} />
              <label>Fractions</label>
            </div>
            <div>
              <input
                type="radio"
                name={`type${index}`}
                value="CONVERSIONS"
                onChange={(e) => this.setState({ [`type${index}`]: e.currentTarget.value })}
                defaultChecked={questiontype.type === 'CONVERSIONS'}
              />
              <label>Conversions</label>
            </div>
          </div>
          <div className={['w3-col m6'].join(' ')}>
            <div className={[Classes.Options].join(' ')}>
              <div style={{ display: ['+', '+-', '+-x', 'x', '/', 'X2', 'WORD', 'FILL', 'MONEY', 'CONVERSIONS', 'x/y'].includes(this.state[`type${index}`]) ? 'flex' : 'none' }}>
                <h5>Digits</h5>
                <InputRange name="digits0" minValue={1} maxValue={4} value={this.state.digits0} onChange={(value) => this.setState({ digits0: value })} step={1} />
              </div>

              <div style={{ marginLeft: '0px', display: ['+', '+-', '+-x', 'BAL'].includes(this.state[`type${index}`]) ? 'flex' : 'none' }}>
                <h5>Numbers</h5>
                <InputRange name="numbers0" minValue={2} maxValue={20} value={this.state.numbers0} onChange={(value) => this.setState({ numbers0: value })} step={1} />
              </div>

              <div style={{ display: this.state[`digits${index}`] === 2 && ['X2'].includes(this.state[`type${index}`]) ? 'flex' : 'none' }}>
                <h5>Tens only</h5>
                <div className={Classes.Items}>
                  <ToggleControl label={`tens${index}`} checked={!!questiontype.tens} />
                </div>
              </div>
              <div style={{ display: ['TIMEHRS+-', 'TIME+-'].includes(this.state[`type${index}`]) ? 'flex' : 'none' }}>
                <h5>24Hr</h5>
                <div className={Classes.Items}>
                  <ToggleControl label={`HR24${index}`} checked={!!questiontype.HR24} />
                </div>
              </div>
              <div style={{ display: ['+', '+-', 'TIMEHRS+-', 'TIME+-', 'BAL'].includes(this.state[`type${index}`]) ? 'flex' : 'none' }}>
                <h5>Level</h5>
                <InputRange
                  name="level0"
                  minValue={1}
                  maxValue={['+', '+-', 'BAL'].includes(this.state[`type${index}`]) ? 2 : 4}
                  value={this.state.level0}
                  onChange={(value) => this.setState({ level0: value })}
                  step={1}
                />
              </div>
              <div style={{ display: ['+', '+-', '+-x', 'BAL'].includes(this.state[`type${index}`]) ? 'flex' : 'none' }}>
                <h5>Delay</h5>
                <InputRange name="delay0" minValue={0} maxValue={10} value={this.state.delay0} onChange={(value) => this.setState({ delay0: value })} step={1} formatLabel={(value) => `${value}s`} />
              </div>
              <div style={{ display: 'flex' }}>
                <h5>In Words</h5>
                <div className={Classes.Items}>
                  <ToggleControl label={`inwords${index}`} checked={!!questiontype.inwords} />
                </div>
              </div>
              <div style={{ display: ['+', '+-'].includes(this.state[`type${index}`]) ? 'flex' : 'none' }}>
                <h5>Decimals</h5>
                <InputRange name="decimals0" minValue={0} maxValue={2} value={this.state.decimals0} onChange={(value) => this.setState({ decimals0: value })} step={1} />
              </div>
              <div style={{ display: ['FILL', 'WORD', 'MONEY', 'CONVERSIONS'].includes(this.state[`type${index}`]) ? 'none' : 'flex' }}>
                <h5>Points</h5>
                <InputRange name="points0" minValue={1} maxValue={20} value={this.state.points0} onChange={(value) => this.setState({ points0: value })} step={1} />
              </div>
              <div style={{ display: 'flex' }}>
                <h5>Exam</h5>
                <div className={Classes.Items}>
                  <ToggleControl label={`testmode${index}`} checked={!!questiontype.testmode} />
                </div>
              </div>

              <div style={{ display: 'flex' }} />
            </div>
          </div>
          {/* <div className={['w3-col m4', Classes.Type].join(' ')}>
          </div>
          
         */}
        </div>
      </div>
    );

    return (
      <Fragment>
        <form
          onSubmit={this.handleSubmit}
          ref={(e) => {
            this.form = e;
          }}
        >
          <h5 className="w3-container" style={{ width: '100%', textAlign: 'center' }}>
            Maths Race {player}
          </h5>
          <div className={['w3-container', Classes.SingleplayerSetup].join(' ')}>
            {playersetup}
            <div>
              <button
                type="submit"
                value="Start"
                // onKeyPress={(e) => this.startGame(e)}
                // onClick={(e) => this.startGame(e)}
                className={['w3-btn', 'w3-round', Classes.BtnGo].join(' ')}
              >
                Start &gt;&gt;
              </button>

              <button
                type="button"
                value="Home"
                // onKeyPress={(e) => this.startGame(e)}
                onKeyPress={(e) => this.props.history.push('/math-race')}
                onClick={(e) => this.props.history.push('/math-race')}
                className={['w3-btn', 'w3-round', 'w3-white', Classes.BtnGo].join(' ')}
              >
                &lt; &lt; Home
              </button>
            </div>
          </div>
        </form>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  players: state.game.players,
});

const mapDispatchToProps = (dispatch) => ({
  start: (playername1, playername2, questiontype1, questiontype2) => dispatch(ReducerActions.start(playername1, playername2, questiontype1, questiontype2)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SingleplayerSetup);
