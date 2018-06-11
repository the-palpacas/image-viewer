import React from 'react';

const Zoom = (props) => {

  return(
    <a id="zoom" href={props.imgArray[props.targetImg].img_src} target="_blank">
      <span><span className="ss-icon">🔎</span><span className="zoom-text">Zoom</span></span>
    </a>
  );
};

export default Zoom;
