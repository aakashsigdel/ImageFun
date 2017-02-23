import React from 'react';

import './ImagePicker.scss';

const handleImageChange = (e, setImageURL) => {
  const reader = new FileReader();
  const file = e.target.files[0];

  reader.onloadend = () => setImageURL(reader.result);
  reader.readAsDataURL(file);
};

const ImagePicker = props =>
  <input
    type="file"
    className="image-chooser"
    onChange={(e) => handleImageChange(e, props.setImageURL)}
  />;

export default ImagePicker;

