import { combineReducers } from "redux";
import tasks from "./tasks";
import taskEditing from "./taskEditing";
import isAddNewTask from "./isAddNewTask"
import filter from "./filter"

const Reducers = combineReducers({
  tasks,
  taskEditing,
  isAddNewTask,
  filter
});

export default Reducers;
