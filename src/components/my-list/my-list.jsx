import React from "react";
import Footer from "../footer/footer";
import Header from "../header/header";
import Films from "../films/films";

const MyList = () => {
  return (
    <div className="user-page">
      <Header type="user"/>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>

        <Films quantity={5}/>
      </section>

      <Footer/>
    </div>
  );
};

export default MyList;
