import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Background from '../../components/Background/Background'
import * as ReducerActions from '../../store/game/actions/index'

class RaceWrapper extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <Fragment>
                <Background players={this.props.players} />
            </Fragment>
        )
    }
}

// RaceWrapper.propTypes = {

// }

const mapStateToProps = (state) => ({
    players: state.game.players,
    starttime: state.game.starttime,
    endtime: state.game.endtime,
})

const mapDispatchToProps = (dispatch) => ({

})

export default connect(mapStateToProps, mapDispatchToProps)(RaceWrapper)
