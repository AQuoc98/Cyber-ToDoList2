import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../Actions/index";

class FilterProgress extends Component {
  render() {
    return (
      <div className="filter filter--progress">
        <ul className="list-unstyled text-left">
          Lọc
          <li
            className="py-1 display-5 lead"
            onClick={this.props.filter.bind(this, "Status", -1)}
          >
            Tất cả
          </li>
          <li
            className="py-1 display-5 lead"
            onClick={this.props.filter.bind(this, "Status", 1)}
          >
            <i className="fa fa fa-hourglass-start mr-2" />
            Bắt đầu
          </li>
          <li
            className="py-1 display-5 lead"
            onClick={this.props.filter.bind(this, "Status", 2)}
          >
            <i className="fa fa-anchor" />
            Tạm ngưng
          </li>
          <li
            className="py-1 display-5 lead"
            onClick={this.props.filter.bind(this, "Status", 3)}
          >
            <i className="fa fa-check-square-o mr-2" />
            Hoàn thành
          </li>
          <li
            className="py-1 display-5 lead"
            onClick={this.props.filter.bind(this, "Status", 4)}
          >
            <i className="fa fa-trash-o mr-2" />
            Hủy bỏ
          </li>
        </ul>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    filter: (filterType, filterValue) =>
      dispatch(actions.filter(filterType, filterValue)),
  };
};

export default connect(null, mapDispatchToProps)(FilterProgress);
