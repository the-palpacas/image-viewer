import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import Main from './components/Main.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imagesLoaded: false,     
      images: [],
      imagesByProductId: {},
      error: '',
      image: null,
    };

    this.createImagesByProductId = this.createImagesByProductId.bind(this);
  }

  componentDidMount() {
    axios.get('/getAllImagesFromDb')
    .then(res => {
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
      console.log('client/index.js/componentDidMount.then() - imagesByProductId[0]', this.state.imagesByProductId[0]);
    })
    .catch((error) => {
      console.log('got error retrieveing images: ', error);
    });
  }

  createImagesByProductId(images) {
    let productObj = {};

    images.map(o => {
     productObj[o.product_id] = productObj[o.product_id] || [];
      productObj[o.product_id].push({ 'img_src': o.img_src });
    });

    return productObj;
  }

  render() {
    const { imagesLoaded, imagesByProductId, error } = this.state;
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

ReactDOM.render(<App />, document.getElementById('app'));