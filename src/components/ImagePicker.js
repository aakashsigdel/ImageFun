import React from 'react';

import './ImagePicker.scss';

const handleImageChange = (e, setImageURL, reset) => {
  const reader = new FileReader();
  const file = e.target.files[0];

  reader.onloadend = () => {
    setImageURL(reader.result);
    reset();
  }
  reader.readAsDataURL(file);
};

const ImagePicker = props =>
  <input
    type="file"
    className="image-chooser"
    onChange={(e) => handleImageChange(e, props.setImageURL, props.reset)}
  />;

export default ImagePicker;

