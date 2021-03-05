import React, { Fragment, PureComponent } from 'react';
import PropTypes from 'prop-types';
import { render } from '@testing-library/react';
import Classes from './AnswerInput.module.css';

class AnswerInput extends PureComponent {
  // const {} = props
  componentDidMount() {
    this.props.resetAnswer(this.resetInput);
    this.props.focusAnswer(this.focusInput);
    this.inputAnswer.focus();
  }

  submitAnswer = (e) => {
    let answer = this.inputAnswer.value;
    if (this.props.seperator) answer = `${this.inputAnswer.value}${this.props.seperator}${this.inputAnswer1.value}`;
    console.log(answer);
    this.props.goClick(answer);
  };
  _handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      this.submitAnswer(e);
    }
  };

  _handleKeyDown1 = (e) => {
    if (e.key === 'Enter') {
      this.inputAnswer1.focus();
    }
  };

  resetInput = () => {
    this.inputAnswer.value = '';
    if (this.props.seperator) this.inputAnswer1.value = '';
    this.focusInput();
  };

  focusInput = () => {
    this.inputAnswer.focus();
  };

  //   let inputAnswer = null;

  render() {
    let inputfields = (
      <input
        ref={(e) => {
          this.inputAnswer = e;
        }}
        inputMode="numeric"
        onKeyDown={this._handleKeyDown}
        type="text"
        maxLength="7"
        className={['w3-btn', 'w3-round-large'].join(' ')}
      />
    );

    if (this.props.seperator) {
      inputfields = (
        <Fragment>
          <input
            ref={(e) => {
              this.inputAnswer = e;
            }}
            inputMode="numeric"
            onKeyDown={this._handleKeyDown1}
            type="text"
            maxLength="7"
            className={['w3-btn', 'w3-round-large'].join(' ')}
          />
          {this.props.seperator}
          <input
            ref={(e) => {
              this.inputAnswer1 = e;
            }}
            inputMode="numeric"
            onKeyDown={this._handleKeyDown}
            type="text"
            maxLength="7"
            className={['w3-btn', 'w3-round-large'].join(' ')}
          />
        </Fragment>
      );
    }

    return (
      <Fragment>
        {inputfields}

        <button type="button" onClick={this.submitAnswer} className={['w3-btn', 'w3-round-large', 'ColorTheme', Classes.BtnGo].join(' ')}>
          GO
        </button>
      </Fragment>
    );
  }
}

AnswerInput.propTypes = {
  // type: PropTypes.string.isRequired,
  seperator: PropTypes.string,
  goClick: PropTypes.func.isRequired,
  focusAnswer: PropTypes.func.isRequired,
  resetAnswer: PropTypes.func.isRequired,
};

export default AnswerInput;
