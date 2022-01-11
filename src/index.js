import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/app';
import {films} from "./mocks/films";
import {createStore} from "redux";
import {Provider} from "react-redux";
import {composeWithDevTools} from "redux-devtools-extension";
import reducer from "./store/reducer";

const genre = `Drama`;
const year = 2014;

const store = createStore(reducer, composeWithDevTools());

ReactDOM.render(
    <Provider store={store}>
      <App films={films} genre={genre} year={year}/>
    </Provider>,
    document.querySelector(`#root`));
