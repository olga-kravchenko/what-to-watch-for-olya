import React from "react";
import Logo from "../logo/logo";
import PropTypes from "prop-types";
import {useHistory, Link} from "react-router-dom";

const Header = (props) => {
  const isAuth = false;
  const history = useHistory();
  let headerClass;
  if (props.type) {
    headerClass = props.type === `movie` ? `movie-card__head` : `user-page__head`;
  } else {
    headerClass = ``;
  }

  const onAvatarClick = () => {
    history.push(`/mylist`);
  };

  return (
    <header className={`page-header ${headerClass}`}>
      <Logo type=""/>
      {props.children}
      {isAuth ?
        <div className="user-block">
          <div className="user-block__avatar">
            <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" onClick={onAvatarClick}/>
          </div>
        </div> :
        <div className="user-block">
          <Link to="/login" className="user-block__link">Sign in</Link>
        </div>}
    </header>
  );
};

Header.propTypes = {
  type: PropTypes.string,
  children: PropTypes.object,
};

export default Header;
