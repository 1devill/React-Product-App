import { SET_FAVORITE } from "../constants/constants";

const initialState = {
  isFavorite: false,
  filteredProducts: []
};

const filter = (state = initialState, action) => {
  switch (action.type) {
    case SET_FAVORITE:
      return {
        ...state,
        isFavorite: !state.isFavorite
      };
    default:
      return state;
  }
};

export default filter;
