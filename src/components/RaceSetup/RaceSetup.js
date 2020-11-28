import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import * as ReducerActions from '../../store/game/actions/index'
import * as Classes from './RaceSetup.module.css'

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
            points: 10,
        };
        this.props.start('Nanna', 'Hasana', questiontype);
    }

    // startGame = () => {
    //     this.props.start();
    // }

    render() {
        return (
            <Fragment>
                <div>
                    <ul>
                        <li>Nanna</li>
                        <li>Amma</li>
                        <li>Hasana</li>
                    </ul>
                    <ul>
                        <li>Nanna</li>
                        <li>Amma</li>
                        <li>Hasana</li>
                    </ul>
                </div>
                <div>
                    <h2>Digits</h2>
                    <button type="button" onClick={() => this.appendAnswer('1')} className={['w3-button', 'w3-round-large',  Classes.BtnNumber].join(' ')}>1</button>
                    <button type="button" onClick={() => this.appendAnswer('1')} className={['w3-button', 'w3-round-large',  Classes.BtnNumber].join(' ')}>2</button>
                    <button type="button" onClick={() => this.appendAnswer('1')} className={['w3-button', 'w3-round-large',  Classes.BtnNumber].join(' ')}>3</button>

                </div>
                <div>
                    <h2>Numbers</h2>
                    <button type="button" onClick={() => this.appendAnswer('1')} className={['w3-button', 'w3-round-large',  Classes.BtnNumber].join(' ')}>1</button>
                    <button type="button" onClick={() => this.appendAnswer('1')} className={['w3-button', 'w3-round-large',  Classes.BtnNumber].join(' ')}>2</button>
                    <button type="button" onClick={() => this.appendAnswer('1')} className={['w3-button', 'w3-round-large',  Classes.BtnNumber].join(' ')}>3</button>
                    <button type="button" onClick={() => this.appendAnswer('1')} className={['w3-button', 'w3-round-large',  Classes.BtnNumber].join(' ')}>4</button>
                    <button type="button" onClick={() => this.appendAnswer('1')} className={['w3-button', 'w3-round-large',  Classes.BtnNumber].join(' ')}>5</button>
                </div>
                <div>
                    <h2>Decimals</h2>
                    <button type="button" onClick={() => this.appendAnswer('1')} className={['w3-button', 'w3-round-large',  Classes.BtnNumber].join(' ')}>0</button>
                    <button type="button" onClick={() => this.appendAnswer('1')} className={['w3-button', 'w3-round-large',  Classes.BtnNumber].join(' ')}>1</button>
                    <button type="button" onClick={() => this.appendAnswer('1')} className={['w3-button', 'w3-round-large',  Classes.BtnNumber].join(' ')}>2</button>
                </div>

                {/* <p><a
                  role="button"
                  onKeyPress={(e) => this.init(e)}
                  tabIndex={0}
                  onClick={(e) => this.init(e)}
                >INIT...
                   </a>
                </p> */}
                <p><button
                  type="button"
                  onKeyPress={(e) => this.startGame(e)}
                  onClick={(e) => this.startGame(e)}
                  className={['w3-btn', 'w3-round-large', Classes.BtnGo].join(' ')}
                >Start
                   </button>

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
