import React from "react";

const PageNotFound = () => {
  return (
    <>
      <section className="movie-card">
        <div className="movie-card__bg">
          <img src="img/bg-the-grand-budapest-hotel.jpg" alt="The Grand Budapest Hotel"/>
        </div>
        <div style={{
          padding: `96px`,
          textAlign: `center`,
          margin: 0,
        }}>
          <h1 >404 Not Found</h1>
          <a>вернуться на главную</a>
        </div>
      </section>
    </>
  );
};

export default PageNotFound;
