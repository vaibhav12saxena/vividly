import React, { Component } from "react";

//columns: Array
// sort event Raise
// sort Column

class TableHeader extends Component {
  raiseSort(path) {
    const sortColumn = { ...this.props.sortColumn };
    if (sortColumn.path === path)
      sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
    else {
      sortColumn.path = path;
      sortColumn.order = "asc";
    }
    this.props.onSort(sortColumn);
  }

  renderIcon = (column) => {
    const { sortColumn } = this.props;
    if (sortColumn.path !== column.path) return null;
    if (sortColumn.order === "asc") return <i className="fa fa-sort-asc"></i>;
    return <i className="fa fa-sort-desc"></i>;
  };

  render() {
    const { columns } = this.props;
    return (
      <React.Fragment>
        <thead>
          <tr>
            {columns.map((label) => (
              <th
                className="clickable"
                key={label.path || label.key}
                onClick={() => this.raiseSort(label.path)}
                scope="col"
              >
                {label.name} {this.renderIcon(label)}
              </th>
            ))}
          </tr>
        </thead>
      </React.Fragment>
    );
  }
}

export default TableHeader;
