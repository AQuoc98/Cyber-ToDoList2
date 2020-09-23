import * as types from "../Constants/actionTypes";

let initialState = true;

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.CONVERT_TO_ADD_NEW_TASK:
      state = true;
      return state;

    case types.CONVER_TO_EDIT_TASK:
      state = false;
      return state;

    default:
      break;
  }
  return state;
};

export default reducer;
