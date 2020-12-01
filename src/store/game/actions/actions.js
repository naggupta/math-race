import * as actionTypes from './actionTypes'
import * as Utils from '../../../Utils/QuestionGenerator'

export const reset = () => {
    return {
        type: actionTypes.RESET,
    }
};

export const start = (playername1, playername2, questiontype = {
    type: '+-',
    nos: 2,
    digits: 2,
    decimals: 0,
    points:10,
}) => {
    return {
        type: actionTypes.START,
        questiontype: questiontype,
        players: [{ id: 0, name: playername1, points: 0, wrong: 0, ...Utils.generateQuestion(questiontype), answerresult: '' },
        { id: 1, name: playername2, points: 0, wrong: 0, ...Utils.generateQuestion(questiontype), answerresult: '' },
        ],
    }
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
            ...Utils.generateQuestion(getstate().game.questiontype),
        })
    }
};

export const wrongAnswer = (playerno) => {
    return (dispatch, getstate) => {
        // const { nos, digits, decimals } = getstate().game.questiontype;
        dispatch({
            type: actionTypes.WRONG,
            playerno: playerno,
            ...Utils.generateQuestion(getstate().game.questiontype),
        })
    }
};

export const complete = (playerno) => {
    return {
        playerno: playerno,
        type: actionTypes.COMPLETE,
    }
};
