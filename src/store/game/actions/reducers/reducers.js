// import * as indexDB from 'idb-keyval';
import * as actionTypes from '../actionTypes';

const initialState = {
    starttime: null,
    endtime: null,
    players: [{ name: null, points: 0, wrong: 0 }, { name: null, points: 0, wrong: 0 }],
};

const reducer = (state = initialState, action) => {
    // console.log(action.type)
    console.log('[reducer]', action.type)
    const players = [...state.players];
    switch (action.type) {
        case actionTypes.RESET:
            return {
                ...state,
                starttime: null,
                endtime: null,
                players: [{ name: action.player1, points: 0, wrong: 0 }, { name: action.player2, points: 0, wrong: 0 }],
            };
        case actionTypes.START:
            return {
                ...state, starttime: new Date(),
            };
        case actionTypes.CORRECT:
            players[action.playerno].points += 1;
            return {
                ...state, players: players,
            };
        case actionTypes.WRONG:
            players[action.playerno].wrong += 1;
            return {
                ...state, players: players,
            };
        case actionTypes.COMPLETE:
            return {
                ...state, endtime: new Date(),
            };
        default:
            return state;
    }
};

export default reducer;
