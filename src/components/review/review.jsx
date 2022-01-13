import React from "react";
import dayjs from "dayjs";
import PropTypes from "prop-types";

const Review = ({review}) => {
  const {id, user, rating, comment, date} = review;
  const reviewDate = dayjs(date).format(`MMMM DD, YYYY`);
  const dateTimeFormat = dayjs(date).format(`YYYY-MM-DD`);

  return (
    <div className="review" id={id}>
      <blockquote className="review__quote">
        <p className="review__text">{comment}</p>
        <footer className="review__details">
          <cite className="review__author" id={user.id}>{user.name}</cite>
          <time className="review__date" dateTime={dateTimeFormat}>{reviewDate}</time>
        </footer>
      </blockquote>
      <div className="review__rating">{rating}</div>
    </div>
  );
};

Review.propTypes = {
  review: PropTypes.object.isRequired,
};

export default Review;
