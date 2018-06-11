import React from 'react';

const ImageCarousel = (props) => {

  return (
    <ul id="image-carousel" className="p-0" style={{ width: '570px' }}>
        {props.imagesArray.map((img, index) => {
          if (index === props.currentImageIndex) {
            return (
              <React.Fragment key={index}>
                <li id={`image-${index}`} data-image-index={index} data-full-image-href={img.img_src} data-large-image-href={img.img_src} data-palette-listing-image="">
                  <img src={img.img_src} width="570" alt=""></img>
                </li>
              </React.Fragment>
            )
          }
          return (
            <React.Fragment key={index}>
              <li id={`image-${index}`} data-image-index={index} data-full-image-href={img.img_src} data-large-image-href={img.img_src} style={{ display: 'none' }} data-palette-listing-image="">
                <img src={img.img_src} style={{ height: '570px', width: '436.686px' }} alt=""></img>
              </li>
            </React.Fragment>
          )
        })}
      </ul>
  );
};

export default ImageCarousel;
