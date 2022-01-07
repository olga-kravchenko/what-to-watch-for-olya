import React from "react";
import Footer from "../footer/footer";
import Header from "../header/header";
import Films from "../films/films";
import PropTypes from "prop-types";

const MyList = ({films}) => {
  return (
    <div className="user-page">
      <Header type="user"/>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <Films films={films}/>
      </section>

      <Footer/>
    </div>
  );
};

MyList.propTypes = {
  films: PropTypes.array.isRequired,
};

export default MyList;
