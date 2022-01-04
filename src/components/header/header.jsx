import React from "react";
import Logo from "../logo/logo";
import PropTypes from "prop-types";
import {useLocation} from "react-router-dom";
import Breadcrumbs from "../breadcrumbs/breadcrumbs";

const Header = ({type}) => {
  const {pathname} = useLocation();

  let headerClass;
  if (type) {
    headerClass = type === `movie` ? `movie-card__head` : `user-page__head`;
  } else {
    headerClass = ``;
  }

  return (
    <header className={`page-header ${headerClass}`}>
      <Logo type=""/>
      {pathname.indexOf(`review`) > -1 ? <Breadcrumbs/> : ``}
      {pathname === `/mylist` ? <h1 className="page-title user-page__title">My list</h1> : ``}
      {pathname === `/login` ?
        <h1 className="page-title user-page__title">Sign in</h1> :
        <div className="user-block">
          <div className="user-block__avatar">
            <img src="img/avatar.jpg" alt="User avatar" width="63" height="63"/>
          </div>
        </div>}
    </header>
  );
};

Header.propTypes = {
  type: PropTypes.string,
};

export default Header;
