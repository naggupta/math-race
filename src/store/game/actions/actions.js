import * as actionTypes from './actionTypes';
import * as Utils from '../../../Utils/QuestionGenerator';

export const reset = () => {
  return {
    type: actionTypes.RESET,
  };
};

export const start = (
  playername1,
  playername2,
  questiontype1,
  questiontype2,
) => {
  return {
    type: actionTypes.START,
    // questiontype: questiontype,
    players: [
      { id: 0, name: playername1, points: 0, wrong: 0, ...Utils.generateQuestion(questiontype1), answerresult: '', questiontype: questiontype1 },
      { id: 1, name: playername2, points: 0, wrong: 0, ...Utils.generateQuestion(questiontype2), answerresult: '', questiontype: questiontype2 },
    ],
  };
};

// export const start = () => {
//     return (dispatch, getstate) => {
//         const { nos, digits, decimals } = getstate().game.questiontype;
//         dispatch({
//             type: actionTypes.START,
//             players: [Utils.generateQuestion(nos, digits, decimals), Utils.generateQuestion(nos, digits, decimals)],
//         })
//     }
// };

export const nextQuestion = (playerno) => {
  return (dispatch, getstate) => {
    // const { nos, digits, decimals } = getstate().game.questiontype;
    dispatch({
      type: actionTypes.CORRECT,
      playerno: playerno,
      ...Utils.generateQuestion(getstate().game.players[playerno].questiontype),
    });
  };
};

export const wrongAnswer = (playerno) => {
  return (dispatch, getstate) => {
    // const { nos, digits, decimals } = getstate().game.questiontype;
    dispatch({
      type: actionTypes.WRONG,
      playerno: playerno,
      ...Utils.generateQuestion(getstate().game.players[playerno].questiontype),
    });
  };
};

export const complete = () => {
  return {
    type: actionTypes.COMPLETE,
  };
};

export const win = (playerno) => {
  return {
    playerno: playerno,
    type: actionTypes.WIN,
  };
};
