import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../Actions/index";

class InitializeTask extends Component {
  render() {
    let { initializeTask } = this.props;
    return (
      <button
        type="button"
        className="btn btn--initializeTask"
        onClick={initializeTask}
      >
        <i className="fa fa-pencil-square-o" />
        Lấy Task từ LocalStorage
      </button>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    initializeTask: () => dispatch(actions.initializeTasks()),
  };
};

export default connect(null, mapDispatchToProps)(InitializeTask);
