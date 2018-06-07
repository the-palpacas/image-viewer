import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

import ImageCarousel from './ImageCarousel.jsx';
import Arrows from './Arrows.jsx';
import ImageFooter from './ImageFooter.jsx';

class ListingImage extends React.Component {
  constructor(props) {
    super(props);

    console.log('ImageMain props', props);

    this.state = {
      imagesArray: this.props.imagesArray,
      imageArrayLength: this.props.imagesArray.length,

      /* Carounsel */
      currentImageIndex: 0,

      leftClick: this.props.leftClick,
      rightClick: this.props.rightClick,
    };

    this.carouselMoveLeft = this.carouselMoveLeft.bind(this);
    this.carouselMoveRight = this.carouselMoveRight.bind(this);
    this.leftArrowClicked = this.leftArrowClicked.bind(this);
    this.rightArrowClicked = this.rightArrowClicked.bind(this);
  }

  // shouldComponentUpdate() {
  //   console.log('- - - - - -  shouldComponentUpdate', this.state);
  // }

  /* Carousel Methods */
  carouselMoveLeft() {
    console.log('--- carouselMoveLeft called');

    if (this.state.currentImageIndex < this.state.imageArrayLength - 1) {
      const newIndex = this.state.currentImageIndex + 1;

      console.log('--------- newIndex', newIndex);

      this.setState({
        currentImageIndex: newIndex,
      });
    } else {
      console.log('--------- newIndex', 0);

      this.setState({
        currentImageIndex: 0,
      });
    }
  }

  carouselMoveRight() {
    console.log('--- carouselMoveRight called');
    if (this.state.currentImageIndex === 0) {
      const nextIndex = this.state.imageArrayLength - 1;
      console.log('--------- newIndex', nextIndex);

      this.setState({
        currentImageIndex: nextIndex,
      });
    } else {
      const newIndex = this.state.currentImageIndex - 1;
      console.log('--------- newIndex', newIndex);

      this.setState({
        currentImageIndex: newIndex,
      });
    }
  }

  /* Arrow Methods */
  leftArrowClicked(event) {
    event.preventDefault();

    console.log('L btn clicked');

    this.carouselMoveLeft();
  }
  rightArrowClicked(event) {
    event.preventDefault();

    console.log('R btn clicked');

    this.carouselMoveRight();
  }

  render() {
    return (
      <div id="listing-image" >
        <div className="image-main">
          <ImageCarousel currentImageIndex={this.state.currentImageIndex} imagesArray={this.state.imagesArray} />
          <Arrows leftClick={this.leftArrowClicked} rightClick={this.rightArrowClicked} />
          <ImageFooter imagesArray={this.state.imagesArray} />
        </div>
      </div>
    );
  }
}

/*
<div id="listing-image" >
  <div className="image-main">
    <ImageCarousel imagesArray={this.state.imagesArray} leftClick={this.state.leftClick} rightClick={this.state.rightClick} />
    <Arrows imagesArray={this.state.imagesArray} leftClick={this.state.leftClick} rightClick={this.state.rightClick} />
    <ImageFooter imagesArray={this.state.imagesArray} />
  </div>
</div>



<div id="listing-image" >
        <div className="image-main">
          <ImageCarousel imagesArray={props.imagesArray} leftClick={props.leftClick} rightClick={props.rightClick} />
          <Arrows imagesArray={props.imagesArray} leftClick={props.leftClick} rightClick={props.rightClick} />
        </div>
        <div className="image-footer">
          <ImageFooter imagesArray={props.imagesArray} />
          + Footer / Circles 
        </div
*/

export default ListingImage;