// import * as indexDB from 'idb-keyval';
import * as actionTypes from '../actionTypes';

const initialState = {
    starttime: null,
    endtime: null,
    questiontype: {
        type: '+-',
        nos: 2,
        digits: 2,
        decimals: 0,
        points:10,
    },
    players: null,
};

const reducer = (state = initialState, action) => {
    // console.log(action.type)
    console.log('[reducer]', action.type)
    let players = null;
    switch (action.type) {
        case actionTypes.RESET:
            return {
                ...state,
                starttime: null,
                endtime: null,
                players: null,
            };
        case actionTypes.START: // Set Names and question actiontype:{} players:[{name}]}
            // action.players.forEach((player, index) => {
            //     players[index] = { ...players[index], ...player }
            // });
            return {
                ...state,
                starttime: new Date(),
                questiontype: action.questiontype,
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
            players[action.playerno].answer = action.answer;
            players[action.playerno].answerresult = 'CORRECT';
            return {
                ...state, players: [...players],
            };
        case actionTypes.WRONG:
            players = [...state.players];
            players[action.playerno].wrong += 1;
            players[action.playerno].question = action.question;
            players[action.playerno].answer = action.answer;
            players[action.playerno].answerresult = 'WRONG';
            return {
                ...state, players: players,
            };
        case actionTypes.COMPLETE:
            players = [...state.players];
            players[action.playerno].points += 1;
            return {
                ...state, endtime: new Date(), players: [...players],
            };
        default:
            return state;
    }
};

export default reducer;
