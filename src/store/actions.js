const ActionType = {
  CHANGE_GENRE: `main/changeGenre`,
  SET_SHOWN_FILM_QUANTITY: `main/setShownFilmQuantity`,
  INCREASE_SHOWN_FILM_QUANTITY: `main/increaseShownFilmQuantity`,
};

const ActionCreator = {
  changeGenre: (genre) => ({
    type: ActionType.CHANGE_GENRE,
    payload: genre,
  }),
  setShownFilmQuantity: (genre) => ({
    type: ActionType.CHANGE_GENRE,
    payload: genre,
  }),
  increaseShownFilmQuantity: () => ({
    type: ActionType.INCREASE_SHOWN_FILM_QUANTITY,
  }),
};

export {ActionType, ActionCreator};
