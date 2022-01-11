import React, {useEffect, useRef} from "react";
import FilmProp from "../film/film";

const VideoPlayer = ({film}) => {
  const {preview_video_link, preview_image} = film;
  const videoRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      if (videoRef.current === null) {
        return;
      }
      videoRef.current.play();
    }, 1000);
  }, []);

  return (
    <video src={preview_video_link} poster={preview_image} muted width="280" height="175" ref={videoRef}/>
  );
};

VideoPlayer.propTypes = {
  film: FilmProp,
};

export default VideoPlayer;
