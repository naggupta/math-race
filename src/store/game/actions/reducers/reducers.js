// import * as indexDB from 'idb-keyval';
// import { null } from 'mathjs';
import * as actionTypes from '../actionTypes';

const questiontype = {
  type: '+-',
  nos: 2,
  digits: 2,
  decimals: 0,
  points: 10,
  tens: 'Y',
  delay: 0,
  inwords: false,
  level: 1,
  HR24: 'N',
};
const player = {
  name: null,
  points: 0,
  wrong: 0,
  question: null,
  answer: null,
  answerresult: null,
  questiontype: { ...questiontype },
};
const initialState = {
  starttime: null,
  endtime: null,
  // questiontype: {
  //     type: '+-',
  //     nos: 3,
  //     digits: 3,
  //     decimals: 0,
  //     points:10,
  // },
  players: [
    { id: 0, ...player },
    { id: 1, ...player },
  ],
  wordquestions: null,
};

const reducer = (state = initialState, action) => {
  // console.log(action.type)
  // console.log('[reducer]', action.type);
  let players = null;
  switch (action.type) {
    case actionTypes.RESET:
      return {
        ...state,
        starttime: null,
        endtime: null,
        // players: null,
      };
    case actionTypes.LOAD_QUESTIONS: // Set Names and question actiontype:{} players:[{name}]}
      // action.players.forEach((player, index) => {
      //     players[index] = { ...players[index], ...player }
      // });
      return {
        ...state,
        wordquestions: action.questions,
      };
    case actionTypes.START: // Set Names and question actiontype:{} players:[{name}]}
      // action.players.forEach((player, index) => {
      //     players[index] = { ...players[index], ...player }
      // });
      return {
        ...state,
        starttime: new Date(),
        // questiontype: action.questiontype,
        players: [...action.players],
      };
    // case actionTypes.START: // players:[{question,answer}]
    //     players = [...state.players];
    //     action.players.forEach((player, index) => {
    //         players[index] = { ...players[index], ...player }
    //     });
    //     return {
    //         ...state, starttime: new Date(), players: players,
    //     };
    case actionTypes.CORRECT:
      players = [...state.players];
      players[action.playerno].points += 1;
      players[action.playerno].question = action.question;
      players[action.playerno].questions = action.questions;
      players[action.playerno].answer = action.answer;
      players[action.playerno].answerresult = 'CORRECT';
      return {
        ...state,
        players: [...players],
      };
    case actionTypes.WRONG:
      players = [...state.players];
      players[action.playerno].wrong += 1;
      players[action.playerno].question = action.question;
      players[action.playerno].questions = action.questions;
      players[action.playerno].answer = action.answer;
      players[action.playerno].answerresult = 'WRONG';
      return {
        ...state,
        players: players,
      };
    case actionTypes.WIN:
      players = [...state.players];
      players[action.playerno].points += 1;
      return {
        ...state,
        // endtime: new Date(),
        players: [...players],
      };
    case actionTypes.COMPLETE:
      // players = [...state.players];
      // players[action.playerno].points += 1;
      return {
        ...state,
        endtime: new Date(),
        // players: [...players],
      };
    default:
      return state;
  }
};

export default reducer;
