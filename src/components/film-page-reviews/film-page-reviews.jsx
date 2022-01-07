import React from "react";
import Review from "../review/review";
import PropTypes from "prop-types";

const FilmPageReviews = ({reviews}) => {
  return (
    <div className="movie-card__reviews movie-card__row">
      <div className="movie-card__reviews-col">
        {reviews.map((review, i) => <Review key={i} review={review}/>)}
      </div>
    </div>
  );
};

FilmPageReviews.propTypes = {
  reviews: PropTypes.array.isRequired,
};

export default FilmPageReviews;
