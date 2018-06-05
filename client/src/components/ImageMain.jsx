import React from 'react';

import ImageCarousel from './ImageCarousel.jsx';
import Arrows from './Arrows.jsx';

const ImageMain = (props) => {

  console.log('ImageMain props', props);

    return (
      <div id="image-main">
          <ImageCarousel imagesArray={props.imagesArray} leftClick={props.leftClick} rightClick={props.rightClick} />
          <Arrows magesArray={props.imagesArray} leftClick={props.leftClick} rightClick={props.rightClick} />
      </div>
    )
}

export default ImageMain;