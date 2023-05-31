import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import * as classes from './Backdrop.module.css';

function Backdrop(props) {
    if (props.show)
    return (
                            <div
                              className={classes.Backdrop}
                              onClick={props.clicked} 
                              onKeyPress={props.clicked}
                              role="button"
                              tabIndex="0"
                            />
                            );
                            
    return (<> </>)
}

Backdrop.propTypes = {
    show: PropTypes.bool.isRequired,
    clicked: PropTypes.func.isRequired,
}

export default Backdrop
