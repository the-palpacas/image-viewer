import React from 'react';

const Arrows = (props) => {

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

export default Arrows;
