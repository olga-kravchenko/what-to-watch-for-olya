import React from "react";
import {useHistory} from "react-router-dom";
import VideoPlayer from "../video-player/video-player";
import PropTypes from "prop-types";

const FilmCard = ({film, activeFilm}) => {
  const {id, name, preview_image} = film;
  const history = useHistory();
  const pathToFilm = `/films/${id}`;
  const isActiveFilm = activeFilm === id;

  const onTittleClick = (evt) => {
    evt.preventDefault();
    history.push(pathToFilm);
    window.scrollTo(0, 0);
  };

  return (
    <article className="small-movie-card catalog__movies-card" id={id}>
      <div className="small-movie-card__image">
        {isActiveFilm ? <VideoPlayer film={film}/> :
          <img src={preview_image} alt={name} width="280" height="175"/>}
      </div>
      <h3 className="small-movie-card__title">
        <a className="small-movie-card__link" href={pathToFilm} onClick={onTittleClick}>{name}</a>
      </h3>
    </article>
  );
};

FilmCard.propTypes = {
  film: PropTypes.object.isRequired,
  activeFilm: PropTypes.string.isRequired,
};

export default FilmCard;
