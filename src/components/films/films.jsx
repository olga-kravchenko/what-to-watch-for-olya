import React from "react";
import FilmCard from "../film-card/film-card";
import PropTypes from "prop-types";

const Films = ({quantity}) => {
  const films = new Array(quantity).fill();
  return (
    <div className="catalog__movies-list">
      {films.map((_, i) => <FilmCard key={i} />)}
    </div>);
};

Films.propTypes = {
  quantity: PropTypes.number.isRequired,
};

export default Films;
