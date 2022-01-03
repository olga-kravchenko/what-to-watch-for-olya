import React from "react";
import Main from "../main/main";
import PropTypes from "prop-types";

const App = ({genre, year}) => {
  return (<Main genre={genre} year={year}/>);
};

App.propTypes = {
  genre: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
};

export default App;
