import React, { Component } from "react";
import { connect } from "react-redux";

// import components
import TaskItem from "./TaskItem";
import FilterString from "../Controls/FilterString";

class TaskList extends Component {
  render() {
    let { tasks } = this.props;

    let filterTasks = [];

    switch (this.props.filter.filterType) {
      case "Status":
        if (parseInt(this.props.filter.filterValue, 10) === -1) {
          filterTasks = tasks;
        } else {
          for (let task of tasks) {
            if (parseInt(task.status, 10) === this.props.filter.filterValue) {
              filterTasks = [...filterTasks, task];
            }
          }
        }
        break;

      case "":
        filterTasks = tasks;
        break;
      default:
        break;
    }

    const taskItemElm = filterTasks.map((task, index) => {
      return (
        <TaskItem
          key={index} // key không phải props =
          task={task}
          index={index}
        />
      );
    });
    return (
      <div className="col-md-9 px-0">
        <div className="container-fluid px-0">
          <div className="row header header--right d-flex align-items-center mx-0">
            <div className="col-md-6">
              <div className=" d-flex justify-content-between">
                <h3 className="text-left ml-2 ">Danh sách công việc</h3>
              </div>
            </div>

            <div className="col-md-6">
              <FilterString />
            </div>
          </div>
        </div>
        <div className="px-3">
          <table className="table table-hover">
            <thead>
              <tr>
                <th className="text-center">STT</th>
                <th className="text-center">Công việc</th>
                <th className="text-center">Nhãn</th>
                <th className="text-center">Độ ưu tiên</th>
                <th className="text-center">Người thực hiện</th>
                <th className="text-center">Xử lý</th>
                <th className="text-center">Tình trạng</th>
              </tr>
            </thead>
            <tbody>{taskItemElm}</tbody>
          </table>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    tasks: state.tasks,
    filter: state.filter,
  };
};

export default connect(mapStateToProps, null)(TaskList);
