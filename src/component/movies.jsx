import div, { Component } from "react";
import { getMovies } from "../Starter Code/services/fakeMovieService";
import { getGenres } from "../Starter Code/services/fakeGenreService";
import MoviesTable from "./moviesTable";
import Pagination from "./common/pagination";
import ListGroup from "./common/ListGroup";
import { paginate } from "../utils/paginate";
class Movies extends Component {
  state = {
    movies: [],
    genres: [],
    pageSize: 4,
    currentPage: 1,
    sortColumn: { path: "title", order: "asc" },
  };

  componentDidMount() {
    const genres = [{ _id: "", name: "All Genres" }, ...getGenres()];
    this.setState({ genres, movies: getMovies() });
  }
  render() {
    const { length: count } = this.state.movies;
    const {
      pageSize,
      currentPage,
      movies: allMovies,
      genres,
      selectedGenre,
    } = this.state;
    if (count === 0) return "There are no movies in the database";
    const filteredMovies =
      selectedGenre && selectedGenre._id
        ? allMovies.filter((m) => m.genre._id === selectedGenre._id)
        : allMovies;
    const movies = paginate(filteredMovies, currentPage, pageSize);
    return (
      <div className="row">
        <div className="col-3">
          <ListGroup
            genres={genres}
            onItemSelect={this.handleGenreSelect}
            selectedItem={selectedGenre}
          />
        </div>
        <div className="col">
          <div>{`Showing ${filteredMovies.length} movies in the databse`}</div>
          <MoviesTable
            movies={movies}
            onLike={this.handleLike}
            onDelete={this.handleDelete}
            onSort={this.handleSort}
          />
          <Pagination
            itemsCount={filteredMovies.length}
            pageSize={pageSize}
            currentPage={currentPage}
            onPageChange={this.handlePageClick}
          />
        </div>
      </div>
    );
  }

  handleDelete = (movie) => {
    const movies = this.state.movies.filter(
      (element) => element._id !== movie._id
    );
    this.setState({ movies });
  };
  handleLike = (movie) => {
    const movies = [...this.state.movies];
    const index = movies.indexOf(movie);
    movies[index] = { ...movie }; // why?
    movies[index].liked = !movies[index].liked;
    this.setState({ movies });
  };
  handlePageClick = (page) => {
    this.setState({ currentPage: page });
  };
  handleGenreSelect = (genre) => {
    this.setState({ selectedGenre: genre, currentPage: 1 });
  };
  handleSort = (path) => {
    this.setState({ sortColumn: { path, order: "asc" } });
  };
}

export default Movies;
