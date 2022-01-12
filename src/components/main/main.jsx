import React from "react";
import Films from "../films/films";
import PropTypes from 'prop-types';
import Header from "../header/header";
import Genres from "../genres/genres";
import Footer from "../footer/footer";
import {connect} from "react-redux";
import ShowMoreButton from "../show-more-button/show-more-button";

const getFilteredFilmsByGenre = (films, genre) => {
  if (genre === `All genres`) {
    return films;
  }
  return films.filter((e) => e.genre === genre);
};

const Main = ({films, genre, year}) => {
  const filteredFilms = getFilteredFilmsByGenre(films, genre);
  return (
    <>
      <section className="movie-card">
        <div className="movie-card__bg">
          <img src="img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel"/>
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <Header type="movie"/>

        <div className="movie-card__wrap">
          <div className="movie-card__info">
            <div className="movie-card__poster">
              <img src="img/the-grand-budapest-hotel-poster.jpg" alt="The Grand Budapest Hotel poster" width="218" height="327"/>
            </div>

            <div className="movie-card__desc">
              <h2 className="movie-card__title">The Grand Budapest Hotel</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">{genre}</span>
                <span className="movie-card__year">{year}</span>
              </p>

              <div className="movie-card__buttons">
                <button className="btn btn--play movie-card__button" type="button">
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
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>

          <Genres films={films}/>

          <Films films={filteredFilms}/>

          <ShowMoreButton/>
        </section>

        <Footer/>
      </div>
    </>);
};

Main.propTypes = {
  genre: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  films: PropTypes.array,
};

const mapStateToProps = (state) => ({
  genre: state.genre,
  films: state.films,
});

export default connect(mapStateToProps, null)(Main);
