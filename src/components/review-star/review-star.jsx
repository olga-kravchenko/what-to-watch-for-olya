import React from "react";
import PropTypes from "prop-types";

const ReviewStar = ({number}) => {
  return (
    <>
      <input className="rating__input" id={`star-${number}`} type="radio" name="rating" value={number}/>
      <label className="rating__label" htmlFor={`star-${number}`}>Rating {number}</label>
    </>
  );
};

ReviewStar.propTypes = {
  number: PropTypes.number.isRequired,
};

export default ReviewStar;
