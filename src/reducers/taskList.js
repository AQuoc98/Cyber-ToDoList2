import taskListData from '../data';

const initialState = taskListData ? taskListData : [];

// reducer (function) ==> return state
const taskListReducer = (state = initialState, action) => {
  let index;
  let newState;
  switch (action.type) {
    case "ADD_TASK":
      // const newState = [...state, action.task]
      // const newState = state;
      // newState.push(action.task)
      return [...state, action.task];

    case "EDIT_TASK":
      // debugger
      index = state.findIndex(task => task.id === action.task.id)
      newState = [...state]
      newState[index] = action.task
      return newState;

    case "EDIT_STATUS": // "EDIT_STATUS" có thể làm chung với "EDIT_TASK"
      index = state.findIndex(task => task.id === action.id)
      newState = [...state]
      newState[index] = {
        ...newState[index],
        status: action.status
      }

      // newState[index].status = action.status

      return newState;


    default:
      break;
  }

  return state;
}

export default taskListReducer;