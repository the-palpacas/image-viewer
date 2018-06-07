import React from 'react';

import ListingImage from './ListingImage.jsx';

const ImageWrapper = (props) => {

  console.log('ListingImage props', props);

  const borderBlue = { border: 'solid', color: 'blue' };

  return (
    <div className="image-wrapper" style={borderBlue}>
      <ListingImage imagesArray={props.imagesArray} leftClick={props.leftClick} rightClick={props.rightClick} />
    </div>
  )
}

export default ImageWrapper;
