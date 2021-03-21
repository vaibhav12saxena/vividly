import React, { Component } from "react";
import { getMovies } from "../Starter Code/services/fakeMovieService";
class Movies extends Component {
  state = {
    movies: getMovies(),
  };
    render() {
       const { length:count } = this.state.movies;
        if(count===0) return "There are no movies in the database";
    return (
      <React.Fragment>
        <div>{`Showing ${count} movies in the databse`}</div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Title</th>
              <th scope="col">Genre</th>
              <th scope="col">Stock</th>
              <th scope="col">Rate</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {this.state.movies.map((movie) => (
              <tr key={movie._id}>
                <td>{movie.title}</td>
                <td>{movie.genre.name}</td>
                <td>{movie.numberInStock}</td>
                <td>@{movie.dailyRentalRate}</td>
                <td>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => this.handleDelete(movie)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </React.Fragment>
    );
  }

//   heading() {
//     const { movies } = this.state;
//     return movies.length > 0
//       ? `Showing ${movies.length} movies in the databse`
//       : "There are no movies in the database";
//   }
  handleDelete= (movie)=> {
    const movies = this.state.movies.filter(
      (element) => element._id !== movie._id
    );
    this.setState({ movies });
  }
}

export default Movies;
