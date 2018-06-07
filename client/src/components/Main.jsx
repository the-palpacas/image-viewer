import React from 'react';

import ImageWrapper from './ImageWrapper.jsx';
// import ImageFooter from './ImageFooter.jsx';

const Main = (props) => {

  console.log('ImageWrapper props', props);

  // const borderStyle = {border: '2px' 'dotted' 'red'}; backgroundColor: 'gray'
    const backgroundColor = {backgroundColor: '#e1e3e8'};
    const borderRed = {border: 'solid', color: 'red'};
    const borderGreen = {border: 'solid', color: 'green'};
    const borderBlue = {border: 'solid', color: 'blue'};
    const borderDashedBlack = {border: '1px dashed black'};
    const borderDashedBlue = {border: '4px dotted blue'};

    const bgColorRed = {backgroundColor: 'red'};
    const bgColorPink = {backgroundColor: 'pink'};

  return (
    <div className="container-fluid" style={borderGreen}>
      <div className="row .col7 .fix500" style={borderDashedBlack}>
        <ImageWrapper imagesArray={props.imagesArray} />
      </div>
    </div>
  )
}
/*
<div className="row" style={borderBlue}>
        <div className="col .col-xl-4" style={backgroundColor}>
          <div className="row" style={bgColorRed}>Comments</div>

          <div className="row .col-xl-4" style={borderDashedBlue}>
             <ImageFooter imagesArray={props.imagesArray} />
            { Footer / Circles | zoom }
          </div>

.col-xl-4 {
    -ms-flex: 0 0 33.333333%;
    flex: 0 0 33.333333%;
    max-width: 33.333333%}

.offset-lg-4 {
    margin-left: 33.333333%}

.container {
    min-width: 992px!important;
}
.container {
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
}
.container-fluid {
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
}

    <div className="container-full .m-0 .p-0" style={borderGreen}>
      <div className="row .m-0" style={borderBlue}>
        <div className="col .m-0 .co33" style={backgroundColor}>
          <div className="row .m-0" style={borderDashed}>Comments</div>
        
          <div className="row .m-0 .col7 .fix500" style={borderBlue}>

            <ImageWrapper imagesArray={props.imagesArray} leftClick={props.leftClick} rightClick={props.rightClick} />
          </div>
          <div className="row .m-0 .col33" style={borderDashed}>Carousel</div>
        </div>
      </div


    <div className="container-full .m-0 .p-0" style={borderGreen}>
      <div className="row .m-0" style={borderBlue}>
        <div className="col-4 .m-0 .float-left" style={backgroundColor}></div>
        <div className="col .float-none .position-absolute" style={borderRed} >
          <div className="row .m-0" style={borderDashed}>Comment</div>
          <div className="row .m-0" style={borderDashed}>
            <ListingImage imagesArray={props.imagesArray} leftClick={props.leftClick} rightClick={props.rightClick} />
          </div>
          <div className="row .m-0" style={borderDashed}>Carousel</div>
        </div>
        <div className="col-4 .m-0 .float-right" style={backgroundColor}></div>
      </div>
    </div>

    <div className="container-full .m-0 .p-0" style={borderGreen}>
      <div className="row .m-0" style={borderBlue}>
        <div className="col-4 .m-0 .float-left" style={backgroundColor}></div>
        <div className="col-4 .float-none .position-absolute" style={borderRed} >
          <div className="row .m-0" style={borderDashed}>Comment</div>
          <div className="row .m-0" style={borderDashed}>
            <ListingImage imagesArray={props.imagesArray} leftClick={props.leftClick} rightClick={props.rightClick} />
          </div>
          <div className="row .m-0" style={borderDashed}>Carousel</div>
        </div>
        <div className="col-4 .m-0 .float-right" style={backgroundColor}></div>
      </div>
    </div>
*/

export default Main;