import React from 'react';
import PropTypes from 'prop-types';

export default function Dog({ name, age, weight }){
  return (
    <ul>
      <li>name:{name}</li>
      <li>age:{age}</li>
      <li>weight:{weight}</li>
    </ul>
  );
}

Dog.propTypes = {
  name: PropTypes.string.isRequired,
  age: PropTypes.number.isRequired,
  weight: PropTypes.string
}
;