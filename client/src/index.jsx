import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import ImageViewer from './components/ImageViewer.jsx';

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

  // fetchAllImages() {
  //   axios.get('/getAllImagesFromDb')
  //   .then(res => {
  //     console.log('client index, axios get, records res.data', res.data);

  //     this.setState({
  //       imagesLoaded: true,
  //       images: res.data
  //     });
  //   },
  //   (error) => {
  //     this.setState({
  //       imagesLoaded: false,
  //       error: error,
  //     });
  //   })
  //   .then(() => {
  //     console.log('client index componentDidMount state:', this.state);
  //     this.createImagesByProductId();
  //     console.log('imagesByProductId', this.state.imagesByProductId);
  //     console.log('imagesByProductId[0]', this.state.imagesByProductId[0]);
  //   })
  //   .catch((error) => {
  //     console.log('client index componentDidMount got error:', error);
  //   });
  // }

  // TODO: this is temp b/c will have page per product so
  //       won't have to parse whole list into object
  // createImagesByProductId() {
  //   // for each
  //   var prodObject = {};
  //   this.state.images.map(img => {
  //     prodObject[productId] = productObj[productId] || [];
  //     prodObject[productId].push(img.img_src);
  //   });
  //   console.log('prodObject', prodObject);

  //   return prodObject;
  // }

  createImagesByProductId(images) {
    let productObj = {};

    console.log('images', images);

    images.map(o => {
     productObj[o.product_id] = productObj[o.product_id] || [];
      productObj[o.product_id].push({ 'img_src': o.img_src });
    });

    console.log('productObj', productObj);

    return productObj;
  }

  // createImagesByProductId() {
  //   // for each
  //   var arr2 = this.state.images.map(img => {
  //     let productId = img.product_id;
  //     this.state.imagesByProductId[productId] = this.state.imagesByProductId[productId] || [];
  //     return this.state.imagesByProductId[productId].push(img.img_src);
  //   });
  //   // this.forceUpdate();
  //   console.log('arr2', arr2);
  // }

  render() {
    const { imagesLoaded, imagesByProductId, error } = this.state;
    if (error) {
      return (
        <div>Got error</div>
      )
    } else if (imagesLoaded && imagesByProductId) {
      const { firstRow } = this.state.imagesByProductId[0];
      return (
        // {console.log('0', this.state.imagesByProductId[0])}
        // his.state.imagesByProductId.0 unexpected token '.'
        //<ImageViewer images={this.state.imagesByProductId[0]} />
        //{
          //const [firstRow] = this.state.imagesByProductId[0];
          <ImageViewer imagesArray={this.state.imagesByProductId[0]} />
        //}
      );
    } else {
      return (
        <div>data not loaded & no error</div>
      );
    }
  }

// <ImageViewer images={this.state.imagesByProductId[0]} />
// renders all images from db
  // render() {
  //   const { imagesLoaded, images, error } = this.state;
  //   if (imagesLoaded) {
  //     return (
  //       <div>
  //       {images.map((image, index) => (
  //         <div key={index}>
  //           <img async src={image.img_src} width="570" />
  //         </div>
  //       ))}
  //       </div>
  //     );
  //   } else if(error){
  //     return (<div>error: {this.state.error}</div>);
  //   } else {
  //     return (<div>else</div>);
  //   }
  // }
}

ReactDOM.render(<App />, document.getElementById('app'));