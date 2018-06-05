import React from 'react';

import ListingImage from './ListingImage.jsx';

const ImageWrapper = (props) => {

  console.log('ImageWrapper props', props);

  return (
    <div className="image-wrapper">
      <ListingImage imagesArray={props.imagesArray} leftClick={props.leftClick} rightClick={props.rightClick} />
    </div>
  )
}

export default ImageWrapper;