import React from "react";
import {Redirect, useParams} from "react-router-dom";
import PropTypes from "prop-types";

const formatTime = (minutes) => {
  const MINUTE_QUANTITY_IN_HOUR = 60;
  return minutes <= MINUTE_QUANTITY_IN_HOUR ?
    `${minutes}m` :
    `${Math.floor((minutes / MINUTE_QUANTITY_IN_HOUR))}h ${minutes % MINUTE_QUANTITY_IN_HOUR}m`;
};

const Player = ({films}) => {
  const {id} = useParams();
  const index = films.findIndex((film) => film.id === id);
  if (index === -1) {
    return (
      <Redirect to="/page-not-found"/>
    );
  }
  const film = films[index];
  const {run_time, video_link} = film;
  const time = formatTime(run_time);

  return (
    <div className="player">
      <video src={video_link} className="player__video" poster="img/player-poster.jpg"/>

      <button type="button" className="player__exit" onClick={(evt) => {
        evt.preventDefault();
        window.history.back();
      }}>Exit</button>

      <div className="player__controls">
        <div className="player__controls-row">
          <div className="player__time">
            <progress className="player__progress" value="30" max="100"/>
            <div className="player__toggler" style={{left: `30%`}}>Toggler</div>
          </div>
          <div className="player__time-value">{time}</div>
        </div>

        <div className="player__controls-row">
          <button type="button" className="player__play">
            <svg viewBox="0 0 19 19" width="19" height="19">
              <use xlinkHref="#play-s"/>
            </svg>
            <span>Play</span>
          </button>
          <div className="player__name">{film.name}</div>

          <button type="button" className="player__full-screen">
            <svg viewBox="0 0 27 27" width="27" height="27">
              <use xlinkHref="#full-screen"/>
            </svg>
            <span>Full screen</span>
          </button>
        </div>
      </div>
    </div>
  );
};

Player.propTypes = {
  films: PropTypes.array.isRequired,
};

export default Player;
