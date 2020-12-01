import React, { PureComponent, Fragment } from 'react'
import { connect } from 'react-redux'
import * as ReducerActions from '../../store/game/actions/index'
import * as Classes from './RaceSetup.module.css'

class RaceSetup extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    // shouldComponentUpdate(nextProps, newState) {
    //     console.log('[RaceSetup] shouldComponentUpdate', this.props, nextProps);
    //     return true;
    // }

    // shouldComponentUpdate(nextProps, newState) {
    //     return true;
    // }

    // startGame = () => {
    //     const questiontype = {
    //         type: '+-',
    //         nos: 3,
    //         numbers: 2,
    //         decimals: 0,
    //         points: 10,

    //     };
    //     this.props.start('Hasana', 'Nanna', questiontype);
    // }
    handleSubmit = (e) => {
        e.preventDefault();

        const { player1, player2, digits, numbers, decimals, type, points } = this.form;

        const questiontype = {
            type: type.value,
            nos: +numbers.value,
            digits: +digits.value,
            decimals: +decimals.value,
            points: +points.value,

        };

        console.log(questiontype);
        this.props.start(player1.value, player2.value, questiontype);
    }

    // startGame = () => {
    //     this.props.start();
    // }

    render() {
        console.log('[RaceSetup] render');

        const { questiontype } = this.props;
        const player1 = (this.props.players && this.props.players[0].name) || 'Hasana';
        const player2 = (this.props.players && this.props.players[1].name) || 'Nanna';

        return (
            // <div>
            //     <label>
            //         <input type="radio" defaultChecked value="Male" name="player2" /> 
            //             Hasana
            //     </label>
            //     <label>
            //         <input type="radio" defaultChecked={false} value="Male1" name="player2" /> 
            //             Hasana
            //     </label>
            //     <label>
            //         <input type="radio" defaultChecked={false} value="Male1" name="player2" /> 
            //             Hasana
            //     </label>

            // </div>

            <Fragment>
                <form onSubmit={this.handleSubmit} ref={(e) => { this.form = e }}>
                    <h2 style={{ textAlign: 'center' }}>Maths Race</h2>
                    <div className={Classes.RaceSetup}>

                        <div className={Classes.Players}>
                            <div><h2>Player1</h2>
                                <div>
                                    <input type="radio" name="player2" value="Hasana" defaultChecked={player2 === 'Hasana'} />
                                    <label>Hasana</label>
                                </div>
                                <div>
                                    <input type="radio" name="player2" value="Nanna" defaultChecked={player2 === 'Nanna'} />
                                    <label>Nanna</label>
                                </div>
                                <div>
                                    <input type="radio" name="player2" value="Amma" defaultChecked={player2 === 'Amma'} />
                                    <label>Amma</label>
                                </div>
                            </div>
                            <div><h2>Player2</h2>
                                <div>
                                    <input type="radio" name="player1" value="Hasana" defaultChecked={player1 === 'Hasana'} />
                                    <label>Hasana</label>
                                </div>
                                <div>
                                    <input type="radio" name="player1" value="Nanna" defaultChecked={player1 === 'Nanna'} />
                                    <label>Nanna</label>
                                </div>
                                <div>
                                    <input type="radio" name="player1" value="Amma" defaultChecked={player1 === 'Amma'} />
                                    <label>Amma</label>
                                </div>
                            </div>
                        </div>
                        <div className={Classes.Options}>
                            <div>
                                <h2>Type</h2>
                                <div>
                                    <input type="radio" name="type" value="+-" defaultChecked="true" />
                                    <label>+-</label>
                                </div>

                            </div>
                            <div>
                                <h2>Digits</h2>
                                <div>
                                    <input type="radio" name="digits" value="1" defaultChecked={questiontype.digits === 1} />
                                    <label>1</label>
                                </div>
                                <div>
                                    <input type="radio" name="digits" value="2" defaultChecked={questiontype.digits === 2} />
                                    <label>2</label>
                                </div>
                                <div>
                                    <input type="radio" name="digits" value="3" defaultChecked={questiontype.digits === 3} />
                                    <label>3</label>
                                </div>
                            </div>
                            <div>
                                <h2>Numbers</h2>
                                
                                <div>
                                    <input type="radio" name="numbers" value="2" defaultChecked={questiontype.nos === 2} />
                                    <label>2</label>
                                </div>
                                <div>
                                    <input type="radio" name="numbers" value="3" defaultChecked={questiontype.nos === 3} />
                                    <label>3</label>
                                </div>
                                <div>
                                    <input type="radio" name="numbers" value="4" defaultChecked={questiontype.nos === 4} />
                                    <label>4</label>
                                </div>
                                <div>
                                    <input type="radio" name="numbers" value="5" defaultChecked={questiontype.nos === 5} />
                                    <label>5</label>
                                </div>
                            </div>
                            <div>
                                <h2>Decimals</h2>
                                <div>
                                    <input type="radio" name="decimals" value="0" defaultChecked={questiontype.decimals === 0} />
                                    <label>0</label>
                                </div>
                                <div>
                                    <input type="radio" name="decimals" value="1" defaultChecked={questiontype.decimals === 1} />
                                    <label>1</label>
                                </div>
                                <div>
                                    <input type="radio" name="decimals" value="2" defaultChecked={questiontype.decimals === 2} />
                                    <label>2</label>
                                </div>
                            </div>
                            <div>
                                <h2>Points</h2>
                                <div>
                                    <input type="radio" name="points" value="5" defaultChecked={questiontype.points === 5} />
                                    <label>5</label>
                                </div>
                                <div>
                                    <input type="radio" name="points" value="10" defaultChecked={questiontype.points === 10} />
                                    <label>10</label>
                                </div>
                                <div>
                                    <input type="radio" name="points" value="15" defaultChecked={questiontype.points === 15} />
                                    <label>15</label>
                                </div>
                                <div>
                                    <input type="radio" name="points" value="20" defaultChecked={questiontype.points === 20} />
                                    <label>20</label>
                                </div>
                                <div>
                                    <input type="radio" name="points" value="25" defaultChecked={questiontype.points === 25} />
                                    <label>25</label>
                                </div>

                            </div>

                            <div>
                                <button
                                    type="submit"
                                    value="Start"
                                    // onKeyPress={(e) => this.startGame(e)}
                                    // onClick={(e) => this.startGame(e)}
                                    className={['w3-btn', 'w3-round-large', Classes.BtnGo].join(' ')}
                                >Start &gt;&gt;
                                </button>

                            </div>
                        </div>

                    </div>
                </form>
            </Fragment>
        )
    }
}

const mapStateToProps = (state) => ({
    players: state.game.players,
    questiontype: state.game.questiontype,
    // starttime: state.game.starttime,
    // endtime: state.game.endtime,
})

const mapDispatchToProps = (dispatch) => ({
    // reset: () => dispatch(ReducerActions.reset()),
    // start: () => dispatch(ReducerActions.start()),
    start: (playername1, playername2, questiontype) => dispatch(ReducerActions.start(playername1, playername2, questiontype)),
})

export default connect(mapStateToProps, mapDispatchToProps)(RaceSetup)
