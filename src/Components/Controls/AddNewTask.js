import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../Actions/index";

class AddNewTask extends Component {
  handleAddNewTask = () => {
    this.props.convertIsAddNewTask();
    this.props.clearForm();
  };

  render() {
    return (
      <button
        type="button"
        className="btn my-3 btn--newTask"
        data-toggle="modal"
        data-target="#modalTask"
        onClick={this.handleAddNewTask}
      >
        <i className="fa fa-pencil-square-o" />
        Tạo Task mới
      </button>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    convertIsAddNewTask: () => dispatch(actions.convertIsAddNewTask()),
    clearForm: () => dispatch(actions.clearForm()),
  };
};

export default connect(null, mapDispatchToProps)(AddNewTask);
