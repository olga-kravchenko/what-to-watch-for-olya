import React from "react";
import PropTypes from "prop-types";

const FilmTabs = ({activeTab, setActiveTab}) => {
  const tabs = [`Overview`, `Details`, `Reviews`];

  const onTabClick = (evt) => {
    evt.preventDefault();
    setActiveTab(evt.target.textContent);
  };
  return (
    <nav className="movie-nav movie-card__nav">
      <ul className="movie-nav__list">
        {tabs.map((tab, i) => (
          <li className={`movie-nav__item ${tab === activeTab ? `movie-nav__item--active` : ``}`} key={i}>
            <a className="movie-nav__link" onClick={onTabClick}>{tab}</a>
          </li>))}
      </ul>
    </nav>
  );
};

FilmTabs.propTypes = {
  activeTab: PropTypes.string.isRequired,
  setActiveTab: PropTypes.func.isRequired,
};

export default FilmTabs;
