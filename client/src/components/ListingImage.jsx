import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

import ImageCarousel from './ImageCarousel.jsx';
import Arrows from './Arrows.jsx';
import ImageFooter from './ImageFooter.jsx';

class ListingImage extends React.Component {
  constructor(props) {
    super(props);

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
    this.footerClick = this.footerClick.bind(this);
  }

  /* Carousel Methods */
  carouselMoveLeft() {
    if (this.state.currentImageIndex < this.state.imageArrayLength - 1) {
      const newIndex = this.state.currentImageIndex + 1;
      this.setState({
        currentImageIndex: newIndex,
      });
    } else {
      this.setState({
        currentImageIndex: 0,
      });
    }
  }

  carouselMoveRight() {
    if (this.state.currentImageIndex === 0) {
      const nextIndex = this.state.imageArrayLength - 1;
      this.setState({
        currentImageIndex: nextIndex,
      });
    } else {
      const newIndex = this.state.currentImageIndex - 1;
      this.setState({
        currentImageIndex: newIndex,
      });
    }
  }

  /* Arrow Methods */
  leftArrowClicked(event) {
    event.preventDefault();
    this.carouselMoveLeft();
  }
  rightArrowClicked(event) {
    event.preventDefault();
    this.carouselMoveRight();
  }

  /* Footer methods */
  footerClick(event) {
    event.preventDefault();
    const displayImageIndex = Number(event.target.id);
    this.setState({
        currentImageIndex: displayImageIndex,
    });
  }

  render() {
    return (
      <div id="listing-image" >
        <div className="image-main">
          <ImageCarousel currentImageIndex={this.state.currentImageIndex} imagesArray={this.state.imagesArray} />
          <Arrows leftClick={this.leftArrowClicked} rightClick={this.rightArrowClicked} />
          <ImageFooter imagesArray={this.state.imagesArray} footerClick={this.footerClick} targetImg={this.state.currentImageIndex} />
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