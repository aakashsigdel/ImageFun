import React from 'react';

import './Image.scss';

const Image = props => {
  console.log(props.actions)
  return <img src={props.imageURL} className={props.actions}/>;
}

export default Image;
