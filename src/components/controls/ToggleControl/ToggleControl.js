import React from 'react';
import PropTypes from 'prop-types';
import Classes from './ToggleControl.module.css';

function ToggleControl(props) {
  const { label, checked } = props;

  return (
    <label className={Classes.Toggle}>
      <input type="checkbox" name={label} value="true" defaultChecked={checked ? 'checked' : ''} />
      <span className={Classes.Slider} />
    </label>
  );
}

ToggleControl.propTypes = {
  label: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
};

export default ToggleControl;
