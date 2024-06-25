import React, { useState } from "react";

const stars = {
  display: "flex",
  alignItems: "center",
  gap: "16px"
};

const textStyle = {
  fontSize: "25px"
}

const Star = ({fill, onRate, onMouseIn, onMouseOut}) => {
  return (
    <div onClick={onRate} onMouseOver={onMouseIn} onMouseOut={onMouseOut}>
          {fill ? <svg
    fill="#000000"
    width="48px"
    height="48px"
    viewBox="0 0 24 24"
    id="star"
    data-name="Flat Color"
    xmlns="http://www.w3.org/2000/svg"
    className="icon flat-color"
    
  >
    <path
      id="primary"
      d="M22,9.81a1,1,0,0,0-.83-.69l-5.7-.78L12.88,3.53a1,1,0,0,0-1.76,0L8.57,8.34l-5.7.78a1,1,0,0,0-.82.69,1,1,0,0,0,.28,1l4.09,3.73-1,5.24A1,1,0,0,0,6.88,20.9L12,18.38l5.12,2.52a1,1,0,0,0,.44.1,1,1,0,0,0,1-1.18l-1-5.24,4.09-3.73A1,1,0,0,0,22,9.81Z"
      style={{
        fill: "rgb(0, 0, 0)",
      }}
    />
  </svg> : <svg
        fill="#000000"
        width="48px"
        height="48px"
        viewBox="0 0 24 24"
        id="star"
        data-name="Line Color"
        xmlns="http://www.w3.org/2000/svg"
        className="icon line-color"
      >
        <polygon
          id="primary"
          points="12 4 9.22 9.27 3 10.11 7.5 14.21 6.44 20 12 17.27 17.56 20 16.5 14.21 21 10.11 14.78 9.27 12 4"
          style={{
            fill: "none",
            stroke: "rgb(0, 0, 0)",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeWidth: 2,
          }}
        />
      </svg>}
    </div>
  )
}

export const StarRating = ({maxRating = 5}) => {

  const [rating, setRating] = useState(0);
  const [tempRating, setTempRating] = useState(0);


  return (
    <div style={stars}>
      <div style={stars}>
        {Array.from({length: maxRating}, (_, i) => <Star fill={tempRating >= i+1 || rating >= i+1} 
                                            onRate={() => setRating(i+1)}
                                            onMouseIn={() => setTempRating(i+1)}
                                            onMouseOut={() => setTempRating(0)}/>)} 
        <p style={textStyle}>{tempRating || rating || "Rate!"}</p>
      </div>
    </div>
      
    
  )
};
