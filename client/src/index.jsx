import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

// import Bootstrap from 'bootstrap/dist/css/bootstrap.css';

import Main from './components/Main.jsx';

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

    this.createImagesByProductId = this.createImagesByProductId.bind(this);
  }

  // runs after the component output has been rendered to the DOM
  componentDidMount() {
    axios.get('/getAllImagesFromDb')
    .then(res => {
      console.log('client index, axios get, records res.data', res.data);

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
      console.log('componentDidMount.then() - client index componentDidMount state:', this.state);
      console.log('componentDidMount.then() - imagesByProductId', this.state.imagesByProductId);
      console.log('componentDidMount.then() - imagesByProductId[0]', this.state.imagesByProductId[0]);
    })
    .catch((error) => {
      console.log('componentDidMount.catch(error) - client index componentDidMount got error:', error);
    });
  }

  createImagesByProductId(images) {
    let productObj = {};

    console.log('images', images);

    images.map(o => {
     productObj[o.product_id] = productObj[o.product_id] || [];
      productObj[o.product_id].push({ 'img_src': o.img_src });
    });

    console.log('- Index productObj', productObj);

    return productObj;
  }

  render() {
    const { imagesLoaded, imagesByProductId, error } = this.state;
    console.log('App/render() imagesByProductId[0]', imagesByProductId[0]);

    if (error) {
      return (
        <div>Got err: {error}</div>
      );
    } else if (imagesLoaded && imagesByProductId) {
      return (
        <div>
          {/* TODO: need to impl /:imageId and use that instead if '0' */}
          <Main imagesArray={imagesByProductId[0]} />
        </div>
      );
    } else {
      return (
        <div>data not loaded & no error</div>
      );
    }
  }
}

/*
<Main leftClick={this.listenLeftButtonClick} rightClick={this.listenRigtButtonClicked} imagesArray={imagesByProductId[0]} />
*/

ReactDOM.render(<App />, document.getElementById('app'));