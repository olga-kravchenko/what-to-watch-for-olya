import React, {useState} from "react";
import {Link, useHistory} from "react-router-dom";
import {Redirect, useParams} from "react-router-dom";
import {generateReviews, getRandomNumber} from "../../mocks/films";
import Footer from "../footer/footer";
import Header from "../header/header";
import Films from "../films/films";
import FilmPageOverview from "../film-page-overview/film-page-overview";
import FilmPageDetails from "../film-page-details/film-page-details";
import FilmPageReviews from "../film-page-reviews/film-page-reviews";
import PropTypes from "prop-types";
import FilmTabs from "../film-tabs/film-tabs";

const renderFilmInfo = (type, film, reviews) => {
  if (type === `Overview`) {
    return (<FilmPageOverview film={film} reviewsQuantity={reviews.length}/>);
  } else if (type === `Details`) {
    return (<FilmPageDetails film={film}/>);
  } else {
    return (<FilmPageReviews reviews={reviews}/>);
  }
};

const Film = ({films}) => {
  const [activeTab, setActiveTab] = useState(`Overview`);
  const history = useHistory();
  const {id} = useParams();
  const SHOWN_FILM_QUANTITY = 4;
  const reviews = new Array(getRandomNumber(1, 10)).fill(null).map(generateReviews);

  const index = films.findIndex((film) => film.id === id);
  const film = films[index];
  if (index === -1) {
    return (
      <Redirect to="/page-not-found"/>
    );
  }
  const {name, background_image, genre, released, poster_image} = film;
  const filmsLikeThis = [...films].filter((fl) => fl.genre === genre).slice(0, SHOWN_FILM_QUANTITY);

  const onPlayClick = () => {
    history.push(`/player/${id}`);
  };

  return (
    <>
      <section className="movie-card movie-card--full">
        <div className="movie-card__hero">
          <div className="movie-card__bg">
            <img src={background_image} alt={name}/>
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <Header type="movie"/>

          <div className="movie-card__wrap">
            <div className="movie-card__desc">
              <h2 className="movie-card__title">{name}</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">{genre}</span>
                <span className="movie-card__year">{released}</span>
              </p>

              <div className="movie-card__buttons">
                <button className="btn btn--play movie-card__button" type="button" onClick={onPlayClick}>
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"/>
                  </svg>
                  <span>Play</span>
                </button>
                <button className="btn btn--list movie-card__button" type="button">
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"/>
                  </svg>
                  <span>My list</span>
                </button>
                <Link to={`/films/${id}/review`} className="btn movie-card__button">Add review</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="movie-card__wrap movie-card__translate-top">
          <div className="movie-card__info">
            <div className="movie-card__poster movie-card__poster--big">
              <img src={poster_image} alt={`${name} poster`} width="218" height="327"/>
            </div>

            <div className="movie-card__desc">
              <FilmTabs activeTab={activeTab} setActiveTab={setActiveTab}/>
              {renderFilmInfo(activeTab, film, reviews)}
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>
          {filmsLikeThis.length ? <Films films={filmsLikeThis}/> : <h2>Does not found</h2>}
        </section>
        <Footer/>
      </div>
    </>
  );
};

Film.propTypes = {
  films: PropTypes.array.isRequired,
};

export default Film;
