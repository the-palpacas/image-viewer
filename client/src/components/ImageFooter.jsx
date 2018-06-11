import React from 'react';

import Zoom from './Zoom.jsx';

const ImageFooter = (props) => {

  return (
    <div id="image-footer">
      <ul id="circles">
      {props.imagesArray.map((img, index) => {
        return (
          <React.Fragment key={index}>
            <li className="thumbnail-nav circle-selected" data-index={index}>
              <img id={index} src={img.img_src} data-src={img.img_src} alt="" width="75" height="75" onClick={(e) => props.footerClick(e)}></img>
            </li>
          </React.Fragment>
        )
      })}
      </ul>
      <Zoom imgArray={props.imagesArray} targetImg={props.targetImg} />
    </div>
  );
};

export default ImageFooter;
