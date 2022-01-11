import React, {useEffect, useRef} from "react";
import FilmProp from "../film/film";

const VideoPlayer = ({film}) => {
  const VIDEO_PLAY_TIMEOUT = 1000;
  const {preview_video_link, preview_image} = film;
  const videoRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      if (videoRef.current === null) {
        return;
      }
      videoRef.current.play();
    }, VIDEO_PLAY_TIMEOUT);
  }, []);

  return (
    <video src={preview_video_link} poster={preview_image} muted width="280" height="175" ref={videoRef}/>
  );
};

VideoPlayer.propTypes = {
  film: FilmProp,
};

export default VideoPlayer;
