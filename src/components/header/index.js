import React from "react";
import logo from "../../logo.svg";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div className="header">
      <Link className="logo" to="/">
        <img src={logo} className="App-logo" alt="logo" />
      </Link>
      <h1 className="header-title">The world is great</h1>
    </div>
  );
};
