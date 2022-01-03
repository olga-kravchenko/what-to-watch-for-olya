import React from "react";
import FilmCard from "../film-card/film-card";

const Films = () => {
  const films = new Array(12).fill();
  return (
    <div className="catalog__movies-list">
      {films.map((_, i) => <FilmCard key={i} />)}
    </div>);
};

export default Films;
