import React from "react";

const ReviewStar = ({number}) => {
  return (
    <>
      <input  className="rating__input" id={`star-${number}`} type="radio" name="rating" value={number}/>
      <label className="rating__label" htmlFor={`star-${number}`}>Rating {number}</label>
    </>
  );
}

export default ReviewStar;
