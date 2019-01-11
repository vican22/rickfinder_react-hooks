import React from "react";
import { Router, Link } from "@reach/router";
import "./App.css";
import Search from "./Search";
import Details from "./Details";
import "./fonts.css";

const App = () => {
  return (
    <div className="app">
      <header>
        <Link to="/">
          <h1>RickFinder</h1>
        </Link>
      </header>
      <Router>
        <Search path="/" />
        <Details path="/details/:id" />
      </Router>
    </div>
  );
};

export default App;
