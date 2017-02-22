import React from 'react';

const handleImageChange = (e, setImageURL) => {
  // e.preventDefault();

  const reader = new FileReader();
  const file = e.target.files[0];

  reader.onloadend = () => setImageURL(reader.result);
  reader.readAsDataURL(file);
};

const ImagePicker = props =>
  <input type="file" onChange={(e) => handleImageChange(e, props.setImageURL)} />;

export default ImagePicker;

