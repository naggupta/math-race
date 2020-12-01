import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import Backdrop from '../Backdrop/Backdrop'
import * as classes from './Modal.module.css'

function Modal(props) {
    if (!props.show) return (<Fragment />)
    return (
        <Fragment>
                {/* <div id="myModal" className={classes.modal}>
  
                      <div className="modal-content" role="button" tabIndex={0} onKeyPress={props.modelClosed} onClick={props.modelClosed}>
                          {props.children}
                      </div>
  
                  </div> */}

                <Backdrop show={props.show} clicked={props.modelClosed} />
                <div
                  className={classes.Modal}
                  style={{
                        transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
                        opacity: props.show ? '1' : '0',
                    }}
                >
                    {/* <i className={['fa fa-window-close', classes.Close].join(' ')} onClick={props.modelClosed} aria-hidden="true" /> */}
                    {props.children}
                </div>

        </Fragment>
    )
}

Modal.propTypes = {
    show: PropTypes.bool.isRequired,
    modelClosed: PropTypes.func.isRequired,
}

export default Modal
