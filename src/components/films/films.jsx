import React from "react";
import FilmCard from "../film-card/film-card";
import PropTypes from "prop-types";
import {useState} from "react";

const Films = ({films}) => {
  const [activeFilmId, setActiveFilmId] = useState({activeFilmId: ``});

  return (
    <div className="catalog__movies-list"
      onMouseOver={({target}) => {
        if (target.className === `catalog__movies-list`) {
          return;
        }
        const hoverFilm = target.closest(`article`).id;
        setActiveFilmId({...activeFilmId, activeFilmId: hoverFilm});
      }}
      onMouseLeave={() => {
        setActiveFilmId({...activeFilmId, activeFilmId: ``});
      }}>

      {films.map((film, i) => <FilmCard film={film} key={i} activeFilm={activeFilmId.activeFilmId}/>)}
    </div>);
};

Films.propTypes = {
  films: PropTypes.array.isRequired,
};

export default Films;
