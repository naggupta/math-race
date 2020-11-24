import * as actionTypes from './actionTypes'

export const reset = (name1,name2) => {
    return {
        type: actionTypes.RESET,
        name1:name1,
        name2:name2
    }
};

export const start = () => {
    return {
        type: actionTypes.START,
    }
};


export const nextQuestion = (playerno) => {
    return {
        type: actionTypes.CORRECT,
        playerno:playerno
    }
};
export const wrongAnswer = (playerno) => {
    return {
        type: actionTypes.WRONG,
        playerno:playerno
    }
};

export const complete = () => {
    return {
        type: actionTypes.COMPLETE,
    }
};