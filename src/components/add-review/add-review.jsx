import React from "react";
import Header from "../header/header";
import {Redirect, useParams} from "react-router-dom";
import ReviewForm from "../review-form/review-form";
import PropTypes from "prop-types";
import Breadcrumbs from "../breadcrumbs/breadcrumbs";

const AddReview = ({films}) => {
  const {id} = useParams();
  const index = films.findIndex((film) => film.id === id);
  if (index === -1) {
    return (
      <Redirect to="/page-not-found"/>
    );
  }
  const film = films[index];
  const {name, background_image, poster_image} = film;

  return (
    <section className="movie-card movie-card--full">
      <div className="movie-card__header">
        <div className="movie-card__bg">
          <img src={background_image} alt={name}/>
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <Header film={film}>
          <Breadcrumbs film={film}/>
        </Header>

        <div className="movie-card__poster movie-card__poster--small">
          <img src={poster_image} alt="The Grand Budapest Hotel poster" width="218" height="327"/>
        </div>
      </div>

      <ReviewForm/>

    </section>
  );
};

AddReview.propTypes = {
  films: PropTypes.array.isRequired,
};

export default AddReview;
