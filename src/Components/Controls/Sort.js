import React, { Component } from "react";

class Sort extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sortType: ""
    };
  }
  onChange = event => {
    this.setState(
      {
        [event.target.name]: event.target.value
      },
      () => {
        this.props.changeSortType(this.state.sortType);
      }
    );
  };
  render() {
    return (
      <div className="form-group text-left">
        <label>Sắp xếp theo công việc</label>
        <select
          className="form-control"
          name="sortType"
          onChange={this.onChange}
        >
          <option value="asc">Từ A đến Z</option>
          <option value="desc">Từ Z đến A</option>
        </select>
      </div>
    );
  }
}

export default Sort;
