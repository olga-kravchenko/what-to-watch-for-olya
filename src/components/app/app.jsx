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

const App = ({films, year}) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" >
          <Main year={year}/>
        </Route>
        <Route path="/login" >
          <Login/>
        </Route>
        <Route path="/mylist" exact>
          <MyList films={films}/>
        </Route>
        <Route path="/films/:id" exact>
          <Film films={films}/>
        </Route>
        <Route path="/films/:id/review" exact>
          <AddReview films={films}/>
        </Route>
        <Route path="/player/:id" exact>
          <Player films={films}/>
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
  films: PropTypes.array.isRequired,
};

export default App;
