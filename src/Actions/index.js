import * as types from "../Constants/actionTypes";

export const listAll = () => {
  return {
    type: types.LIST_ALL,
  };
};

export const initializeTasks = () => {
  return {
    type: types.INITIALIZE_TASKS,
  };
};

export const addTask = (newTask) => {
  return {
    type: "ADD_TASK",
    newTask, // task: task
  };
};

export const editTask = (taskEditing) => {
  return {
    type: types.EDIT_TASK,
    taskEditing,
  };
};

export const updateTask = (task) => {
  return {
    type: types.UPDATE_TASK,
    task,
  };
};

export const convertIsAddNewTask = () => {
  return {
    type: types.CONVERT_TO_ADD_NEW_TASK,
  };
};

export const convertIsEditTask = () => {
  return {
    type: types.CONVER_TO_EDIT_TASK,
  };
};

export const clearForm = () => {
  return {
    type: types.CLEAR_FORM,
  };
};

export const changeStatus = (id, status) => {
  return {
    type: types.CHANGE_STATUS,
    id,
    status,
  };
};

export const filter = (filterType, filterValue) => {
  return {
    type: types.FILTER,
    filterType,
    filterValue,
  };
};
