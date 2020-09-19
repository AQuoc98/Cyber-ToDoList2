import { combineReducers } from 'redux';
import taskList from './taskList'
import checkAddNewTask from './isAddNewTask'
import taskEditing from './taskEditing';

const rootReducer = combineReducers({
  taskList, // taskList: taskList
  checkAddNewTask,
  taskEditing
  // object destructuring ES6
})

export default rootReducer;