import React from 'react';

import './Image.scss';
import defaultImage from '../../images/placeholder.png';

const Image = props =>
  <div className="image-container">
    <img
      src={props.imageURL ? props.imageURL : defaultImage}
      className={'image ' + props.actions}
    />
  </div>;

export default Image;
