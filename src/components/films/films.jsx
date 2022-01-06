import React from "react";
import FilmCard from "../film-card/film-card";
import PropTypes from "prop-types";

const Films = ({films}) => {
  return (
    <div className="catalog__movies-list">
      {films.map((film, i) => <FilmCard film={film} key={i} />)}
    </div>);
};

Films.propTypes = {
  films: PropTypes.array.isRequired,
};

export default Films;
