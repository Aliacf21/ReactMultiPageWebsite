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

let loaded_todoList = load()

class Navigation extends Component {
     state = {
    //Using || backup assignment
    todoList: loaded_todoList || default_todoList,
    newTodoContent: ""

  };


render () {

let todoList = this.state.todoList;
let itemsInList = todoList.length

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
                  this.props.location.pathname === "/ReactMultiPageWebsite" ? "active" : ""
                }`}
              >
                <Link class="nav-link" to="/ReactMultiPageWebsite" style={{color: "white"}}>
                  Home
                  <span class="sr-only">(current)</span>
                </Link>
              </li>
              <li
                class={`nav-item  ${
                  this.props.location.pathname === "/ReactMultiPageWebsite/about" ? "active" : ""
                }`}
              >
                <Link  class="nav-link" to="/ReactMultiPageWebsite/about" style={{color: "white"}}>
                  Products
                </Link>
              </li>
              <li onClick= {() => window.location.reload(true)}
                class={`nav-item  ${
                  this.props.location.pathname === "/ReactMultiPageWebsite/contact" ? "active" : ""
                }`}
              >
  
                <Link class="nav-link" to="/ReactMultiPageWebsite/contact" style={{color: "white"}}>
                  Shopping Cart   <span class="dot" style={{textAlign:"center"}}>{itemsInList}</span>

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
