import Like from "./common/like";
import React, { Component } from "react";
import Table from "./common/table";
class MoviesTable extends Component {
  columns = [
    { name: "Title", path: "title" },
    { name: "Genre", path: "genre.name" },
    { name: "Stock", path: "numberInStock" },
    { name: "Rate", path: "dailyRentalRate" },
    {
      key: "like",
      content: (item) => (
        <Like onClick={() => this.props.onLike(item)} liked={item.liked} />
      ),
    },
    {
      key: "action",
      content: (item) => (
        <button
          className="btn btn-danger btn-sm"
          onClick={() => this.props.onDelete(item)}
        >
          Delete
        </button>
      ),
    },
  ];
  render() {
    const { movies, sortColumn, onSort } = this.props;
    return (
      <Table
        columns={this.columns}
        sortColumn={sortColumn}
        onSort={onSort}
        data={movies}
      />
    );
  }
}

export default MoviesTable;
