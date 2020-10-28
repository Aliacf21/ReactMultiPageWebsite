import React from "react";
import { Link, withRouter } from "react-router-dom";



function Navigation(props) {
  return (
    <div className="navigation">
      <nav class="navbar navbar-expand-lg" style={{backgroundColor: "orange", color: "white"}}>
        <div class="container">
          <Link class="navbar-brand" to="/" style={{color: "white"}}>
            Bun-Bun Bake Shop
          </Link>

          <div class="collapse navbar-collapse" id="navbarResponsive">
            <ul class="navbar-nav ml-auto">
              <li
                class={`nav-item  ${
                  props.location.pathname === "/" ? "active" : ""
                }`}
              >
                <Link class="nav-link" to="/" style={{color: "white"}}>
                  Home
                  <span class="sr-only">(current)</span>
                </Link>
              </li>
              <li
                class={`nav-item  ${
                  props.location.pathname === "/about" ? "active" : ""
                }`}
              >
                <Link  class="nav-link" to="/about" style={{color: "white"}}>
                  Products
                </Link>
              </li>
              <li
                class={`nav-item  ${
                  props.location.pathname === "/contact" ? "active" : ""
                }`}
              >
                <Link class="nav-link" to="/contact" style={{color: "white"}}>
                  Shopping Cart
                </Link>
              </li>

            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default withRouter(Navigation);
