import React from "react";
import PropTypes from "prop-types";
import FilmProp from "../film/film";

const getEstimations = (rating) => {
  let estimation;
  if (rating < 3) {
    estimation = `Bad`;
  } else if (rating > 3 || rating < 5) {
    estimation = `Normal`;
  } else if (rating > 5 || rating < 8) {
    estimation = `Good`;
  } else if (rating > 8 || rating < 10) {
    estimation = `Good`;
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
  film: FilmProp,
  reviewsQuantity: PropTypes.number.isRequired,
};

export default FilmPageOverview;
