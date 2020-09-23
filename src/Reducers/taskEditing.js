import * as types from "../Constants/actionTypes";

let initialState = {
  id: "",
  name: "",
  labelArr: [],
  priority: 1,
  memberIDArr: [],
  status: 1,
  description: "",
};

let reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.EDIT_TASK:
      state = action.taskEditing;
      return state;

    case types.CLEAR_FORM:
      state = {
        id: "",
        name: "",
        labelArr: [],
        priority: 1,
        memberIDArr: [],
        status: 1,
        description: "",
      };
      return state;
    default:
      break;
  }
  return state;
};

export default reducer;
