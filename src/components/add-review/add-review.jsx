import React from "react";
import Header from "../header/header";
import {useParams} from "react-router-dom";
import ReviewStar from "../review-star/review-star";

const AddReview = ({films}) => {
  const {id} = useParams();
  const index = films.findIndex((film) => film.id === id);
  const film = films[index];
  const {name, background_image, poster_image} = film;

  const starQuantity = Array.from({length: 10}, (_, index) => index + 1);
  return (
    <section className="movie-card movie-card--full">
      <div className="movie-card__header">
        <div className="movie-card__bg">
          <img src={background_image} alt={name}/>
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <Header film={film}/>

        <div className="movie-card__poster movie-card__poster--small">
          <img src={poster_image} alt="The Grand Budapest Hotel poster" width="218"
            height="327"/>
        </div>
      </div>

      <div className="add-review">
        <form action="#" className="add-review__form">
          <div className="rating">
            <div className="rating__stars">
              {starQuantity.map((number, i) => (
                <ReviewStar number={number} key={i}/>))}
            </div>
          </div>

          <div className="add-review__text">
            <textarea className="add-review__textarea" name="review-text" id="review-text"
              placeholder="Review text"/>
            <div className="add-review__submit">
              <button className="add-review__btn" type="submit">Post</button>
            </div>
          </div>
        </form>
      </div>

    </section>
  );
};

export default AddReview;
