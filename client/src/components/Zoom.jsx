import React from 'react';

const Zoom = (props) => {

  return(
    <a id="zoom" href={props.imgArray[props.targetImg].img_src} target="_blank">
      <span style={{ border: '4px dotted blue' }}><span className="ss-icon">🔎</span><span className="zoom-text">Zoom</span></span>
    </a>
  );
};
/*
<a id="zoom" href="https://img.etsystatic.com/il/6ffc70/1267268056/il_fullxfull.1267268056_dg8h.jpg?version=0" target="_blank">
            <span class="ss-icon">🔎</span>zoom
            "zoom
        "
        </a>
*/

export default Zoom;
