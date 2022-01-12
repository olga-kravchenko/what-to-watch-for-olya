import {films} from "../mocks/films";

const DEFAULT_GENRE = `All genres`;
const initialState = {
  genre: DEFAULT_GENRE,
  films,
  shownFilmQuantity: 8,
};

export default initialState;
