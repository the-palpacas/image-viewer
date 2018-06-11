import React from 'react';

import ImageWrapper from './ImageWrapper.jsx';

const Main = (props) => {
  return (
    <div className="container-fluid">
      <div className="row .col7 .fix500">
        <ImageWrapper imagesArray={props.imagesArray} />
      </div>
    </div>
  )
}

export default Main;