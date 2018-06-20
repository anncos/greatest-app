import React, { Component } from "react";
import logo from "./logo.svg";
import { Header, ItemsList } from "./components";
import "./App.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          <Switch>
            <Route exact path="/" component={ItemsList} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
