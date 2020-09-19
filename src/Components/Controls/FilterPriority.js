import React, { Component } from "react";

class FilterPriority extends Component {
  hanldeFilterPriority = e => {
    this.props.changeFilterPriority(e.target.value);
  };

  render() {
    return (
      <div
        className="form-group text-left"
        name="filterPriority"
        onChange={this.onChange}
      >
        <label htmlFor="sel1">Độ ưu tiên</label>
        <select className="form-control" onChange={this.hanldeFilterPriority}>
          <option value={-1} className="font-weight-bold">
            Tất cả
          </option>
          <option value={3} className="text-info font-weight-bold">
            Thấp
          </option>
          <option value={2} className="text-success font-weight-bold">
            Trung bình
          </option>
          <option value={1} className="text-danger font-weight-bold">
            Cao 
          </option>
        </select>
      </div>
    );
  }
}

export default FilterPriority;
