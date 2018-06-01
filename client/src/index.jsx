import React from 'react';
import ReactDOM from 'react-dom'
import axios from 'axios';
// import dummyImg from '../../public/img/dummy-images.js';

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
  	// fetchImages().then(response => {
   //    this.setState({
   //      images: response.images
   //    });
   //  });
  	//this.fetchImages();
    this.fetchSingleImage();
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
      // const outputFilename = '/images/img1.jpg';
      // fs.writeFileSync(outputFilename, result.data);
      // return outputFilename;
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

/*
  fetchSingleImage() {
    axios.get('/images')
    .then(response => {
        var foo = response.data.forms[0].name;
        console.log('foo', foo);

        console.log('res.data', response.data);
        //pokemonImage.src = response.data.sprites.front_default;
        this.setState({
          imagesLoaded: true,
          image: response.data.sprites.front_default
        });
    },
    (error) => {
      console.log('client index componentDidMount got error 1:', error);
      this.setState({
        imagesLoaded: false,
        error: error
      });
    })
    .then(() => {
      console.log('client index componentDidMount state:', this.state);
    })
    .catch((error) => {
      console.log(error);
      console.log('client index componentDidMount got error 2:', error);
    });
  }
*/
  fetchImages() {
  	axios.get('/images')
    // .then(res => {
    // 	return res.json();
    // })
    .then(res => {
    	console.log('client index, axios get, records', res);

      this.setState({
      	imagesLoaded: true,
      	images: res
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

  // see full-stack-review /client/src/index.jsx
  render() {
  	const { error, imagesLoaded, images } = this.state;
  	return(<div><img src="/images" alt="MDN"></img>></div>)
  }
}

ReactDOM.render(<App />, document.getElementById('app'));