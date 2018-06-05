import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import ImageWrapper from './components/ImageWrapper.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imagesLoaded: false,
// {id: 3, product_id: 0, img_src: "https://s3.amazonaws.com/etsy-page-images/0/0-beach-zoom.jpg"}      
      images: [],
// 0: [ "https://s3....", "https://s3...." ]
// 1: [ "https://s3....", "https://s3...." ]
      imagesByProductId: {},
      error: '',
      image: null,
    };

    // this.fetchAllImages = this.fetchAllImages.bind(this);
    this.createImagesByProductId = this.createImagesByProductId.bind(this);
    this.listenLeftButtonClick = this.listenLeftButtonClick.bind(this);
    this.listenRigtButtonClicked = this.listenRigtButtonClicked.bind(this);
    this.shiftProductObj = this.shiftProductObj.bind(this);
  }

  // runs after the component output has been rendered to the DOM
  componentDidMount() {
    // this.fetchAllImages();
    axios.get('/getAllImagesFromDb')
    .then(res => {
      console.log('client index, axios get, records res.data', res.data);

      // this.createImagesByProductId();

// [{id: 3, product_id: 0, img_src: "https://s3.amazonaws.com/etsy-page-images/0/0-beach-zoom.jpg"},...]


      this.setState({
        imagesLoaded: true,
        images: res.data,
        imagesByProductId: this.createImagesByProductId(res.data),
      });

    },
    (error) => {
      this.setState({
        imagesLoaded: false,
        error: error,
      });
    })
    .then(() => {
      console.log('client index componentDidMount state:', this.state);
      // this.createImagesByProductId();
      console.log('imagesByProductId', this.state.imagesByProductId);
      console.log('imagesByProductId[0]', this.state.imagesByProductId[0]);
    })
    .catch((error) => {
      console.log('client index componentDidMount got error:', error);
    });
  }

  createImagesByProductId(images) {
    let productObj = {};

    console.log('images', images);

    images.map(o => {
     productObj[o.product_id] = productObj[o.product_id] || [];
      productObj[o.product_id].push({ 'img_src': o.img_src });
    });

    console.log('INDEX productObj', productObj);

    return productObj;
  }

  shiftProductObj(direction, object) {
    var keysArr = Object.keys(object);
    var obj = Object.assign({}, object);

    if(keysArr.length > 1) {
        console.error('shiftProductObj only works with one image object ... 1 key');
    }

    const imgArragy = obj[keysArr[0]];

    if(direction === 'l') { // take 1st and put last 
        var firstObj = imgArragy.shift();
        imgArragy.push(firstObj);
    } else { // take  last and put first 
        var lastObj = imgArragy.pop();
        imgArragy.unshift(lastObj);
    }

    var returObj = {};
    returObj[keysArr[0]] = imgArragy;

    return returObj;
  }

  listenLeftButtonClick(event) {
    event.preventDefault();

    console.log('L button clicked');

    this.moveLeft();
  }

  moveLeft() {
    const shiftedObj = this.shiftProductObj('l', this.state.imagesByProductId);
    this.setState({
      imagesByProductId: shiftedObj,
    });
  }

  listenRigtButtonClicked(event) {
    event.preventDefault();

    console.log('R button clicked');

    this.moveRight();
  }

  moveRight() {
    const shiftedObj = this.shiftProductObj('r', this.state.imagesByProductId); 
    this.setState({
      imagesByProductId: shiftedObj,
    });
  }

  render() {
    const { imagesLoaded, imagesByProductId, error } = this.state;
    console.log('App/render() imagesByProductId[0]', imagesByProductId[0]);

    if (error) {
      return (
        <div>Got err: {error}</div>
      )
    } else if (imagesLoaded && imagesByProductId) {
      // const { firstRow } = this.state.imagesByProductId[0];
      return (
        <div>
          <ImageWrapper leftClick={this.listenLeftButtonClick} rightClick={this.listenRigtButtonClicked} imagesArray={imagesByProductId[0]} />
        </div>
      );
    } else {
      return (
        <div>data not loaded & no error</div>
      );
    }
  }
}

ReactDOM.render(<App />, document.getElementById('app'));