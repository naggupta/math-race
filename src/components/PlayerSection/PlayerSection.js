import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import * as ReducerActions from '../../store/game/actions/index'
import Classes from './PlayerSection.module.css'

class PlayerSection extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    buttonTheme = () => {
        return (this.props.playerno === '1' ? 'w3-ripple w3-hover-teal w3-teal' : 'w3-ripple w3-hover-red w3-red');
    }

    sectionTheme = () => {
        return (this.props.playerno === '1' ? 'w3-teal' : 'w3-red');
    }


    render() {
        return (
            <div className={[(this.props.playerno === '0' ? Classes._0 : Classes._1)].join(' ')}>
                <div className={[Classes.PlayerCharacter].join(' ')}>
                    <img style={{ position: 'absolute', transform: 'scaleX(1)', left: `${this.props.points * 9}vw` }} alt={this.props.playerno} className={[Classes.PlayerCharacter, (this.props.playerno === 1 ? Classes._1 : Classes._2)].join(' ')} height="auto" width="100px" src={`/images/Fish_${this.props.playerno}.svg`} />
                </div>
                <div className={Classes.QuestionBar}>
                    <span className={[this.sectionTheme()].join(' ')}><span className={[Classes.PlayerName].join(' ')}>Hasana</span></span>
                    {/* <span className={Classes.Question}><span style={{fontSize:'2.5em'}}>Emily has £46.20. She wants to buy a new e-book. It costs £20. How much more money does she need to Save?</span></span> */}
                    <span className={Classes.Question}><span style={{ fontSize: '3em' }}>312.21 + 325.21 - 231 + 321?</span></span>
                    <span style={{ position: 'relative' }} className={[this.sectionTheme()].join(' ')}>
                        <span className={['fa-stack', Classes.Score].join(' ')}>
                            <span className={['fa fa-star fa-stack-2x'].join(' ')} />
                            <strong className="fa-stack-1x" style={{ color: '#000' }}>
                                2
                            </strong>
                        </span>
                        <a role="button" data-playerno={this.props.playerno} onClick={(e) => this.props.nextQuestion(e.currentTarget.dataset.playerno)} tabIndex={0} onKeyPress={(e) => this.props.nextQuestion(e.currentTarget.dataset.playerno)} className={Classes.Close}><i className="fa fa-window-close" /></a>
                    </span>
                </div>
                <div className={Classes.ButtonBar}>
                    <button type="button" data-playerno={this.props.playerno} className={['w3-button', 'w3-round-large', this.buttonTheme(), Classes.BtnNumber].join(' ')}>1</button>
                    <button type="button" data-playerno={this.props.playerno} className={['w3-btn', 'w3-round-large', this.buttonTheme(), Classes.BtnNumber].join(' ')}>2</button>
                    <button type="button" data-playerno={this.props.playerno} className={['w3-btn', 'w3-round-large', this.buttonTheme(), Classes.BtnNumber].join(' ')}>3</button>
                    <button type="button" data-playerno={this.props.playerno} className={['w3-btn', 'w3-round-large', this.buttonTheme(), Classes.BtnNumber].join(' ')}>4</button>
                    <button type="button" data-playerno={this.props.playerno} className={['w3-btn', 'w3-round-large', this.buttonTheme(), Classes.BtnNumber].join(' ')}>5</button>
                    <button type="button" data-playerno={this.props.playerno} className={['w3-btn', 'w3-round-large', this.buttonTheme(), Classes.BtnNumber].join(' ')}>6</button>
                    <button type="button" data-playerno={this.props.playerno} className={['w3-btn', 'w3-round-large', this.buttonTheme(), Classes.BtnNumber].join(' ')}>7</button>
                    <button type="button" data-playerno={this.props.playerno} className={['w3-btn', 'w3-round-large', this.buttonTheme(), Classes.BtnNumber].join(' ')}>8</button>
                    <button type="button" data-playerno={this.props.playerno} className={['w3-btn', 'w3-round-large', this.buttonTheme(), Classes.BtnNumber].join(' ')}>9</button>
                    <button type="button" data-playerno={this.props.playerno} className={['w3-btn', 'w3-round-large', this.buttonTheme(), Classes.BtnNumber].join(' ')}>0</button>
                    <button type="button" data-playerno={this.props.playerno} className={['w3-btn', 'w3-round-large', this.buttonTheme(), Classes.BtnNumber].join(' ')}>.</button>
                    <button type="button" data-playerno={this.props.playerno} className={['w3-btn', 'w3-round-large', this.buttonTheme(), Classes.BtnNumber].join(' ')}>&lt;</button>
                    <input onKeyDown="return false" onKeyPress="return false" onKeyUp="return false" type="text" maxLength="7" className={['w3-btn', 'w3-round-large', this.sectionTheme(), Classes.Answer].join(' ')} />
                    <button
                      type="button"
                      data-playerno={this.props.playerno}
                      onClick={(e) => this.props.nextQuestion(e.currentTarget.dataset.playerno)}
                      className={['w3-btn', 'w3-round-large', this.buttonTheme(), Classes.BtnGo].join(' ')}
                    >GO
                    </button>
                </div>
            </div>
            // <div className={[(this.props.playerno == 0 ? Classes._0 : Classes._1)].join(' ')}>
            //     <div className={Classes.QuestionWrapper}>
            //         <div className={Classes.Question}>
            //         <span class="fa-stack">
            //                 <span className={['fa fa-star fa-stack-2x',this.buttonTheme(),Classes.BtnNumber].join(' ')}></span>
            //                 <strong class="fa-stack-1x" style={{color:'#FFF'}}>
            //                     2    
            //                 </strong>
            //             </span>
            //             <span>Emily has £46.20. She wants to buy a new e-book. It costs £20. How much more money does she need to Save?</span>
            //         </div>
            //         <div class={Classes.ButtonBar}>
            //             <button type="button" data-playerno={this.props.playerno}  className={['w3-button','w3-round-large',this.buttonTheme(),Classes.BtnNumber].join(' ')}>1</button>
            //             <button type="button" data-playerno={this.props.playerno}  className={['w3-btn','w3-round-large',this.buttonTheme(),Classes.BtnNumber].join(' ')}>2</button>
            //             <button type="button" data-playerno={this.props.playerno}  className={['w3-btn','w3-round-large',this.buttonTheme(),Classes.BtnNumber].join(' ')}>3</button>
            //             <button type="button" data-playerno={this.props.playerno}  className={['w3-btn','w3-round-large',this.buttonTheme(),Classes.BtnNumber].join(' ')}>4</button>
            //             <button type="button" data-playerno={this.props.playerno}  className={['w3-btn','w3-round-large',this.buttonTheme(),Classes.BtnNumber].join(' ')}>5</button>
            //             <button type="button" data-playerno={this.props.playerno}  className={['w3-btn','w3-round-large',this.buttonTheme(),Classes.BtnNumber].join(' ')}>6</button>
            //             <button type="button" data-playerno={this.props.playerno}  className={['w3-btn','w3-round-large',this.buttonTheme(),Classes.BtnNumber].join(' ')}>7</button>
            //             <button type="button" data-playerno={this.props.playerno}  className={['w3-btn','w3-round-large',this.buttonTheme(),Classes.BtnNumber].join(' ')}>8</button>
            //             <button type="button" data-playerno={this.props.playerno}  className={['w3-btn','w3-round-large',this.buttonTheme(),Classes.BtnNumber].join(' ')}>9</button>
            //             <button type="button" data-playerno={this.props.playerno}  className={['w3-btn','w3-round-large',this.buttonTheme(),Classes.BtnNumber].join(' ')}>0</button>
            //             <button type="button" data-playerno={this.props.playerno}  className={['w3-btn','w3-round-large',this.buttonTheme(),Classes.BtnNumber].join(' ')}>.</button>
            //             <button type="button" data-playerno={this.props.playerno}  className={['w3-btn','w3-round-large',this.buttonTheme(),Classes.BtnNumber].join(' ')}>&lt;</button>
            //             <input onKeyDown="return false" onKeyPress="return false"  onKeyUp="return false"  type="text" maxLength="7" className={['w3-btn','w3-round-large',this.buttonTheme(),Classes.Answer].join(' ')}></input>
            //             <button type="button" data-playerno={this.props.playerno} 
            //                                     onClick={(e) => this.props.nextQuestion(e.currentTarget.dataset.playerno)} 
            //                                     className={['w3-btn','w3-round-large',this.buttonTheme(),Classes.BtnGo].join(' ')}>GO</button>
            //         </div>
            //     </div>
            //     <div style={{ left: `${this.props.points * 9}vw` }} className={[Classes.PlayerSection].join(' ')} >
            //         <img alt={this.props.playerno} className={[Classes.PlayerSection, (this.props.playerno === 1 ? Classes._1 : Classes._2)].join(' ')} height="auto" width="100px" src={`/images/Fish_${this.props.playerno}.svg`} />
            //     </div>

            // </div>
        )
    }
}

// RaceWrapper.propTypes = {

// }

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = (dispatch) => ({
    reset: () => dispatch(ReducerActions.reset()),
    start: () => dispatch(ReducerActions.start()),
    nextQuestion: (playerno) => dispatch(ReducerActions.nextQuestion(playerno)),
    wrongAnswer: () => dispatch(ReducerActions.wrongAnswer()),
    complete: () => dispatch(ReducerActions.complete()),
})

export default connect(mapStateToProps, mapDispatchToProps)(PlayerSection)
