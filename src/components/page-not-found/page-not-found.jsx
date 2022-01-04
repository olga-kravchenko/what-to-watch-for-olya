import React from "react";
import Footer from "../footer/footer";
import {Link} from "react-router-dom";

const PageNotFound = () => {
  return (
    <>
      <section className="movie-card" style={{marginBottom: `15px`}}>
        <div className="movie-card__bg">
          <img src="img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel"/>
        </div>
        <div style={{
          padding: `96px`,
          textAlign: `center`,
          margin: 0,
        }}>
          <h1 >404 Not Found</h1>
          <Link to="/">вернуться на главную</Link>
        </div>
      </section>
      <Footer/>
    </>
  );
};

export default PageNotFound;
