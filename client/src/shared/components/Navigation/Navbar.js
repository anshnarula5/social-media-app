import React from "react";
import {Link} from "react-router-dom"

const Navbar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container">
        <a class="navbar-brand" href="#">
          Navbar
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <Link to = "/" class="nav-link " aria-current="page" href="#">
                All Users
              </Link>
            </li>
            <li class="nav-item">
              <Link to = "/:uid/places" class="nav-link" href="#">
                My Places
              </Link>
            </li>
            <li  class="nav-item">
              <Link to = "/places/new" class="nav-link" href="#">
                Add Place
              </Link>
            </li>
            <li  class="nav-item">
              <Link to = "/auth" class="nav-link" href="#">
                Auth
              </Link>
            </li>
            
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
