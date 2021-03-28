import Like from "./common/like";
import React, { Component } from "react";
import TableHeader from "./common/tableHeader";
import TableBody from "./common/tableBody";
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
      <table className="table">
        <TableHeader
          columns={this.columns}
          sortColumn={sortColumn}
          onSort={onSort}
        />
        <TableBody data={movies} columns={this.columns} />
      </table>
    );
  }
}

export default MoviesTable;
