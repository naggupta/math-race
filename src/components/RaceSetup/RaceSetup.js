import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import * as ReducerActions from '../../store/game/actions/index'

class RaceSetup extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    shouldComponentUpdate(nextProps, newState) {
        console.log('[RaceSetup] shouldComponentUpdate', this.props, nextProps);
        return true;
    }

    startGame = () => {
        const questiontype = {
            type: '+-',
            nos: 2,
            digits: 1,
            decimals: 0,
            points:2,
        };
        this.props.start('Nanna', 'Hasana', questiontype);
    }

    // startGame = () => {
    //     this.props.start();
    // }

    render() {
        return (
            <Fragment>
                {/* <p><a
                  role="button"
                  onKeyPress={(e) => this.init(e)}
                  tabIndex={0}
                  onClick={(e) => this.init(e)}
                >INIT...
                   </a>
                </p> */}
                <p><a
                    role="button"
                    onKeyPress={(e) => this.startGame(e)}
                    tabIndex={0}
                    onClick={(e) => this.startGame(e)}
                >START...
                   </a>
                </p>
            </Fragment>
        )
    }
}

const mapStateToProps = (state) => ({
    players: state.game.players,
    starttime: state.game.starttime,
    endtime: state.game.endtime,
})

const mapDispatchToProps = (dispatch) => ({
    reset: () => dispatch(ReducerActions.reset()),
    // start: () => dispatch(ReducerActions.start()),
    start: (playername1, playername2, questiontype) => dispatch(ReducerActions.start(playername1, playername2, questiontype)),
})

export default connect(mapStateToProps, mapDispatchToProps)(RaceSetup)
