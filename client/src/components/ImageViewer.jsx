import React from 'react';
// const { array } = React.PropTypes;
// import PropTypes from 'proto-types';

import ImageMain from './ImageMain.jsx';

class ImageViewer extends React.Component {
  constructor(props) {
    super(props);

    console.log('ImageViewer props', this.props);

    this.state = {
      isMounted: false,
      imagesArray: [],
    };
  }

  componentDidMount() {
    this.setState({
      isMounted: true,
      imagesArray: this.props.imagesArray,
    });
// {img_src: "https://s3.amazonaws.com/etsy-page-images/0/0-beach-zoom.jpg"}    
  }

  render() {
    const { isMounted, imagesArray } = this.state;
    if (isMounted && imagesArray) {
      return (
        <ImageMain imagesArray={this.state.imagesArray} />
      )
    } else {
      return (
        <div>either didn't mount or no images</div>
      )
    }
  }

  //   render() {
  //   const { isMounted, imagesArray } = this.state;
  //   if (isMounted && imagesArray) {
  //     return (
  //       <div>{this.state.imagesArray.map((img, index) =>{
  //         return <img key={index} src={img.img_src} alt="" />
  //       })}</div>
  //     )
  //   } else {
  //     return (
  //       <div>either didn't mount or no images</div>
  //     )
  //   }
  // }
}
/*
<!-- START image-main -->
<div id="image-main">
  <ul id="image-carousel" style="height: 570px;">
    <li id="image-0" data-image-index="0" data-full-image-href="https://img.etsystatic.com/il/6ffc70/1267268056/il_fullxfull.1267268056_dg8h.jpg?version=0" data-large-image-href="https://img.etsystatic.com/il/6ffc70/1267268056/il_570xN.1267268056_dg8h.jpg?version=0" data-palette-listing-image="">
      <img src="./etsy-page_files/il_570xN.1267268056_dg8h.jpg" width="570" alt="">
    </li>
    <li id="image-1" data-image-index="1" data-full-image-href="https://img.etsystatic.com/il/8a980c/1295849555/il_fullxfull.1295849555_6r2b.jpg?version=0" data-large-image-href="https://img.etsystatic.com/il/8a980c/1295849555/il_570xN.1295849555_6r2b.jpg?version=0" style="display: none;" data-palette-listing-image="">
      <img src="./etsy-page_files/il_570xN.1295849555_6r2b.jpg" style="height: 570px; width: 426.686px;">
    </li>
    ...
  </ul>

  <div id="image-left-arrow-container" class="image-arrow-box-container">
    <button id="image-left-arrow" class="image-arrow-box" aria-label="Previous image">
      <div class="arrow">◅</div>
    </button>
  </div>
  <div id="image-right-arrow-container" class="image-arrow-box-container">
    <button id="image-right-arrow" class="image-arrow-box" aria-label="Next image">
      <div class="arrow">▻</div>
    </button>
  </div>
</div>
<!-- END image-main -->
<!-- START image-footer ->
<div id="image-footer">
  <ul id="circles">
    <li class="thumbnail-nav circle-selected" data-index="0">
      <img src="./etsy-page_files/il_75x75.1267268056_dg8h.jpg" data-src="https://img.etsystatic.com/il/6ffc70/1267268056/il_75x75.1267268056_dg8h.jpg?version=0" alt="" width="75" height="75">
    </li>
    <li class="thumbnail-nav " data-index="1">
      <img src="./etsy-page_files/il_75x75.1295849555_6r2b.jpg" data-src="https://img.etsystatic.com/il/8a980c/1295849555/il_75x75.1295849555_6r2b.jpg?version=0" alt="" width="75" height="75">
    </li>
    ...
  </ul>
  <a id="zoom" href="https://img.etsystatic.com/il/6ffc70/1267268056/il_fullxfull.1267268056_dg8h.jpg?version=0" target="_blank">
    <span class="ss-icon">🔎</span>zoom
  </a>
</div>
*/

// ImageViewer.propTypes = {
//   images: PropTypes.array.isRequired
// };

// ImageViewer.propTypes = {
//   images: React.PropTypes.array.isRequired
// };

// ImageViewer.propTypes = {
//   images: React.PropTypes.array.isRequired,
// };

//         // {this.state.images.forEach((img) => {
//   <img async src={img.img_src} width="570" alt="" />
// })}

export default ImageViewer;
