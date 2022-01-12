import React from "react";
import {connect} from "react-redux";
import {ActionCreator} from "../../store/actions";
import PropTypes from "prop-types";

const ShowMoreButton = ({clickShowMore}) => {
  return (
    <div className="catalog__more">
      <button className="catalog__button" type="button" onClick={clickShowMore}>Show more</button>
    </div>
  );
};

ShowMoreButton.propTypes = {
  clickShowMore: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  clickShowMore() {
    dispatch(ActionCreator.increaseShownFilmQuantity());
  },
});

export default connect(null, mapDispatchToProps)(ShowMoreButton);
