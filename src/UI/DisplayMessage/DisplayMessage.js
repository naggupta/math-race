import React from 'react'
import PropTypes from 'prop-types'
import * as Classes from './DisplayMessage.module.css'

function DisplayMessage(props) {
    console.log('[DisplayMessage] render', props.display);
    if (props.display === 'CORRECT')
        return (
            <div className={[Classes.DisplayMessage, Classes.Correct].join(' ')}>
                <i style={{ margin: '5px' }} className="fa fa-check" />
            </div>
        )
    else if (props.display === 'WRONG')
        return (
            <div className={[Classes.DisplayMessage, Classes.Wrong].join(' ')}>
                <i style={{ margin: '5px' }} className="fa fa-times" />
            </div>
        )
}

DisplayMessage.propTypes = {
    display: PropTypes.string.isRequired,
}

export default DisplayMessage
