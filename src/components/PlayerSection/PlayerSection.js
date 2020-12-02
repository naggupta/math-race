import React, { Component, Fragment, PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as ReducerActions from '../../store/game/actions/index';
import Classes from './PlayerSection.module.css';
import * as Utils from '../../Utils/QuestionGenerator';
import DisplayMessage from '../../UI/DisplayMessage/DisplayMessage';
import Modal from '../../UI/Modal/Modal';

class PlayerSection extends PureComponent {
  state = {
    // filter: 'ytd',
    // answer: '',
    // answerresult: '',
    closedisplay: false,
  };

  constructor(props) {
    super(props);
    this.correctRef = React.createRef();
    this.wrongRef = React.createRef();
    this.questionRef = React.createRef();
    // this.inputAnswer = React.createRef();
    // console.log('[PlayerSection] constructor');
  }

  componentDidMount() {
    console.log('[PlayerSection] componentDidMount');
  }

  // shouldComponentUpdate(nextProps, newState) {
  //     console.log('[PlayerSection] shouldComponentUpdate', nextProps.players[nextProps.playerno]);
  //     // return this.props.players[this.props.playerno] !== nextProps.players[nextProps.playerno];
  //     return true;
  // }

  componentDidUpdate() {
    console.log('[PlayerSection] componentDidUpdate');
  }

  buttonTheme = () => {
    return this.props.playerno === '1'
      ? 'w3-ripple w3-hover-indigo w3-indigo'
      : 'w3-ripple w3-hover-red w3-pink';
  };

  sectionTheme = () => {
    return this.props.playerno === '1' ? 'w3-indigo' : 'w3-pink';
  };

  goClick = () => {
    const player = this.props.players[this.props.playerno];
    const correctref = this.correctRef.current;
    const questionRef = this.questionRef.current;
    const wrongref = this.wrongRef.current;
    if (!this.inputAnswer.value) return;
    if (+this.inputAnswer.value === +player.answer) {
      if (player.points === this.props.totalpoints - 1) {
        // alert(`${player.name} Win`);
        // this.props.reset();
        this.props.complete(this.props.playerno);
        return;
      }
      // wrapper.style.visibility = 'true';
      questionRef.classList.remove(Classes.ShowQuestion);
      correctref.classList.add(Classes.MessageAnimate);
      questionRef.classList.add(Classes.HideQuestion);
      setTimeout(() => {
        this.props.nextQuestion(this.props.playerno);
        // this.setState({ answer: '' });
        this.inputAnswer.value = '';
        correctref.classList.remove(Classes.MessageAnimate);
        questionRef.classList.remove(Classes.HideQuestion);
        questionRef.classList.add(Classes.ShowQuestion);
      }, 1000);
    } else {
      wrongref.classList.add(Classes.MessageAnimate);
      setTimeout(() => {
        this.props.wrongAnswer(this.props.playerno);
        // this.setState({ answer: '' });
        this.inputAnswer.value = '';
        wrongref.classList.remove(Classes.MessageAnimate);
      }, 1000);
    }
  };

  appendAnswer = (val) => {
    if (val === '<')
      this.inputAnswer.value = this.inputAnswer.value.slice(0, -1);
    else this.inputAnswer.value += `${val}`;
  };

  render() {
    const player = this.props.players[this.props.playerno];
    console.log(
      '[PlayerSection] render',
      this.props.playerno,
      player.answerresult,
      'Points',
      player.points * (+this.props.questiontype.points - 1),
    );
    // const messagedisplay = (player.answerresult) ? <DisplayMessage display={player.answerresult} /> : <Fragment />;
    const messagedisplay = (
      <Fragment>
        <div
          ref={this.correctRef}
          className={[Classes.DisplayMessage, Classes.Correct].join(' ')}
        >
          <i style={{ margin: '5px' }} className="fa fa-check" />
        </div>
        <div
          ref={this.wrongRef}
          className={[Classes.DisplayMessage, Classes.Wrong].join(' ')}
        >
          {player.answer}
        </div>
      </Fragment>
    );
    // this.setState({ answerresult: '' });
    return (
      <div
        className={[this.props.playerno === '0' ? Classes._0 : Classes._1].join(
          ' ',
        )}
      >
        <Modal
          show={!!this.state.closedisplay}
          modelClosed={() => this.setState({ closedisplay: false })}
        >
          <span>Do you want to exit the game?</span>
          <div>
            <a
              role="button"
              onClick={this.props.reset}
              tabIndex={0}
              onKeyPress={this.props.reset}
              style={{ margin: '10px' }}
              className={[
                'w3-button',
                'w3-round-large',
                this.buttonTheme(),
              ].join(' ')}
            >
              {' '}
              Restart
            </a>
            <a
              role="button"
              onClick={() => this.setState({ closedisplay: false })}
              tabIndex={0}
              onKeyPress={() => this.setState({ closedisplay: false })}
              style={{ margin: '10px' }}
              className={['w3-button', 'w3-round-large', 'w3-grey'].join(' ')}
            >
              {' '}
              Cancel
            </a>
          </div>
        </Modal>
        {messagedisplay}
        <div className={[Classes.PlayerCharacter].join(' ')}>
          <img
            style={{
              position: 'absolute',
              transform: 'scaleX(1)',
              transition: '1s',
              left: `${
                player.points * (90 / +this.props.questiontype.points)
              }vw`,
            }}
            alt={this.props.playerno}
            className={[
              Classes.PlayerCharacter,
              this.props.playerno === 1 ? Classes._1 : Classes._2,
            ].join(' ')}
            height="auto"
            width="100px"
            src={`${process.env.PUBLIC_URL}/images/Fish_${this.props.playerno}.svg`}
          />
        </div>
        <div className={Classes.QuestionBar}>
          <span className={[this.sectionTheme()].join(' ')}>
            <span className={[Classes.PlayerName].join(' ')}>
              {player.name}
            </span>
          </span>
          {/* <span className={Classes.Question}><span style={{fontSize:'2.5em'}}>Emily has £46.20. She wants to buy a new e-book. It costs £20. How much more money does she need to Save?</span></span> */}
          <span ref={this.questionRef} className={Classes.Question}>
            <span style={{ fontSize: '3em' }}>{`${player.question}?`}</span>
          </span>
          <span
            style={{ position: 'relative' }}
            className={[this.sectionTheme()].join(' ')}
          >
            <span className={['fa-stack', Classes.Score].join(' ')}>
              <span className={['fa fa-star fa-stack-2x'].join(' ')} />
              <strong className="fa-stack-1x" style={{ color: '#000' }}>
                {player.points}
              </strong>
            </span>
            <div>
              <a
                role="button"
                onClick={() => this.setState({ closedisplay: true })}
                tabIndex={0}
                onKeyPress={() => this.setState({ closedisplay: true })}
                className={Classes.Close}
              >
                <i className="fa fa-window-close" />
              </a>
            </div>
          </span>
        </div>
        <div className={Classes.ButtonBar}>
          <button
            type="button"
            data-playerno={this.props.playerno}
            onClick={() => this.appendAnswer('1')}
            className={[
              'w3-button',
              'w3-round-large',
              this.buttonTheme(),
              Classes.BtnNumber,
            ].join(' ')}
          >
            1
          </button>
          <button
            type="button"
            data-playerno={this.props.playerno}
            onClick={() => this.appendAnswer('2')}
            className={[
              'w3-btn',
              'w3-round-large',
              this.buttonTheme(),
              Classes.BtnNumber,
            ].join(' ')}
          >
            2
          </button>
          <button
            type="button"
            data-playerno={this.props.playerno}
            onClick={() => this.appendAnswer('3')}
            className={[
              'w3-btn',
              'w3-round-large',
              this.buttonTheme(),
              Classes.BtnNumber,
            ].join(' ')}
          >
            3
          </button>
          <button
            type="button"
            data-playerno={this.props.playerno}
            onClick={() => this.appendAnswer('4')}
            className={[
              'w3-btn',
              'w3-round-large',
              this.buttonTheme(),
              Classes.BtnNumber,
            ].join(' ')}
          >
            4
          </button>
          <button
            type="button"
            data-playerno={this.props.playerno}
            onClick={() => this.appendAnswer('5')}
            className={[
              'w3-btn',
              'w3-round-large',
              this.buttonTheme(),
              Classes.BtnNumber,
            ].join(' ')}
          >
            5
          </button>
          <button
            type="button"
            data-playerno={this.props.playerno}
            onClick={() => this.appendAnswer('6')}
            className={[
              'w3-btn',
              'w3-round-large',
              this.buttonTheme(),
              Classes.BtnNumber,
            ].join(' ')}
          >
            6
          </button>
          <button
            type="button"
            data-playerno={this.props.playerno}
            onClick={() => this.appendAnswer('7')}
            className={[
              'w3-btn',
              'w3-round-large',
              this.buttonTheme(),
              Classes.BtnNumber,
            ].join(' ')}
          >
            7
          </button>
          <button
            type="button"
            data-playerno={this.props.playerno}
            onClick={() => this.appendAnswer('8')}
            className={[
              'w3-btn',
              'w3-round-large',
              this.buttonTheme(),
              Classes.BtnNumber,
            ].join(' ')}
          >
            8
          </button>
          <button
            type="button"
            data-playerno={this.props.playerno}
            onClick={() => this.appendAnswer('9')}
            className={[
              'w3-btn',
              'w3-round-large',
              this.buttonTheme(),
              Classes.BtnNumber,
            ].join(' ')}
          >
            9
          </button>
          <button
            type="button"
            data-playerno={this.props.playerno}
            onClick={() => this.appendAnswer('0')}
            className={[
              'w3-btn',
              'w3-round-large',
              this.buttonTheme(),
              Classes.BtnNumber,
            ].join(' ')}
          >
            0
          </button>
          <button
            type="button"
            data-playerno={this.props.playerno}
            onClick={() => this.appendAnswer('.')}
            className={[
              'w3-btn',
              'w3-round-large',
              this.buttonTheme(),
              Classes.BtnNumber,
            ].join(' ')}
          >
            .
          </button>
          <button
            type="button"
            data-playerno={this.props.playerno}
            onClick={() => this.appendAnswer('-')}
            className={[
              'w3-btn',
              'w3-round-large',
              this.buttonTheme(),
              Classes.BtnNumber,
            ].join(' ')}
          >
            -
          </button>
          <button
            type="button"
            data-playerno={this.props.playerno}
            onClick={() => this.appendAnswer('<')}
            className={[
              'w3-btn',
              'w3-round-large',
              this.buttonTheme(),
              Classes.BtnNumber,
            ].join(' ')}
          >
            &lt;
          </button>
          <input
            ref={(e) => {
              this.inputAnswer = e;
            }}
            onKeyDown={() => false}
            onKeyPress={() => false}
            onKeyUp={() => false}
            type="text"
            maxLength="7"
            className={[
              'w3-btn',
              'w3-round-large',
              this.sectionTheme(),
              Classes.Answer,
            ].join(' ')}
          />
          <button
            type="button"
            data-playerno={this.props.playerno}
            onClick={(e) => this.goClick(e.currentTarget.dataset.playerno)}
            className={[
              'w3-btn',
              'w3-round-large',
              this.buttonTheme(),
              Classes.BtnGo,
            ].join(' ')}
          >
            GO
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  players: state.game.players,
  questiontype: state.game.questiontype,
  totalpoints: state.game.questiontype.points,
});

const mapDispatchToProps = (dispatch) => ({
  reset: () => dispatch(ReducerActions.reset()),
  // init: (playername1, playername2, questiontype) => dispatch(ReducerActions.init(playername1, playername2, questiontype)),
  // start: () => dispatch(ReducerActions.start()),
  nextQuestion: (playerno) => dispatch(ReducerActions.nextQuestion(playerno)),
  wrongAnswer: (playerno) => dispatch(ReducerActions.wrongAnswer(playerno)),
  complete: (playerno) => dispatch(ReducerActions.complete(playerno)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PlayerSection);
