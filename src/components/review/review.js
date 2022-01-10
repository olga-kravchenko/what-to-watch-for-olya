import PropTypes from "prop-types";

const ReviewProp = PropTypes.shape({
  id: PropTypes.string.isRequired,
  user: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }),
  rating: PropTypes.string.isRequired,
  comment: PropTypes.string.isRequired,
  date: PropTypes.object.isRequired,
});

export default ReviewProp;
