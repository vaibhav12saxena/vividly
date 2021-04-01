import logo from "./logo.svg";
import "./App.css";
import Movies from "./component/movies";
import { Link, Route, Redirect, Switch } from "react-router-dom";
import Rentals from "./component/Rentals";
import Customers from "./component/Customers";
import React from "react";
import NavBar from "./component/NavBar";
import NotFound from "./component/notFound";
import MovieForm from "./component/movieForm";

function App() {
  return (
    <React.Fragment>
      <NavBar />
      <main className="container">
        <Switch>
          <Route path="/movies/:id" component={MovieForm} />
          <Route path="/movies" component={Movies} />
          <Route path="/rentals" component={Rentals} />
          <Route path="/customers" component={Customers} />
          <Route path="/not-found" component={NotFound} />
          <Redirect exact from="/" to="/movies" />
          <Redirect to="/not-found" />
        </Switch>
      </main>
    </React.Fragment>
  );
}

export default App;
