const initialState = true;

const checkAddNewTaskReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD":
      return true

    case "EDIT":
      return false;

    default:
      return state;
  }
}

export default checkAddNewTaskReducer;