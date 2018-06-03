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

    this.fetchAllImages = this.fetchAllImages.bind(this);
    // this.fetchSingleImage = this.fetchSingleImage.bind(this);
  }

  // runs after the component output has been rendered to the DOM
  componentDidMount(){
  	this.fetchAllImages();
  }

  // fetchSingleImage() {
  //   axios.request({
  //     responseType: 'arraybuffer',
  //     url: '/getAllImages',
  //     method: 'get',
  //     headers: {
  //       'Content-Type': 'image/jpeg',
  //     },
  //   }).then((result) => {
  //     console.log('result.data', result.data);
  //     this.setState({
  //       image: result.data
  //     });
  //   })
  //   .catch((error) => {
  //     console.log(error);
  //     console.log('client index componentDidMount got error 2:', error);
  //   });
  // }

  fetchAllImages() {
  	axios.get('/getAllImages')
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

  render() {
    const { imagesLoaded, images, error } = this.state;
    if (imagesLoaded) {
      return (
        <div>
        {images.map((image, index) => (
          <div key={index}>
            <img src={image.img_src} width="570" />
          </div>
        ))}
        </div>
      );
    } else if(error){
      return (<div>error: {this.state.error}</div>);
    } else {
      return (<div>else</div>);
    }
  }
  // render() {
  //   if(this.state.imagesLoaded) {
  //     return (<div>loaded</div>) 
  //   } else if(this.state.error){
  //     return (<div>error: {this.state.error}</div>)
  //   } else {
  //     return (<div>else</div>)
  //   }
  // }
}

ReactDOM.render(<App />, document.getElementById('app'));