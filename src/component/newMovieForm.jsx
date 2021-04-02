import React, { Component } from "react";
import Form from "./common/form";
import Joi from "joi-browser";
import { getGenres } from "../Starter Code/services/fakeGenreService";
import { getMovie, saveMovie } from "../Starter Code/services/fakeMovieService";
import { genres } from "./../Starter Code/services/fakeGenreService";
class NewMovieForm extends Form {
  state = {
    data: {
      title: "",
      dailyRentalRate: "",
      numberInStock: "",
      genreId: "",
    },
    genres: [],
    error: {},
  };

  schema = {
    title: Joi.string().required().label("Title"),
    dailyRentalRate: Joi.number().min(0).max(10).required(),
    _id: Joi.string(),
    genreId: Joi.string().required().label("Genre"),
    numberInStock: Joi.number()
      .integer()
      .min(0)
      .max(100)
      .required()
      .label("Number In Stock"),
  };
  componentDidMount() {
    const genres = getGenres();
    this.setState({ genres });
    if (this.props._id === "new") return;

    const movie = getMovie(this.props._id);
    if (!movie) return this.props.history.replace("/not-found");

    this.setState({ data: this.mapViewModel(movie) });
  }
  mapViewModel(movie) {
    return {
      _id: movie._id,
      title: movie.title,
      dailyRentalRate: movie.dailyRentalRate,
      numberInStock: movie.numberInStock,
      genreId: movie.genre._id,
    };
  }

  doSubmit = () => {
    saveMovie(this.state.data);
    this.props.history.push("/movies");
  };
  render() {
    return (
      <div>
        <h1>Movie Form</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("title", "Title")}
          {this.renderSelect("genreId", "Genre", this.state.genres)}
          {this.renderInput("numberInStock", "Number In Stock")}
          {this.renderInput("dailyRentalRate", "Rate")}
          {this.renderButton("Save")}
        </form>
      </div>
    );
  }
}

export default NewMovieForm;
