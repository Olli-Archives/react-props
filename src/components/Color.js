import React from 'react';
import PropTypes from 'prop-types';

export default function Color({ name, hex, red, green, blue }){
  return (
    <ul>
      <li>{name}</li>
      <li>{hex}</li>
      <li>red:{red}</li>
      <li>green:{green}</li>
      <li>blue:{blue}</li>
    </ul>
   
  );
}

Color.propTypes = {
  name: PropTypes.string.isRequired,
  hex: PropTypes.string.isRequired,
  red: PropTypes.number.isRequired,
  green: PropTypes.number.isRequired,
  blue: PropTypes.number.isRequired
}
;

