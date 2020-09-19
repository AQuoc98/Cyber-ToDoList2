export default class ListOfTasks {
  constructor() {
    this.list = [];
  }

  addTask = task => {
    this.list = [...this.list, task];
  };

  findTask = id => {
    for (let task of this.list) {
      if (task.id === id) {
        return task;
      }
    }
    return null;
  };

  findTaskIndex = id => {
    for (let index in this.list) {
      if (this.list[index].id === id) {
        return index;
      }
    }
    return null;
  };
}
