import * as actionTypes from './actionTypes';
import * as Utils from '../../../Utils/QuestionGenerator';
import firebase from '../../../Config/Firebase';
import axios from '../../../axios-firebase';

export const reset = () => {
  return {
    type: actionTypes.RESET,
  };
};

export const start = (playername1, playername2, questiontype1, questiontype2) => {
  return async (dispatch, getstate) => {
    // const { nos, digits, decimals } = getstate().game.questiontype;

    if ((questiontype1.type === 'WORD' || questiontype2.type === 'WORD') && !getstate().game.questions) {
      //   axios.get('/questions.json')
      //         .then(response=>{
      //             console.log(response.data);
      //             // dispatch(setIngredients(response.data))
      //         })
      //         .catch(error=>{
      //             console.log(error);
      //             // dispatch(fetchIngredientsFailed());
      //         });
      // };

      const questions = [];

      const res = await axios.get('/questions.json');
      const { data } = await res;

      // .then((response) => {
      //   console.log(response.data.Word);
      data.Word.forEach((item, idx) => {
        // const question = item;
        if (!(item.active && item.active === 'N')) questions.push({ id: idx, ...item });
      });

      console.log(questions); 
      // const db = firebase.firestore();
      // const snapshot = db.collection('/questions');
      // const collections = await snapshot.get();
      // const questions = [];
      // collections.docs.forEach((item) => {
      //   const question = item.data(); 
      //   questions.push({ id: item.id, ...question });
      //   // Object.keys(question).forEach((key) => {
      //   //   console.log(`${key} - ${question[key]}`);
      //   // });
      // });
      // console.log('[action.start]', questions);

      await dispatch({
        type: actionTypes.LOAD_QUESTIONS,
        questions: questions,
      });
    }
    // Question loaded if required
    dispatch({
      type: actionTypes.START,
      // questiontype: questiontype,
      players: [
        { id: 0, name: playername1, points: 0, wrong: 0, ...Utils.generateQuestion(questiontype1, getstate().game.wordquestions), answerresult: '', questiontype: questiontype1 },
        { id: 1, name: playername2, points: 0, wrong: 0, ...Utils.generateQuestion(questiontype2, getstate().game.wordquestions), answerresult: '', questiontype: questiontype2 },
      ],
    });
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
      ...Utils.generateQuestion(getstate().game.players[playerno].questiontype, getstate().game.wordquestions),
    });
  };
};

export const wrongAnswer = (playerno) => {
  return (dispatch, getstate) => {
    // const { nos, digits, decimals } = getstate().game.questiontype;
    dispatch({
      type: actionTypes.WRONG,
      playerno: playerno,
      ...Utils.generateQuestion(getstate().game.players[playerno].questiontype, getstate().game.wordquestions),
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
