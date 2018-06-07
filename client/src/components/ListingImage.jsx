import React from 'react';

import ImageCarousel from './ImageCarousel.jsx';
import Arrows from './Arrows.jsx';

const ListingImage = (props) => {

  console.log('ImageMain props', props);

    return (
      <div id="listing-image" >
        <div className="image-main">
          <ImageCarousel imagesArray={props.imagesArray} leftClick={props.leftClick} rightClick={props.rightClick} />
          <Arrows magesArray={props.imagesArray} leftClick={props.leftClick} rightClick={props.rightClick} />
        </div>
        <div className="image-footer">
          {/* Footer / Circles */}
        </div>
      </div>
    )
}

export default ListingImage;