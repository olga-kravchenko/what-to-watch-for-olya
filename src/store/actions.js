const ActionType = {
  CHANGE_GENRE: `main/changeGenre`,
};

const ActionCreator = {
  changeGenre: (genre) => ({
    type: ActionType.CHANGE_GENRE,
    payload: genre,
  }),
};

export {ActionType, ActionCreator};
