export const addTask = (task) => {
  return {
    type: "ADD_TASK",
    task // task: task
  }
}

export const editTask = (task) => {
  return {
    type: "EDIT_TASK",
    task
  }
}

export const editStatus = (id, status) => {
  return {
    type: "EDIT_STATUS",
    id, status
  }
}

export const changeToAddNewTask = () => {
  return {
    type: "ADD"
  }
}

export const changeToEditTask = () => {
  return {
    type: "EDIT"
  }
}

export const getTaskEditing = (taskEditing) => {
  return {
    type: "GET_TASK_EDITING",
    taskEditing
  }
}