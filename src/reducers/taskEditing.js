const initialState = {}

const taskEditing = (state = initialState, action) => {
  switch (action.type) {
    case "GET_TASK_EDITING":
      return action.taskEditing

    default:
      return state;
  }

}

export default taskEditing;