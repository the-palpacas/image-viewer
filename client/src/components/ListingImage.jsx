import React from 'react';

import ImageMain from './ImageMain.jsx';

const ListingImage = (props) => {

  console.log('ListingImage props', props);

  return (
    <div id="listing-image" data-palette-listing-id="545400033" data-shop-id="13777380">
      <ImageMain imagesArray={props.imagesArray} leftClick={props.leftClick} rightClick={props.rightClick} />
    </div>
  )
}

export default ListingImage;