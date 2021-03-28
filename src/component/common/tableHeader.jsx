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

  render() {
    const { columns } = this.props;
    return (
      <React.Fragment>
        <thead>
          <tr>
            {columns.map((label) => (
              <th
                key={label.path || label.key}
                onClick={() => this.raiseSort(label.path)}
                scope="col"
              >
                {label.name}
              </th>
            ))}
          </tr>
        </thead>
      </React.Fragment>
    );
  }
}

export default TableHeader;
