import React, { Component } from "react";

class TaskItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedProgress: "",
    };
  }

  onChange = event => {
    this.setState(
      {
        [event.target.name]: event.target.value
      },
      () => {
        this.props.changeProgress(
          this.props.item.id,
          this.state.selectedProgress
        );
      }
    );
  };

  getLabelColor = label => {
    let labelColor;
    switch (label) {
      case "Frontend":
        labelColor = "#389E0D";
        break;
      case "Backend":
        labelColor = "#722ED1";
        break;
      case "API":
        labelColor = "#13C2C2";
        break;
      case "Issue":
        labelColor = "#CF1322";
        break;
      default:
        labelColor = "";
        break;
    }
    return labelColor;
  };

  handleEditing = () => {
    this.props.editTask(this.props.item);
  };

  render() {
    // const index = this.props.index;
    // const item = this.props.item;

    // destructuring trong ES6
    let { index, item } = this.props;

    // Label
    let labelElm = item.labelArr.map((label, index) => {
      return (
        <i
          key={index}
          className="fa fa-circle"
          style={{ color: this.getLabelColor(label) }}
        />
      );
    });

    // Priority
    let priorityElm;
    let priorityClass;
    switch (parseInt(item.priority, 10)) {
      case 1:
        priorityElm = "Cao";
        priorityClass = "text-danger";
        break;
      case 2:
        priorityElm = "Trung Bình";
        priorityClass = "text-success";
        break;
      case 3:
        priorityElm = "Thấp";
        priorityClass = "text-primary";
        break;

      default:
        break;
    }

    // Users
    let userElm = item.memberIDArr.map((member, index) => {
      return (
        <img
          key={index}
          src={`./img/${member}.jpg`}
          className="user"
          alt="user"
        />
      );
    });

    // Progress

    let progressClass;
    switch (parseInt(item.status, 10)) {
      case 1:
        progressClass = "fa-hourglass-start";

        break;
      case 2:
        progressClass = "fa-anchor";

        break;
      case 3:
        progressClass = "fa-check-square-o";

        break;
      case 4:
        progressClass = "fa-trash-o";

        break;

      default:
        break;
    }

    return (
      <tr>
        <td className="text-center">{index + 1}</td>
        <td className="text-center">{item.name}</td>
        <td className="text-center">{labelElm}</td>

        <td className={`${priorityClass} font-weight-bold text-center`}>
          {priorityElm}
        </td>

        <td className="text-center">{userElm}</td>
        <td className="text-center d-flex">
          <button
            type="button"
            className="btn btn-outline-primary"
            onClick={this.handleEditing}
            data-toggle="modal"
            data-target="#modalTask"
          >
            Sửa
          </button>

          <div className="form-group mx-2 my-0">
            <select
              className="form-control"
              onChange={this.onChange}
              name="selectedProgress"
            >
              <option value={-1}>Chọn tình trạng</option>
              <option value={1}>Đang tiến hành </option>
              <option value={2}>Chưa bắt đầu</option>
              <option value={3}>Hoàn thành</option>
              <option value={4}>Hủy bỏ</option>
            </select>
          </div>
        </td>

        <td className="text-center">
          <i className={`fa ${progressClass}  mr-2`} />
        </td>
      </tr>
    );
  }
}

export default TaskItem;
