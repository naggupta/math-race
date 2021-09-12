import React, { Component, Fragment, PureComponent } from 'react';
import PropTypes, { bool } from 'prop-types';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
// import useSound from 'use-sound';
import { Howl, Howler } from 'howler';
import { boolean } from 'mathjs';
import * as ReducerActions from '../../store/game/actions/index';
import Classes from './SingleplayerSection.module.css';
import * as Utils from '../../Utils/QuestionGenerator';
import DisplayMessage from '../../UI/DisplayMessage/DisplayMessage';
import Modal from '../../UI/Modal/Modal';
import successSound from '../../sounds/success.mp3';
import wrongSound from '../../sounds/wrong.mp3';
import movingFishSound from '../../sounds/movingfish.mp3';
import clickSound from '../../sounds/click.mp3';
import clapsSound from '../../sounds/claps.mp3';
import AnswerInput from '../AnswerInput/AnswerInput';
// // import PlaySound from '../../Utils/PlaySound';
// import UIfx from 'uifx';

class SingleplayerSection extends PureComponent {
  success = new Howl({ src: successSound, volume: 1 });
  wrong = new Howl({ src: wrongSound, volume: 1 });
  click = new Howl({ src: clickSound, volume: 1 });
  movingfish = new Howl({ src: movingFishSound, volume: 1 });
  claps = new Howl({ src: clapsSound, volume: 1 });
  timers = [];
  answertimers = [];

  state = {
    // filter: 'ytd',
    // answer: '',
    // answerresult: '',
    closedisplay: false,
    question: '',
    answer: '',
    fullquestion: '',
    qcounter: 0,
    attempts: 0,
  };

  constructor(props) {
    super(props);
    this.correctRef = React.createRef();
    this.wrongRef = React.createRef();
    this.questionRef = React.createRef();
    this.retryRef = React.createRef();
    this.answerRef = React.createRef();
    // this.inputAnswer = React.createRef();
    // console.log('[PlayerSection] constructor');
  }

  componentDidMount() {
    const player = this.props.players[this.props.playerno];
    if (player.questiontype.delay === 0) this.setState({ question: player.question, fullquestion: player.question });
    else {
      // eslint-disable-next-line react/no-did-update-set-state
      // this.setState({ qcounter: 0 });
      this.displayQuestion(player, 0);
    }
    // console.log('[PlayerSection] componentDidMount');
  }

  // shouldComponentUpdate(nextProps, newState) {
  //     console.log('[PlayerSection] shouldComponentUpdate', this.props.players[this.props.playerno].question , nextProps.players[nextProps.playerno].question);
  //     if (this.props.players[this.props.playerno].question !== nextProps.players[nextProps.playerno].question) {
  //       const player = nextProps.players[nextProps.playerno];
  //       this.setState({ question: player.question });
  //     }
  //     return true;
  // }

  componentDidUpdate() {
    // console.log('[PlayerSection] componentDidUpdate');
    const player = this.props.players[this.props.playerno];
    if (player.question !== this.state.fullquestion) {
      // eslint-disable-next-line react/no-did-update-set-state
      if (player.questiontype.delay === 0)
        // eslint-disable-next-line react/no-did-update-set-state
        this.setState({ question: player.question, fullquestion: player.question, attempts: 0 });
      else {
        // eslint-disable-next-line react/no-did-update-set-state
        // this.setState({ qcounter: 0 });
        // eslint-disable-next-line react/no-did-update-set-state
        this.setState({ attempts: 0 });
        this.displayQuestion(player, 0);
      }
    }
  }

  animateNextQuestion = (player) => {
    const timer = setTimeout(() => {
      const answerRef = this.answerRef.current;
      if (this.state.qcounter >= player.questions.length) return;
      // this.setState((prevState) => ({ qcounter: prevState.qcounter + 1, question: player.questions[prevState.qcounter], fullquestion: player.question }));
      this.setState((prevState) => ({
        qcounter: prevState.qcounter + 1,
        question: player.questions[prevState.qcounter],
        answer: prevState.qcounter < player.questions.length - 1 && prevState.attempts > 1 ? player.answers[prevState.qcounter - 1] : '',
        fullquestion: player.question,
        automate: true,
      }));
      if (answerRef) {
        answerRef.classList.remove(Classes.HideAnswer);
        const answertimer = setTimeout(() => {
          answerRef.classList.add(Classes.HideAnswer);
        }, 1000);
        this.answertimers.push(answertimer);
      }

      this.animateNextQuestion(player);
    }, 1000 * player.questiontype.delay);
    this.timers.push(timer);
  };

