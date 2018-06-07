import React from 'react';

class ImageCarousel extends React.Component {
  constructor(props) {
    super(props);

    console.log('ImageCarousel props', this.props);

    this.state = {
      imagesArray: this.props.imagesArray,
    };

    // const containerFull = {{margin: '0' 'auto'}};
  }

/* inside image is scaled to 570! <img src="https://img.etsystatic.com/il/6ffc70/1267268056/il_570xN.1267268056_dg8h.jpg?version=0" width="570" alt=""> */

  render() {
    return(
      <ul id="image-carousel" className="p-0 .m-0" style={{ height: '570px', width: '570px' }}>
        {this.state.imagesArray.map((img, index) => {
          if (index === 0) {
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
    )
  }
}
/*
1st li:
<li id="image-0" data-image-index="0" data-full-image-href="https://img.etsystatic.com/il/6ffc70/1267268056/il_fullxfull.1267268056_dg8h.jpg?version=0" data-large-image-href="https://img.etsystatic.com/il/6ffc70/1267268056/il_570xN.1267268056_dg8h.jpg?version=0" data-palette-listing-image="">
  LOCAL:  <img src="./etsy-page_files/il_570xN.1267268056_dg8h.jpg" width="570" alt="">
  actual: <img src="https://img.etsystatic.com/il/6ffc70/1267268056/il_570xN.1267268056_dg8h.jpg?version=0" width="570" alt="">
</li>

next li:
<li id="image-1" data-image-index="1" data-full-image-href="https://img.etsystatic.com/il/8a980c/1295849555/il_fullxfull.1295849555_6r2b.jpg?version=0" data-large-image-href="https://img.etsystatic.com/il/8a980c/1295849555/il_570xN.1295849555_6r2b.jpg?version=0" style="display: none;" data-palette-listing-image="">
  <img src="https://img.etsystatic.com/il/8a980c/1295849555/il_570xN.1295849555_6r2b.jpg?version=0" style="height: 570px; width: 426.686px;">
</li>

// OLD:

<ul id="image-carousel" className="p-0 .m-0" styles={{ height: '570px', width: '570px' }}>
        {this.state.imagesArray.map((img, index) => {
          if (index === 0) {
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

<li id="image-0" data-image-index="0" data-full-image-href="https://img.etsystatic.com/il/6ffc70/1267268056/il_fullxfull.1267268056_dg8h.jpg?version=0" data-large-image-href="https://img.etsystatic.com/il/6ffc70/1267268056/il_570xN.1267268056_dg8h.jpg?version=0" data-palette-listing-image="">
  <img src="./etsy-page_files/il_570xN.1267268056_dg8h.jpg" width="570" alt="">
</li>
*/
/*
1st li:
    <li id="image-0" data-image-index="0" data-full-image-href="https://img.etsystatic.com/il/6ffc70/1267268056/il_fullxfull.1267268056_dg8h.jpg?version=0" data-large-image-href="https://img.etsystatic.com/il/6ffc70/1267268056/il_570xN.1267268056_dg8h.jpg?version=0" data-palette-listing-image="">
      <img src="./etsy-page_files/il_570xN.1267268056_dg8h.jpg" width="570" alt="">
    </li>
etc li:
    <li id="image-1" data-image-index="1" data-full-image-href="https://img.etsystatic.com/il/8a980c/1295849555/il_fullxfull.1295849555_6r2b.jpg?version=0" data-large-image-href="https://img.etsystatic.com/il/8a980c/1295849555/il_570xN.1295849555_6r2b.jpg?version=0" style="display: none;" data-palette-listing-image="">
      <img src="./etsy-page_files/il_570xN.1295849555_6r2b.jpg" style="height: 570px; width: 426.686px;">
    </li>
*/

export default ImageCarousel;