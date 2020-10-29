import React, {Component} from "react";
import { Link, withRouter } from "react-router-dom";
import { Card, Button, Modal, ButtonGroup, ToggleButtonGroup, ToggleButton } from "react-bootstrap";
import "./nav.css";


 const default_todoList = [
];

function load(){
  let str_todos = localStorage.getItem('todoList')
  //Using && to condition on str_todos else null
  return (str_todos && JSON.parse(str_todos)) 
}

function store(todoList){
  localStorage.setItem('todoList',JSON.stringify(todoList))
}


class Navigation extends Component {



 componentDidMount() {
    let loaded_todoList = load()
     this.setState(
    //Using || backup assignment
    {todoList: loaded_todoList || default_todoList,
    newTodoContent: ""
    }
  );
  }

  state = {
  };



please = () => {

  console.log("HERE" +  this.props.cartItemCount)
}



render () {


let todoList = this.state.todoList || default_todoList;
  return (
    <div className="navigation">
      <nav className="navbar navbar-expand-lg" style={{backgroundColor: "orange", color: "white"}}>
        <div className="container">
          <Link className="navbar-brand" to="/" style={{color: "white"}}>
            Bun-Bun Bake Shop
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
  
                <Link onClick={() => this.please()}className="nav-link" to="/ReactMultiPageWebsite/contact" style={{color: "white"}}>
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
