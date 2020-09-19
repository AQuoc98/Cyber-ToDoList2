import React, { Component } from "react";

class FilterLabel extends Component {
  hanldeFilterLabel = filterLabel => {
    this.props.changeFilterLabel(filterLabel);
  };

  render() {
    return (
      <div className="filter filter--label">
        <ul className="list-unstyled text-left">
          Nhãn
          <li
            className="py-1 display-5 lead"
            onClick={this.hanldeFilterLabel.bind(this, -1)}
          >
            Tất cả
          </li>
          <li
            className="py-1 display-5 lead"
            onClick={this.hanldeFilterLabel.bind(this, "Frontend")}
          >
            <i className="fa fa-circle mr-2" />
            Frontend
          </li>
          <li
            className="py-1 display-5 lead"
            onClick={this.hanldeFilterLabel.bind(this, "Backend")}
          >
            <i className="fa fa-circle mr-2" />
            Backend
          </li>
          <li
            className="py-1 display-5 lead"
            onClick={this.hanldeFilterLabel.bind(this, "API")}
          >
            <i className="fa fa-circle mr-2" />
            API
          </li>
          <li
            className="py-1 display-5 lead"
            onClick={this.hanldeFilterLabel.bind(this, "Issue")}
          >
            <i className="fa fa-circle mr-2" />
            Issue
          </li>
        </ul>
      </div>
    );
  }
}

export default FilterLabel;
