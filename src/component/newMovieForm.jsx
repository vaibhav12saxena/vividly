import React, { Component } from "react";
import Form from "./common/form";
import Joi from "joi-browser";
import { getGenres } from "../Starter Code/services/fakeGenreService";
import { getMovie, saveMovie } from "../Starter Code/services/fakeMovieService";
class NewMovieForm extends Form {
  state = {
    data: {
      title: "",
      dailyRentalRate: 0,
      numberInStock: 0,
      _id: "",
      genres: {},
    },
    error: {},
  };
  componentDidMount() {
    if (this.props._id) {
      this.setState({ data: getMovie(this.props._id) });
    }
  }

  schema = {
    title: Joi.string().required(),
    dailyRentalRate: Joi.number().min(0).max(10).required(),
    _id: Joi,
    genre: Joi,
    // genre: Joi.string().required(),
    numberInStock: Joi.number().integer().min(0).max(100).required(),
  };
  genre = getGenres();
  doSubmit = () => {
    saveMovie(this.state.data);
    this.props.history.push("/movies");
    console.log(this.state.data);
  };
  render() {
    return (
      <div>
        <h1>Movie Form</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("title", "Title")}
          {this.renderInput("numberInStock", "Number In Stock")}
          {this.renderInput("dailyRentalRate", "Rate")}
          {this.renderButton("Save")}
        </form>
      </div>
    );
  }
}

export default NewMovieForm;
