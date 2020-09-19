import React, { Component } from 'react';
import * as actions from '../../actions';

// HOC - higher-order component
// Wrapper (bao) cái component của mình bằng một cái hàm/component nào
// mà trong hàm or component có chứa một số  tính năng nào đó
// bản chất của HOC nói chung là một cái design pattern

// (xử lý ngôn ngữ   (translate   (từ điển anh việt)))
import { connect } from 'react-redux'; // mapStateToProps, mapDispatchToProps
import { withRouter } from 'react-router-dom' // location/match/history

class TaskItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedStatus: ""
        }
    }


    getLabelColor = (label) => {
        switch (label) {
            case "Frontend":
                return "#389E0D"
            case "Backend":
                return "#722ED1"
            case "API":
                return "#13C2C2"
            case "Issue":
                return "#CF1322"
            default:
                return ""
        }
    }

    getPriority = (number) => {
        switch (number) {
            case 1:
                return 'Cao'
            case 2:
                return 'Trung bình'
            case 3:
                return 'Thấp'
            default:
                return null;
        }
    }

    getPriorityClass = (number) => {
        switch (number) {
            case 1:
                return 'text-danger'
            case 2:
                return 'text-success'
            case 3:
                return 'text-info'
            default:
                return '';
        }
    }

    getProgressIcon = (number) => {
        switch (number) {
            case 1:
                return "fa-hourglass-start"
            case 2:
                return "fa-anchor"
            case 3:
                return "fa-check-square-o"
            case 4:
                return "fa-trash-o"

            default:
                return ""
        }
    }

    onChange = (e) => {
        const { item } = this.props;
        this.setState({
            [e.target.name]: e.target.value
        }, () => {
            this.props.editStatus(item.id, parseInt(this.state.selectedStatus, 10))
        })
        // editStatus
    }

    render() {
        // const index = this.props.index;
        // const item = this.props.item;

        // destructuring trong ES6
        const { index, item } = this.props
        console.log(item)

        // render label
        const labelElm = item.labelArr.map((label, index) => {
            return <i
                key={index}
                className="fa fa-circle"
                style={{ color: this.getLabelColor(label) }}
            />
        })

        // render users
        const userElm = item.memberIDArr.map((member, index) => {
            return <img
                key={index}
                src={`./img/${member}.jpg`}
                className="user" alt="user"
            />
        })

        return (
            <tr>
                <td className="text-center">
                    {index + 1}
                </td>
                <td className="text-center">
                    {item.name}
                </td>
                <td className="text-center">
                    {labelElm}
                </td>
                <td className={`${this.getPriorityClass(item.priority)} font-weight-bold text-center`}>
                    {this.getPriority(item.priority)}
                </td>
                <td className="text-center">
                    {userElm}
                </td>
                <td className="text-center d-flex">
                    <button
                        type="button"
                        className="btn btn-outline-primary"
                        // data-toggle="modal" data-target="#modalTask"
                        onClick={() => {
                            this.props.history.push(`/edit-task/${item.id}`)
                            this.props.changeToEditTask()
                            this.props.getTaskEditing(item)
                        }}
                    >Sửa</button>

                    <div className="form-group mx-2 my-0">
                        <select
                            className="form-control"
                            name="selectedStatus"
                            id=""
                            onChange={this.onChange}
                        >
                            <option value={-1}>Chọn tình trạng</option>
                            <option value={1}>Bắt đầu</option>
                            <option value={2}>Tạm ngưng</option>
                            <option value={3}>Hoàn thành</option>
                            <option value={4}>Hủy bỏ</option>
                        </select>
                    </div>
                </td>
                <td className="text-center">
                    <i className={`fa ${this.getProgressIcon(item.status)}  mr-2`} />
                </td>
            </tr>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        changeToEditTask: () => {
            dispatch(actions.changeToEditTask())
        },
        getTaskEditing: (taskEditing) => {
            dispatch(actions.getTaskEditing(taskEditing))
        },
        editStatus: (id, status) => {
            dispatch(actions.editStatus(id, status))
        }
    }
}

export default withRouter(connect(null, mapDispatchToProps)(TaskItem));