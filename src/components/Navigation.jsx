import React, {Component} from "react";
import { Link, withRouter } from "react-router-dom";
import { Card, Button, Modal, ButtonGroup, ToggleButtonGroup, ToggleButton } from "react-bootstrap";
import "./nav.css";




class Navigation extends Component {



render () {


  return (
    <div className="navigation">
      <nav className="navbar navbar-expand-lg" style={{backgroundColor: "orange", color: "white", height: "4rem"}}>
        <div className="container">
          <Link className="navbar-brand" to="/ReactMultiPageWebsite" style={{color: "white"}}>
           <b> Bun-Bun Bake Shop</b>
          </Link>

          <div className="collapse navbar-collapse" id="navbarResponsive">
            <ul className="navbar-nav ml-auto">
              <li
                className={`nav-item  ${
                  this.props.location.pathname === "/ReactMultiPageWebsite" ? "active" : ""
                }`}
              >
                <Link className="nav-link" to="/ReactMultiPageWebsite" style={{color: "white"}}>
                  Home
                  <span className="sr-only">(current)</span>
                </Link>
              </li>
              <li
                className={`nav-item  ${
                  this.props.location.pathname === "/ReactMultiPageWebsite/about" ? "active" : ""
                }`}
              >
                <Link  className="nav-link" to="/ReactMultiPageWebsite/about" style={{color: "white"}}>
                  Products
                </Link>
              </li>
              <li 
                className={`nav-item  ${
                  this.props.location.pathname === "/ReactMultiPageWebsite/contact" ? "active" : ""
                }`}
              >
  
                <Link className="nav-link" to="/ReactMultiPageWebsite/contact" style={{color: "white"}}>
                  Shopping Cart <span className="dot" style={{textAlign:"center"}}>{this.props.cartItemCount}</span>

                </Link>
 
              </li>


            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
}

export default withRouter(Navigation);
