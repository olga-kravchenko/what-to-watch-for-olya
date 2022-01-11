import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {ActionCreator} from "../../store/actions";

const setGenreList = (films) => {
  const genreList = films.map((e) => e.genre);
  genreList.unshift(`All genres`);
  return [...new Set(genreList)];
};

const Genres = ({films, genre: activeGenre, onGenreClick}) => {
  const genres = setGenreList(films);
  return (
    <ul className="catalog__genres-list">
      {genres.map((genre, i) => {
        return (
          <li className={`catalog__genres-item ${activeGenre === genre ? `catalog__genres-item--active` : ``}`} key={i}>
            <a className="catalog__genres-link" onClick={(evt) => {
              evt.preventDefault();
              onGenreClick(evt.target.textContent);
            }}>{genre}</a>
          </li>
        );
      })}
    </ul>
  );
};

Genres.propTypes = {
  films: PropTypes.array.isRequired,
  genre: PropTypes.string.isRequired,
  onGenreClick: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  genre: state.genre,
});

const mapDispatchToProps = (dispatch) => ({
  onGenreClick(genre) {
    dispatch(ActionCreator.changeGenre(genre));
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(Genres);
