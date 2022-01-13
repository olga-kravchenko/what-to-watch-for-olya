import React from "react";
import PropTypes from "prop-types";

const getEstimations = (rating) => {
  const BAD_MAX_QUANTITY = 3;
  const NORMAL_MAX_QUANTITY = 5;
  const GOOD_MAX_QUANTITY = 8;
  const VERY_GOOD_MAX_QUANTITY = 10;
  let estimation;
  if (rating < BAD_MAX_QUANTITY) {
    estimation = `Bad`;
  } else if (rating > BAD_MAX_QUANTITY || rating < NORMAL_MAX_QUANTITY) {
    estimation = `Normal`;
  } else if (rating > NORMAL_MAX_QUANTITY || rating < GOOD_MAX_QUANTITY) {
    estimation = `Good`;
  } else if (rating > GOOD_MAX_QUANTITY || rating < VERY_GOOD_MAX_QUANTITY) {
    estimation = `Very good`;
  } else {
    estimation = `Awesome`;
  }
  return estimation;
};

const FilmPageOverview = ({film, reviewsQuantity}) => {
  const {rating, description, director, starring} = film;
  const estimation = getEstimations(rating);
  return (
    <>
      <div className="movie-rating">
        <div className="movie-rating__score">{rating}</div>
        <p className="movie-rating__meta">
          <span className="movie-rating__level">{estimation}</span>
          <span className="movie-rating__count">{reviewsQuantity} ratings</span>
        </p>
      </div>

      <div className="movie-card__text">
        <p>{description}</p>

        <p className="movie-card__director"><strong>Director: {director}</strong></p>

        <p className="movie-card__starring"><strong>Starring: {starring.join(`, `)} and other</strong></p>
      </div>
    </>
  );
};

FilmPageOverview.propTypes = {
  film: PropTypes.object.isRequired,
  reviewsQuantity: PropTypes.number.isRequired,
};

export default FilmPageOverview;
