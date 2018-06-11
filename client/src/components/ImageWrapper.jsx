import React from 'react';

import ListingImage from './ListingImage.jsx';

const ImageWrapper = (props) => {

  return (
    <div className="image-wrapper">
      <ListingImage imagesArray={props.imagesArray} />
    </div>
  )
}

export default ImageWrapper;
