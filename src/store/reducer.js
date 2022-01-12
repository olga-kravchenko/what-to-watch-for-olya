import initialState from "./initial-state";
import {ActionType} from "./actions";

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_GENRE:
      return {
        ...state,
        genre: action.payload
      };
    case ActionType.SET_SHOWN_FILM_QUANTITY:
      return {
        ...state,
        shownFilmQuantity: action.payload || (state.films.length > 8 ? 8 : state.films.length),
      };
    case ActionType.INCREASE_SHOWN_FILM_QUANTITY:
      return {
        ...state,
        shownFilmQuantity: (state.shownFilmQuantity + 8) < state.films.length ?
          state.shownFilmQuantity + 8 : state.films.length,
      };
  }

  return state;
};

export default reducer;