  displayQuestion = (player, no) => {
    // this.inputAnswer.focus();
    const answerRef = this.retryRef.current;
    // if (this.state.qcounter >= player.questions.length) return;
    this.focusAnswer();
    let i = no < 0 ? 0 : no;
    i = no >= player.questions.length ? player.questions.length - 1 : no;
    if (i >= player.questions.length || i < 0) return;
    // console.log('[displayquestion]', i);
    const answer = i < player.questions.length - 1 && this.state.attempts > 1 ? player.answers[i - 1] : '';
    this.setState((prevState) => ({ qcounter: i + 1, question: player.questions[i], answer: answer, fullquestion: player.question }));
    // this.setState((prevState) => ({ qcounter: i + 1, question: player.questions[i], fullquestion: player.question }));
    this.animateNextQuestion(player);
  };

  nextQuestion = () => {
    this.clearTimer();
    // console.log('[nextquestion]', this.state.qcounter);
    const player = this.props.players[this.props.playerno];
    this.displayQuestion(player, this.state.qcounter);
  };

  prevQuestion = () => {
    this.clearTimer();
    const player = this.props.players[this.props.playerno];
    // console.log('[nextquestion]', this.state.qcounter);
    this.displayQuestion(player, this.state.qcounter - 2);
  };

  buttonTheme = () => {
    return 'ColorTheme';
  };

  sectionTheme = () => {
    return 'ColorTheme';
  };

