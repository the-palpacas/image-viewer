import React from 'react';

const Arrows = (props) => {

  console.log(' -> Arrows props', props);

    return (
      <div>
        <div id="image-left-arrow-container" className="image-arrow-box-container">
          <button id="image-left-arrow" className="image-arrow-box" aria-label="Previous image" onClick={props.leftClick} >
            <div className="arrow">◅</div>
          </button>
        </div>
        <div id="image-right-arrow-container" className="image-arrow-box-container" >
          <button id="image-right-arrow" className="image-arrow-box" aria-label="Next image" onClick={props.rightClick}>
            <div className="arrow">▻</div>
          </button>
        </div>
      </div>
    )
}

/*
.image-arrow-box-container {
    position: absolute;
    top: 0%;
    height: 100%;
}

#image-left-arrow {
    border-radius: 0 3px 3px 0;
}

.image-arrow-box {
    border: none;
    background: #97928F;
    opacity: 0.4;
    filter: alpha(opacity=40);
    margin-top: auto;
    height: 80px;
    line-height: 86px;
    width: 40px;
    font-size: 24px;
    position: absolute;
    top: 50%;
    margin-top: -40px;
    font-family: "SSStandard";
    font-style: normal;
    font-weight: normal;
    text-decoration: none;
    text-rendering: optimizeLegibility;
    white-space: nowrap;
    -moz-font-feature-settings: "liga=1";
    -moz-font-feature-settings: "liga";
    -ms-font-feature-settings: "liga" 1;
    -o-font-feature-settings: "liga";
    font-feature-settings: "liga";
    -webkit-font-smoothing: antialiased;
    color: #F2F1F1;
    transition: all 0.1s;
    -webkit-transition: all 0.1s;
    -moz-transition: all 0.1s;
}


<div id="image-left-arrow-container" class="image-arrow-box-container">
  <button id="image-left-arrow" class="image-arrow-box" aria-label="Previous image">
    <div class="arrow">◅</div>
  </button>
</div>
<div id="image-right-arrow-container" class="image-arrow-box-container">
  <button id="image-right-arrow" class="image-arrow-box" aria-label="Next image">
    <div class="arrow">▻</div>
  </button>
</div>

*/

export default Arrows;
