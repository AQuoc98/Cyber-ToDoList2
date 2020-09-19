import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions';

class AddNewTask extends Component {
    render() {
        return (
            <button
                type="button"
                className="btn my-3 btn--newTask"
                data-toggle="modal"
                data-target="#modalTask"
                onClick={this.props.changeToAddNewTask}
            >
                <i className="fa fa-pencil-square-o" />
                Tạo Task mới
            </button>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeToAddNewTask: () => {
            dispatch(actions.changeToAddNewTask())
        }
    }
}

export default connect(null, mapDispatchToProps)(AddNewTask);