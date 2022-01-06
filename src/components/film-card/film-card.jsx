import React from "react";
import PropTypes from "prop-types";
import {useHistory} from "react-router-dom";

const FilmCard = ({film}) => {
  const {id, name, preview_image} = film;
  const history = useHistory();
  const pathToFilm = `/films/${id}`;

  const onTittleClick = (evt) => {
    evt.preventDefault();
    history.push(pathToFilm);
    window.scrollTo(0, 0);
  }

  return (
    <article className="small-movie-card catalog__movies-card" id={id}>
      <div className="small-movie-card__image">
        <img src={preview_image}
          alt={name} width="280" height="175"/>
      </div>
      <h3 className="small-movie-card__title">
        <a className="small-movie-card__link" href={pathToFilm} onClick={onTittleClick}>{name}</a>
      </h3>
    </article>
  );
};

FilmCard.propTypes = {
  film: PropTypes.object.isRequired,
};

export default FilmCard;
