import React from "react";

const Genres = () => {
  const genres = [`All genres`, `Comedies`, `Crime`, `Documentary`, `Dramas`, `Horror`, `Kids & Family`, `Romance`, `Sci-Fi`, `Thrillers`];
  return (
    <ul className="catalog__genres-list">
      {genres.map((genre, i) => {
        return (
          <li className={`catalog__genres-item ${genre === `All genres` ? `catalog__genres-item--active` : ``}`} key={i}>
            <a href="#" className="catalog__genres-link">{genre}</a>
          </li>
        );
      })}
    </ul>
  );
};

export default Genres;
