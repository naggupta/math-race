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
    // console.log('[actions] start',questiontype1);
    const lquestiontype1 = questiontype1;
    const lquestiontype2 = questiontype2;
    if (
      // eslint-disable-next-line operator-linebreak
      !getstate().game.questions &&
      (['WORD', 'MONEY', 'FILL', 'CONVERSIONS'].includes(lquestiontype1.type) || (lquestiontype2 && ['WORD', 'MONEY', 'FILL', 'CONVERSIONS'].includes(lquestiontype2.type)))
    ) {
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

      const questions = {};

      const res = await axios.get('/questions.json');
      const { data } = await res;

      // .then((response) => {
      // console.log('data:',data);
      Object.keys(data).forEach((key) => {
        const q = [];
        data[key].forEach((item, idx) => {
          // const question = item;
          if (!(item.active && item.active === 'N')) q.push({ id: idx, ...item });
        });
        questions[key] = q;
      });

      // data.Word.forEach((item, idx) => {
      //   // const question = item;
      //   if (!(item.active && item.active === 'N')) questions.push({ id: idx, ...item });
      // });

      // console.log('Questions', questions);
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
    let question2 = {};
    let indexs2 = [];
    if (playername2) {
      if (['WORD', 'MONEY', 'FILL', 'CONVERSIONS'].includes(questiontype2.type)) {
        lquestiontype2.points = indexs2.length;
        indexs2 = [...Array(getstate().game.wordquestions[lquestiontype2.type].length).keys()];
      }
      question2 = { ...Utils.generateQuestion(lquestiontype2, getstate().game.wordquestions, indexs2) };
    }

    let indexs1 = [];
    if (['WORD', 'MONEY', 'FILL', 'CONVERSIONS'].includes(questiontype1.type)) {
      indexs1 = [...Array(getstate().game.wordquestions[lquestiontype1.type].length).keys()];
      lquestiontype1.points = indexs1.length;
    }

    // Question loaded if required
    dispatch({
      type: actionTypes.START,
      // questiontype: questiontype,
      players: [
        {
          id: 0,
          name: playername1,
          points: 0,
          wrong: 0,
          ...Utils.generateQuestion(lquestiontype1, getstate().game.wordquestions, indexs1),
          answerresult: '',
          questiontype: lquestiontype1,
          wordquestionsindexs: indexs1,
        },
        { id: 1, name: playername2, points: 0, wrong: 0, ...question2, answerresult: '', questiontype: lquestiontype2, wordquestionsindexs: indexs2 },
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

export const nextQuestion = (playerno, isCorrect = true) => {
  return (dispatch, getstate) => {
    // const { nos, digits, decimals } = getstate().game.questiontype;
    const { questionno, questiontype } = getstate().game.players[playerno];
    const { wordquestionsindexs } = getstate().game.players[playerno];
    const index = wordquestionsindexs.indexOf(questionno);
    if (index > -1) {
      wordquestionsindexs.splice(index, 1);
    } //
    // Reload the indexes if all questions are answered...
    // if (!wordquestionsindexs || wordquestionsindexs.length <= 0) {
      // dispatch(complete());
      // return;
      // wordquestionsindexs = [...Array(getstate().game.wordquestions[questiontype.type].length).keys()];
    // }
    dispatch({
      type: actionTypes.CORRECT,
      isCorrect: isCorrect,
      playerno: playerno,
      ...Utils.generateQuestion(getstate().game.players[playerno].questiontype, getstate().game.wordquestions, wordquestionsindexs),
      wordquestionsindexs: wordquestionsindexs,
    });
  };
};

export const wrongAnswer = (playerno) => {
  return (dispatch, getstate) => {
    // const { nos, digits, decimals } = getstate().game.questiontype;
    const { wordquestionsindexs } = getstate().game.players[playerno];
    dispatch({
      type: actionTypes.WRONG,
      playerno: playerno,
      ...Utils.generateQuestion(getstate().game.players[playerno].questiontype, getstate().game.wordquestions, wordquestionsindexs),
    });
  };
};

export const multiplayermode = (multiplayer, playername1, playername2) => {
  return (dispatch, getstate) => {
    const players = [...getstate().game.players];
    players[0].name = playername1;
    players[1].name = playername2;
    dispatch({
      type: actionTypes.SET_MULTIPLAYER,
      multiplayer: multiplayer,
      players: players,
    });
  };
};

export const complete = () => {
  return {
    type: actionTypes.COMPLETE,
  };
};

export const win = (playerno, isCorrect = true) => {
  return {
    playerno: playerno,
    type: actionTypes.WIN,
    isCorrect: isCorrect,
  };
};