  _handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      this.goClick();
    }
  };

  goClick = (inputAnswer) => {
    const player = this.props.players[this.props.playerno];
    const correctref = this.correctRef.current;
    const questionRef = this.questionRef.current;
    const wrongref = this.wrongRef.current;
    const retryRef = this.retryRef.current;

    if (!inputAnswer) return;

    this.clearTimer();

    let answer = inputAnswer;

    if (player.questiontype.decimals > 0 || inputAnswer.indexOf('.') > -1) answer = (+inputAnswer).toFixed(2).replace(/(\.0+|0+)$/, '');

    // console.log('[SingleplayerSection]', answer, String(answer).replace(/^0+/, ''), String(player.answer).replace(/^0+/, ''));
    // eslint-disable-next-line eqeqeq
    const iscorrect = String(answer).replace(/^0+/, '') == String(player.answer).replace(/^0+/, '');

    // eslint-disable-next-line eqeqeq
    if (player.questiontype.testmode || iscorrect) {
      if (player.points === player.questiontype.points - 1 || (player.wordquestionsindexs && player.wordquestionsindexs.length === 1)) {
        // alert(`${player.name} Win`);
        // this.props.reset();
        this.success.play();
        this.movingfish.play();
        this.props.win(this.props.playerno, iscorrect);
        setTimeout(() => {
          this.props.complete(this.props.playerno);
          this.props.history.push('/math-race/complete');
          this.claps.play();
        }, 2000);

        return;
      }
      // wrapper.style.visibility = 'true';
      questionRef.classList.remove(Classes.ShowQuestion);
      correctref.classList.add(Classes.MessageAnimate);
      questionRef.classList.add(Classes.HideQuestion);

      setTimeout(() => {
        this.props.nextQuestion(this.props.playerno, iscorrect);
        // this.inputAnswer.value = '';
        this.resetAnswer();
        correctref.classList.remove(Classes.MessageAnimate);
        questionRef.classList.remove(Classes.HideQuestion);
        questionRef.classList.add(Classes.ShowQuestion);
      }, 1000);
      this.success.play();
      this.movingfish.play();
      // new UIfx({ asset: successSound }).play();
    } else if (this.state.attempts > 1) {
      wrongref.classList.add(Classes.MessageAnimate);
      // useSound(wrongSound);
      setTimeout(() => {
        this.props.wrongAnswer(this.props.playerno);
        // this.inputAnswer.value = '';
        this.resetAnswer();
        wrongref.classList.remove(Classes.MessageAnimate);
      }, 1000);
      this.wrong.play();
      // new UIfx({ asset: wrongSound }).play();
    } else {
      retryRef.classList.add(Classes.MessageAnimate);
      setTimeout(() => {
        retryRef.classList.remove(Classes.MessageAnimate);
      }, 1000);
      this.resetAnswer();
      this.setState((state) => {
        return { attempts: state.attempts + 1 };
      });
      this.wrong.play();
    }
  };

  clearTimer = () => {
    this.timers.forEach((timer) => {
      clearInterval(timer);
    });
    this.answertimers.forEach((timer) => {
      clearInterval(timer);
    });
  };

  restart = () => {
    const player = this.props.players[this.props.playerno];
    this.clearTimer();

    this.setState({ question: '', fullquestion: player.question });
    // const timer = setTimeout(() => {
    // eslint-disable-next-line react/no-did-update-set-state
    // this.setState({ qcounter: 0 });
    this.displayQuestion(player, 0);
    // }, 1000);
    // clearInterval(timer);
  };

  //   appendAnswer = (val) => {
  //     if (val === '<') this.inputAnswer.value = this.inputAnswer.value.slice(0, -1);
  //     else this.inputAnswer.value += `${val}`;
  //     this.click.play();
  //   };

  reset = () => {
    this.props.reset();
    this.props.history.push('/math-race/setup');
  };
  render() {
    const player = this.props.players[this.props.playerno];
    console.log('[PlayerSection] render', this.props.playerno, player.answer, player.question, 'questions', player.questions);
    let seperator = '';
    seperator = player.questiontype.type === 'TIMEHRS+-' ? ':' : seperator;
    seperator = player.questiontype.type === 'TIME+-' ? ':' : seperator;
    // const messagedisplay = (player.answerresult) ? <DisplayMessage display={player.answerresult} /> : <Fragment />;
    const messagedisplay = (
      <Fragment>
        <div ref={this.correctRef} className={[Classes.DisplayMessage, Classes.Correct].join(' ')}>
          {player.questiontype.testmode ? 'Next Question' : Utils.getDisplaySuccessMessage()}
        </div>
        <div ref={this.wrongRef} className={[Classes.DisplayMessage, Classes.Wrong].join(' ')}>
          {`${Utils.getDisplayWrongMessage()}`}
          <br /> {`It's ${player.answer}`}
        </div>
        <div ref={this.retryRef} className={[Classes.DisplayMessage, Classes.Retry].join(' ')}>
          {`${Utils.getDisplayRetryMessage()}`}
          <br /> {`attempt #${this.state.attempts + 1}`}
        </div>
      </Fragment>
    );
    // this.setState({ answerresult: '' });
    return (
      <div className={[Classes.SingleplayerSection].join(' ')}>
        <Modal show={!!this.state.closedisplay} modelClosed={() => this.setState({ closedisplay: false })}>
          <span>Do you want to exit the game?</span>
          <div>
            <a role="button" onClick={this.reset} tabIndex={0} onKeyPress={this.reset} style={{ margin: '10px' }} className={['w3-button', 'w3-round-large', this.buttonTheme()].join(' ')}>
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
          <div className="w3-light-grey w3-round">
            <div className="w3-container w3-round ColorTheme" style={{ width: `${player.points * (100 / +player.questiontype.points)}vw` }}>
              <span className={Classes.ProgressBar}>{`${player.points}/${player.questiontype.points}`}</span>
            </div>
          </div>
          {/* <img
            style={{
              position: 'absolute',
              transform: +this.props.playerno === 0 ? 'scaleX(1)' : 'rotateX(180deg)',
              transition: '2s',
              left: `${player.points * (90 / +player.questiontype.points)}vw`,
            }}
            alt={this.props.playerno}
            className={[Classes.PlayerCharacter, this.props.playerno === 1 ? Classes._1 : Classes._2].join(' ')}
            height="auto"
            width="100px"
            src={`${process.env.PUBLIC_URL}/images/Fish_${this.props.playerno}.svg`}
          /> */}
        </div>
        <div className={Classes.QuestionBar}>
          {/* <div>
            <span className={[this.sectionTheme()].join(' ')}>
              <span className={[Classes.PlayerName].join(' ')}>{player.name}</span>
            </span>
            <span style={{ position: 'relative' }} className={[this.sectionTheme()].join(' ')}>
              <span className={['fa-stack', Classes.Score].join(' ')}>
                <span className={['fa fa-star fa-stack-2x'].join(' ')} />
                <strong className="fa-stack-1x" style={{ color: '#000' }}>
                  {player.points}
                </strong>
              </span>
              <div>
                <a role="button" onClick={() => this.setState({ closedisplay: true })} tabIndex={0} onKeyPress={() => this.setState({ closedisplay: true })} className={Classes.Close}>
                  <i className="fa fa-window-close" />
                </a>
              </div>
            </span>
          </div> */}
          {/* <span className={Classes.Question}><span style={{fontSize:'2.5em'}}>Emily has £46.20. She wants to buy a new e-book. It costs £20. How much more money does she need to Save?</span></span> */}
          <div ref={this.questionRef} className={Classes.Question}>
            <CSSTransition classNames="question" timeout={200}>
              <div>
                <span style={{ display: 'inline-block', fontSize: '2.3em', paddingBottom: '20px' }} dangerouslySetInnerHTML={{ __html: this.state.question }} />
                <span ref={this.answerRef} className={Classes.NextAnswer} dangerouslySetInnerHTML={{ __html: this.state.answer }} />
              </div>
            </CSSTransition>

            <div className={Classes.Refresh}>
              <a
                className={['w3-btn', 'w3-round-large', this.buttonTheme(), Classes.BtnNumber].join(' ')}
                style={{ display: player.questiontype.delay === 0 || player.questiontype.testmode ? 'none' : 'flex' }}
                role="button"
                onClick={this.prevQuestion}
                tabIndex={0}
                onKeyPress={this.prevQuestion}
              >
                <i className="fa fa-long-arrow-left" />
              </a>
              <a
                className={['w3-btn', 'w3-round-large', this.buttonTheme(), Classes.BtnNumber].join(' ')}
                style={{ display: player.questiontype.delay === 0 || player.questiontype.testmode ? 'none' : 'flex' }}
                role="button"
                onClick={this.nextQuestion}
                tabIndex={0}
                onKeyPress={this.nextQuestion}
              >
                <i className="fa fa-long-arrow-right" />
              </a>
              <a
                className={['w3-btn', 'w3-round-large', this.buttonTheme(), Classes.BtnNumber].join(' ')}
                style={{ display: player.questiontype.delay === 0 || player.questiontype.testmode ? 'none' : 'flex' }}
                role="button"
                onClick={this.restart}
                tabIndex={0}
                onKeyPress={this.restart}
              >
                <i className="fa fa-refresh" />
              </a>
              <a
                className={['w3-btn', 'w3-round-large', this.buttonTheme(), Classes.BtnNumber].join(' ')}
                style={{ display: 'flex' }}
                role="button"
                onClick={() => this.setState({ closedisplay: true })}
                tabIndex={0}
                onKeyPress={() => this.setState({ closedisplay: true })}
              >
                <i className="fa fa-window-close" />
              </a>
            </div>
            <div className={Classes.Answer}>
              <AnswerInput
                resetAnswer={(e) => {
                  this.resetAnswer = e;
                }}
                focusAnswer={(e) => {
                  this.focusAnswer = e;
                }}
                seperator={seperator}
                goClick={this.goClick}
              />
              {/* <input
                ref={(e) => {
                  this.inputAnswer = e;
                }}
                inputMode="numeric"
                onKeyDown={this._handleKeyDown}
                type="text"
                maxLength="7"
                className={['w3-btn', 'w3-round-large'].join(' ')}
              /> */}
            </div>
          </div>
        </div>
        {/* <div className={Classes.ButtonBar}>
          <button type="button" data-playerno={this.props.playerno} onClick={() => this.appendAnswer('1')} className={['w3-button', 'w3-round-large', this.buttonTheme(), Classes.BtnNumber].join(' ')}>
            1
          </button>
          <button type="button" data-playerno={this.props.playerno} onClick={() => this.appendAnswer('2')} className={['w3-btn', 'w3-round-large', this.buttonTheme(), Classes.BtnNumber].join(' ')}>
            2
          </button>
          <button type="button" data-playerno={this.props.playerno} onClick={() => this.appendAnswer('3')} className={['w3-btn', 'w3-round-large', this.buttonTheme(), Classes.BtnNumber].join(' ')}>
            3
          </button>
          <button type="button" data-playerno={this.props.playerno} onClick={() => this.appendAnswer('4')} className={['w3-btn', 'w3-round-large', this.buttonTheme(), Classes.BtnNumber].join(' ')}>
            4
          </button>
          <button type="button" data-playerno={this.props.playerno} onClick={() => this.appendAnswer('5')} className={['w3-btn', 'w3-round-large', this.buttonTheme(), Classes.BtnNumber].join(' ')}>
            5
          </button>
          <button type="button" data-playerno={this.props.playerno} onClick={() => this.appendAnswer('6')} className={['w3-btn', 'w3-round-large', this.buttonTheme(), Classes.BtnNumber].join(' ')}>
            6
          </button>
          <button type="button" data-playerno={this.props.playerno} onClick={() => this.appendAnswer('7')} className={['w3-btn', 'w3-round-large', this.buttonTheme(), Classes.BtnNumber].join(' ')}>
            7
          </button>
          <button type="button" data-playerno={this.props.playerno} onClick={() => this.appendAnswer('8')} className={['w3-btn', 'w3-round-large', this.buttonTheme(), Classes.BtnNumber].join(' ')}>
            8
          </button>
          <button type="button" data-playerno={this.props.playerno} onClick={() => this.appendAnswer('9')} className={['w3-btn', 'w3-round-large', this.buttonTheme(), Classes.BtnNumber].join(' ')}>
            9
          </button>
          <button type="button" data-playerno={this.props.playerno} onClick={() => this.appendAnswer('0')} className={['w3-btn', 'w3-round-large', this.buttonTheme(), Classes.BtnNumber].join(' ')}>
            0
          </button>
          <button
            style={{ display: ['TIMEHRS+-'].includes(player.questiontype.type) ? 'none' : 'block' }}
            type="button"
            data-playerno={this.props.playerno}
            onClick={() => this.appendAnswer('.')}
            className={['w3-btn', 'w3-round-large', this.buttonTheme(), Classes.BtnNumber].join(' ')}
          >
            .
          </button>
          <button
            style={{ display: ['TIMEHRS+-'].includes(player.questiontype.type) ? 'block' : 'none' }}
            type="button"
            data-playerno={this.props.playerno}
            onClick={() => this.appendAnswer(':')}
            className={['w3-btn', 'w3-round-large', this.buttonTheme(), Classes.BtnNumber].join(' ')}
          >
            :
          </button>
          <button type="button" data-playerno={this.props.playerno} onClick={() => this.appendAnswer('-')} className={['w3-btn', 'w3-round-large', this.buttonTheme(), Classes.BtnNumber].join(' ')}>
            -
          </button>
          <button type="button" data-playerno={this.props.playerno} onClick={() => this.appendAnswer('<')} className={['w3-btn', 'w3-round-large', this.buttonTheme(), Classes.BtnNumber].join(' ')}>
            &lt;
          </button>

          <button
            type="button"
            data-playerno={this.props.playerno}
            onClick={(e) => this.goClick(e.currentTarget.dataset.playerno)}
            className={['w3-btn', 'w3-round-large', this.buttonTheme(), Classes.BtnGo].join(' ')}
          >
            GO
          </button>
        </div> */}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  players: state.game.players,
  // questiontype: state.game.questiontype,
  // totalpoints: state.game.questiontype.points,
});

const mapDispatchToProps = (dispatch) => ({
  reset: () => dispatch(ReducerActions.reset()),
  // init: (playername1, playername2, questiontype) => dispatch(ReducerActions.init(playername1, playername2, questiontype)),
  // start: () => dispatch(ReducerActions.start()),
  nextQuestion: (playerno, isCorrect) => dispatch(ReducerActions.nextQuestion(playerno, isCorrect)),
  wrongAnswer: (playerno) => dispatch(ReducerActions.wrongAnswer(playerno)),
  win: (playerno, iscorrect) => dispatch(ReducerActions.win(playerno, iscorrect)),
  complete: () => dispatch(ReducerActions.complete()),
});

export default connect(mapStateToProps, mapDispatchToProps)(SingleplayerSection);
