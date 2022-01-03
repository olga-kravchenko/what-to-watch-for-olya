import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';

const genre = `Drama`;
const year = 2014;

ReactDOM.render(<App genre={genre} year={year}/>, document.querySelector(`#root`));
