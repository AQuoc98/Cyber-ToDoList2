import React, { Component } from "react";
import { Checkbox, CheckboxGroup } from "react-checkbox-group";
import { connect } from "react-redux";
import * as actions from "../../Actions/index";

class Modal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      name: "",
      labelArr: [],
      priority: "",
      memberIDArr: [],
      status: 1,
      description: "",
    };
  }

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  onSubmit = (event) => {
    event.preventDefault();
    if (this.props.isAddNewTask) {
      this.props.addTask(this.state);
    } else {
      this.props.updateTask(this.state);
    }
  };

  memberChanged = (newMember) => {
    this.setState({
      memberIDArr: newMember,
    });
  };

  labelChanged = (newLabel) => {
    this.setState({
      labelArr: newLabel,
    });
  };

  clearForm = () => {
    this.setState({
      name: "",
      labelArr: [],
      priority: "",
      memberIDArr: [],
      description: "",
    });
  };

  componentWillReceiveProps = (nextProps) => {
    if (nextProps && nextProps.taskEditing) {
      let {
        id,
        name,
        labelArr,
        priority,
        memberIDArr,
        status,
        description,
      } = nextProps.taskEditing;
      this.setState({
        id,
        name,
        labelArr,
        priority,
        memberIDArr,
        status,
        description,
      });
    }
  };

  render() {
    return (
      <div className="modal fade" id="modalTask">
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            {/* Modal Header */}
            <div className="modal-header">
              <h4 className="modal-title">
                {this.props.isAddNewTask ? "Thêm Task" : "Sửa Task"}
              </h4>
              <button type="button" className="close" data-dismiss="modal">
                ×
              </button>
            </div>
            <form onSubmit={this.onSubmit}>
              {/* Modal body */}
              <div className="modal-body">
                <div className="form-group">
                  <label htmlFor="taskName">Tên công việc:</label>
                  <input
                    type="text"
                    className="form-control"
                    name="name"
                    onChange={this.onChange}
                    value={this.state.name}
                  />
                  {/* Name trước là tên của thuộc tính name, name sau là tên của thằng state */}
                </div>
                <div className="form-group">
                  <label htmlFor="description">Mô tả:</label>
                  <textarea
                    className="form-control"
                    rows={2}
                    id="description" // có htmlFor nên k xóa cái id = "description" được
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

                <CheckboxGroup
                  checkboxDepth={2} // This is needed to optimize the checkbox group
                  name="memberIDArr"
                  value={this.state.memberIDArr}
                  onChange={this.memberChanged}
                >
                  <label>
                    <Checkbox value="user_2" /> Phó Nghĩa Văn
                  </label>
                  <label>
                    <Checkbox value="user_3" /> Nguyễn Tiến Minh Tuấn
                  </label>
                  <label>
                    <Checkbox value="user_4" /> Đặng Trung Hiếu
                  </label>
                  <label>
                    <Checkbox value="user_5" /> Trương Tấn Khải
                  </label>
                </CheckboxGroup>

                <br />

                <CheckboxGroup
                  checkboxDepth={2} // This is needed to optimize the checkbox group
                  name="labelArr"
                  value={this.state.labelArr}
                  onChange={this.labelChanged}
                >
                  <label>
                    <Checkbox value="Frontend" /> Frontend
                  </label>
                  <label>
                    <Checkbox value="Backend" /> Backend
                  </label>
                  <label>
                    <Checkbox value="API" /> API
                  </label>
                  <label>
                    <Checkbox value="Issue" /> Issue
                  </label>
                </CheckboxGroup>
              </div>
              {/* Modal footer */}
              <div className="modal-footer">
                <button type="submit" className="btn btn-success">
                  {this.props.isAddNewTask ? "Thêm Task" : "Sửa Task"}
                </button>
                <button
                  type="button"
                  className="btn btn-danger"
                  data-dismiss="modal"
                >
                  Đóng
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    taskEditing: state.taskEditing,
    isAddNewTask: state.isAddNewTask,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addTask: (newTask) => dispatch(actions.addTask(newTask)),
    updateTask: (task) => dispatch(actions.updateTask(task)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
