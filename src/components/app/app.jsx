import React from "react";
import PropTypes from "prop-types";
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import Main from "../main/main";
import Login from "../login/login";
import MyList from "../my-list/my-list";
import Film from "../film/film";
import AddReview from "../add-review/add-review";
import Player from "../player/player";
import PageNotFound from "../page-not-found/page-not-found";

const App = ({genre, year}) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" >
          <Main genre={genre} year={year}/>
        </Route>
        <Route path="/login" >
          <Login/>
        </Route>
        <Route path="/mylist" exact>
          <MyList/>
        </Route>
        <Route path="/films/:id" exact>
          <Film/>
        </Route>
        <Route path="/films/:id/review" exact>
          <AddReview/>
        </Route>
        <Route path="/player/:id" exact>
          <Player/>
        </Route>
        <Route>
          <PageNotFound/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  genre: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
};

export default App;
