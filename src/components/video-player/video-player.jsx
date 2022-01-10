import React from "react";
import FilmProp from "../film/film";

const VideoPlayer = ({film}) => {
  const {preview_video_link, preview_image} = film;
  return (
    <video src={preview_video_link} poster={preview_image} autoPlay muted width="280" height="175"/>
  );
};

VideoPlayer.propTypes = {
  film: FilmProp,
};

export default VideoPlayer;
