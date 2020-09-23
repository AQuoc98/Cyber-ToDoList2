import * as types from "../Constants/actionTypes";

let initialState = {
  filterType: "",
  filterValue: -1,
};

let reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FILTER:
      state = {
        filterType: action.filterType,
        filterValue: action.filterValue,
      };
      return state;

    default:
      break;
  }

  return state;
};

export default reducer;
