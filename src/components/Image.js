import React from 'react';

import './Image.scss';

const Image = props =>
  <img src={props.imageURL} className={props.actions}/>;

export default Image;
