import React from 'react';

const ImagePreview = ({ imageUrl }) => {
  const defaultImage = '/default-image.png'; // Replace with your default image path
  return (
    <div>
      <img
        src={imageUrl || defaultImage}
        alt="Preview"
        style={{ maxWidth: '300px', maxHeight: '300px' }}
      />
    </div>
  );
};

export default ImagePreview;