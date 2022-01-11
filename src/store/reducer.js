import initialState from "./initial-state";
import {ActionType} from "./actions";

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_GENRE:
      return {
        ...state,
        genre: action.payload
      };
  }

  return state;
};

export default reducer;
