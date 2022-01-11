import React from "react";
import ReviewStar from "../review-star/review-star";
import {useState} from "react";

const ReviewForm = () => {
  const MAX_STAR_QUANTITY = 10;
  const [userForm, setUserForm] = useState({
    "review-text": ``,
    "rating": ``
  });

  const handleFieldChange = (evt) => {
    const {name, value} = evt.target;
    setUserForm({...userForm, [name]: value});
  };

  const starQuantity = Array.from({length: MAX_STAR_QUANTITY}, (_, index) => index + 1);
  return (
    <div className="add-review">
      <form action="#" className="add-review__form">
        <div className="rating">
          <div className="rating__stars" onChange={handleFieldChange}>
            {starQuantity.map((number, i) => (
              <ReviewStar number={number} key={i}/>))}
          </div>
        </div>
        <div className="add-review__text">
          <textarea className="add-review__textarea" name="review-text" id="review-text" placeholder="Review text" onChange={handleFieldChange}/>
          <div className="add-review__submit">
            <button className="add-review__btn" type="submit">Post</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ReviewForm;
