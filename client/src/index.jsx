import React from 'react';
import ReactDOM from 'react-dom'
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    	imagesLoaded: false,
    	images: [],
    	error: '',
      image: null
    }

    this.fetchImages = this.fetchImages.bind(this);
    this.fetchSingleImage = this.fetchSingleImage.bind(this);
  }

  // runs after the component output has been rendered to the DOM
  componentDidMount(){
  	this.fetchImages();
  }

  fetchSingleImage() {
    axios.request({
      responseType: 'arraybuffer',
      url: '/images',
      method: 'get',
      headers: {
        'Content-Type': 'image/jpeg',
      },
    }).then((result) => {
      console.log('result.data', result.data);
      this.setState({
        image: result.data
      });
    })
    .catch((error) => {
      console.log(error);
      console.log('client index componentDidMount got error 2:', error);
    });
  }

  fetchImages() {
  	axios.get('/images')
    .then(res => {
    	console.log('client index, axios get, records res.data', res.data);

      this.setState({
      	imagesLoaded: true,
      	images: res.data
      });
    },
    (error) => {
    	this.setState({
      	imagesLoaded: false,
      	error: error
      });
    })
    .then(() => {
    	console.log('client index componentDidMount state:', this.state);
    })
    .catch((error) => {
      console.log('client index componentDidMount got error:', error);
    });
  }

  componentWillUnmount() {

  }

  // {id: 1, desciption: "image 1", src: "https://s3.amazonaws.com/etsy-page-images/img-2.jpg"}
  render() {
    const { error, imagesLoaded, images } = this.state;
    if(imagesLoaded) {
      return (
        this.state.images.map(img => {
          return <div key={img.id}><img src={img.src} alt={img.desciption}></img></div>
        })
      )
    } else {
      return (
        <div><h2>something went wrong ...</h2></div>
      )
    }
  }
}

ReactDOM.render(<App />, document.getElementById('app'));