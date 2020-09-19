import React, { Component } from "react";
import "./App.css";
import randomid from "randomid";

// import component
import Controls from "./Components/Controls/Controls";
import TaskList from "./Components/TaskList/TaskList";
import Modal from "./Components/Modal/Modal";

// import data
import listOfTasks from "./Model/getData";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      taskEditing: null, // Task mới sau khi click vào nút sửa, ta lấy nội dung task đó đè vào taskEditing
      isAddNewTask: true, // Phân biệt khi nào gọi sửa task or thêm mới

      // Filter
      filterType: "",
      filterProgress: -1,
      filterLabel: "",
      filterPriority: -1,
      filterSearch: "",

      // Sort
      sortType: ""
    };
  }

  // Tạo ra bộ dữ liệu khởi đầu
  // setItem : phương thức đưa dữ liệu lên localStorage
  // JSON.stringify : khi mà đưa dữ liệu lên localStorage thì cần nén lại dạng chuỗi

  generateData = () => {
    localStorage.setItem("tasks", JSON.stringify(listOfTasks.list));
  };

  // khi load trang lấy luôn bộ dữ liệu đã có sẵn ra sử dụng
  // getItem là lấy dữ liệu xuống

  componentWillMount = () => {
    let tasksJSON = JSON.parse(localStorage.getItem("tasks"));
    this.setState({
      tasks: tasksJSON
      // tasks: [] dùng để fix lỗi map null khi xoá local storage
    });
  };

  addNewTask = data => {
    if (this.state.isAddNewTask) {
      data.id = randomid(5);
      let tasksJSON = JSON.parse(localStorage.getItem("tasks"));
      tasksJSON = [
        ...tasksJSON,
        { ...data, priority: parseInt(data.priority) }
      ];
      this.setState({
        tasks: tasksJSON
      });
      localStorage.setItem("tasks", JSON.stringify(tasksJSON));
    }
  };

  clearBeforeAddNewTask = () => {
    this.setState({
      isAddNewTask: true
    });
  };

  editTask = data => {
    this.setState({
      isAddNewTask: false,
      taskEditing: data
    });
  };

  changeProgress = (id, progress) => {
    console.log(id, " - ", progress);
    let tasksJSON = JSON.parse(localStorage.getItem("tasks"));
    for (let index in tasksJSON) {
      if (tasksJSON[index].id === id) {
        tasksJSON[index].status = progress;
      }
    }
    this.setState({
      tasks: tasksJSON
    });
    localStorage.setItem("tasks", JSON.stringify(tasksJSON));
  };

  onEditTask = data => {
    if (!this.state.isAddNewTask) {
      let tasksJSON = JSON.parse(localStorage.getItem("tasks"));
      // tasksJSON = [...tasksJSON, {...data, priority: parseInt(data.priority)}];

      // find Task
      for (let i in tasksJSON) {
        if (tasksJSON[i].id === data.id) {
          tasksJSON[i].name = data.name;
          tasksJSON[i].labelArr = data.labelArr;
          tasksJSON[i].priority = parseInt(data.priority);
          tasksJSON[i].memberIDArr = data.memberIDArr;
          tasksJSON[i].status = data.status;
          tasksJSON[i].description = data.description;
        }
      }

      this.setState({
        tasks: tasksJSON
      });
      localStorage.setItem("tasks", JSON.stringify(tasksJSON));
    }
  };

  changeFilterProgress = filterProgress => {
    this.setState({
      filterType: "filterProgress",
      filterProgress: filterProgress
    });
  };

  changeFilterLabel = filterLabel => {
    this.setState({
      filterType: "filterLabel",
      filterLabel: filterLabel
    });
  };

  changeFilterPriority = filterPriority => {
    this.setState({
      filterType: "filterPriority",
      filterPriority: filterPriority
    });
  };

  changeFilterSearch = filterSearch => {
    this.setState({
      filterType: "filterSearch",
      filterSearch: filterSearch
    });
  };

  changeSortType = sortType => {
    this.setState({
      filterType: "sort",
      sortType: sortType
    });
  };

  render() {
    let {
      tasks,
      isAddNewTask,
      taskEditing,
      filterType,
      filterProgress,
      filterLabel,
      filterPriority,
      filterSearch,
      sortType
    } = this.state;
    console.log(tasks);
    return (
      <div className="App">
        <div>
          <h1 className="text-center my-2">QUẢN LÝ CÔNG VIỆC</h1>
          <div className="container-fluid">
            <div className="row">
              {/* PANEL */}
              <Controls
                generateData={this.generateData}
                clearBeforeAddNewTask={this.clearBeforeAddNewTask}
                changeFilterProgress={this.changeFilterProgress}
                changeFilterLabel={this.changeFilterLabel}
                changeFilterPriority={this.changeFilterPriority}
                changeSortType={this.changeSortType}
              />

              {/* DISPLAY */}

              <TaskList
                tasks={tasks}
                // tasks={listOfTasks.list}
                editTask={this.editTask}
                changeProgress={this.changeProgress}
                filterType={filterType}
                filterProgress={filterProgress}
                filterLabel={filterLabel}
                filterPriority={filterPriority}
                changeFilterSearch={this.changeFilterSearch}
                filterSearch={filterSearch}
                sortType={sortType}
              />
            </div>
          </div>
          {/* The Modal */}
          <Modal
            addNewTask={this.addNewTask}
            isAddNewTask={isAddNewTask}
            taskEditing={taskEditing}
            onEditTask={this.onEditTask}
          />
        </div>
      </div>
    );
  }
}

export default App;
