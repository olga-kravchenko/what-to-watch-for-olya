import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {films} from "./mocks/films";

const genre = `Drama`;
const year = 2014;

ReactDOM.render(<App films={films} genre={genre} year={year}/>, document.querySelector(`#root`));
