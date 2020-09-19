import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addTask, editTask } from '../actions';
import { Checkbox, CheckboxGroup } from 'react-checkbox-group';
import uuid from 'uuid'; // universal unique id

class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      taskName: "",
      description: "",
      priority: -1,
      memberIDArr: [],
      labelArr: [],
      status: ""
    }
  }

  onSubmit = (e) => {
    e.preventDefault();
    const { checkAddNewTask } = this.props;

    let task
    if (checkAddNewTask) {
      task = {
        ...this.state,  // spread operator
        id: uuid(),
        name: this.state.taskName,
        priority: parseInt(this.state.priority, 10),
        status: 1
      }
      this.props.addTask(task);
    } else {
      task = {
        ...this.state,  // spread operator
        name: this.state.taskName,
        priority: parseInt(this.state.priority, 10),
      }
      this.props.editTask(task);
    }
    this.props.history.push("/secret")
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
      // computed ES6
    })
  }

  memberArrChange = (memberIDArr) => {
    this.setState({
      memberIDArr: memberIDArr
    });
  }

  labelArrChange = (labelArr) => {
    this.setState({
      labelArr
    });
  }

  componentDidMount = () => {
    const { match, taskList } = this.props
    const id = parseInt(match.params.id, 10)

    if (!id) return;

    const taskEditing = taskList.find(elm => elm.id === id)
    this.setState({
      id: taskEditing.id,
      taskName: taskEditing.name,
      description: taskEditing.description,
      priority: taskEditing.priority,
      memberIDArr: taskEditing.memberIDArr,
      labelArr: taskEditing.labelArr,
      status: taskEditing.status
    })
  }

  // React cao hon: getDerivedStateFromProps

  render() {
    const { match } = this.props
    const checkAddNewTask = match.path.indexOf("add-task") > -1
    return (
      <form onSubmit={this.onSubmit} className="container" >
        <div className="modal-content">
          {/* Modal Header */}
          <div className="modal-header">
            <h4 className="modal-title">
              {checkAddNewTask ? "THÊM TASK" : "SỬA TASK"}
            </h4>
          </div>
          {/* Modal body */}
          <div className="modal-body">
            <div className="form-group">
              <label htmlFor="taskName">Tên công việc:</label>
              <input
                type="text"
                className="form-control"
                id="taskName"
                name="taskName"
                onChange={this.onChange}
                value={this.state.taskName}
              />
            </div>
            <div className="form-group">
              <label htmlFor="description">Mô tả:</label>
              <textarea
                className="form-control"
                rows={2}
                id="description"
                name="description"
                onChange={this.onChange}
                value={this.state.description}
              />
            </div>
            <div className="form-group">
              <label htmlFor="priority">Độ ưu tiên:</label>
              <select
                className="form-control"
                id="priority"
                name="priority"
                onChange={this.onChange}
                value={this.state.priority}
              >
                <option value={-1}>Chọn độ ưu tiên</option>
                <option value={3}>Thấp</option>
                <option value={2}>Trung bình</option>
                <option value={1}>Cao</option>
              </select>
            </div>
            <label>Người thực hiện:</label>
            <br />
            <CheckboxGroup
              checkboxDepth={2} // This is needed to optimize the checkbox group
              name="memberIDArr"
              value={this.state.memberIDArr}
              onChange={this.memberArrChange}>

              <label><Checkbox value="user_1" />User 1</label>
              <label><Checkbox value="user_2" />User 2</label>
              <label><Checkbox value="user_3" />User 3</label>
              <label><Checkbox value="user_4" />User 4</label>
            </CheckboxGroup>

            <br /><br />
            <label >Nhãn:</label>
            <br />
            <CheckboxGroup
              checkboxDepth={2} // This is needed to optimize the checkbox group
              name="labelArr"
              value={this.state.labelArr}
              onChange={this.labelArrChange}>

              <Checkbox value="Frontend" />Frontend
                  <Checkbox value="Backend" />Backend
                  <Checkbox value="API" />API
                  <Checkbox value="Issue" />Issue
                </CheckboxGroup>
          </div>
          {/* Modal footer */}
          <div className="modal-footer">
            <button type="submit"
              className={`btn ${checkAddNewTask ? "btn-info" : "btn-warning"}`}
            >
              {checkAddNewTask ? "THÊM TASK" : "SỬA TASK"}
            </button>
            <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
          </div>
        </div>
      </form>
    );
  }
}

// mapStateToProps
// mapDispatchToProps

const mapStateToProps = (state) => {
  return {
    checkAddNewTask: state.checkAddNewTask,
    taskEditing: state.taskEditing,
    taskList: state.taskList
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addTask: (task) => {
      dispatch(addTask(task))
    },
    editTask: (task) => {
      dispatch(editTask(task))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Modal);