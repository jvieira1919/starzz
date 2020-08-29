import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Nav() {
  return (
    <nav id="nav" className="navbar navbar-expand-lg">
      <Link
        id="search"
        to="/"
        className={
          window.location.pathname === "/" || window.location.pathname === "/"
            ? "nav-link active"
            : "nav-link"
        }
      >
        {" "}
        Search a Book{" "}
      </Link>
      <Link
        id="saved"
        to="/saved"
        className={
          window.location.pathname === "/saved" ||
          window.location.pathname === "/saved"
            ? "nav-link active"
            : "nav-link"
        }
      >
        {" "}
        Books Saved
      </Link>
    </nav>
  );
}

export default Nav;
