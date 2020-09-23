import * as types from "../Constants/actionTypes";
import listOfTasks from "../Model/getData";

let JsonTask = JSON.parse(localStorage.getItem("tasks"));
let initialState = JsonTask ? JsonTask : [];

let reducer = (state = initialState, action) => {
  let JsonTask = JSON.parse(localStorage.getItem("tasks"));
  switch (action.type) {
    case types.LIST_ALL:
      return state;

    case types.INITIALIZE_TASKS:
      localStorage.setItem("tasks", JSON.stringify(listOfTasks.list));
      window.location.reload();
      break;

    case types.ADD_TASK:
      JsonTask = [...JsonTask, action.newTask];
      state = JsonTask;
      localStorage.setItem("tasks", JSON.stringify(JsonTask));
      return state;

    case types.UPDATE_TASK:
      for (let index in JsonTask) {
        if (JsonTask[index].id === action.task.id) {
          JsonTask[index] = action.task;
          localStorage.setItem("tasks", JSON.stringify(JsonTask));
          state = JsonTask;
          break;
        }
      }
      return state;

    case types.CHANGE_STATUS:
      for (let index in JsonTask) {
        if (JsonTask[index].id === action.id) {
          JsonTask[index].status = action.status;
          localStorage.setItem("tasks", JSON.stringify(JsonTask));
          state = JsonTask;
          break;
        }
      }
      return state;
    default:
      break;
  }
  return state;
};

export default reducer;
