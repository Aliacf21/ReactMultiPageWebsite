import React, {Component} from "react";
import { Card, Button, Modal } from "react-bootstrap";


const default_todoList = [];

function load(){
  let str_todos = localStorage.getItem('todoList')
  //Using && to condition on str_todos else null
  return (str_todos && JSON.parse(str_todos)) 
  }

function store(todoList){
  localStorage.setItem('todoList',JSON.stringify(todoList))
}



let loaded_todoList = load()


class Contact extends Component {
  state = {
    //Using || backup assignment
    todoList: loaded_todoList || default_todoList,
    newTodoContent: ""
  };

   toggleDone = (evt, i) => {
    let todoList = this.state.todoList;
    todoList[i].finished = !todoList[i].finished;
    this.setState({ todoList: todoList });
    store(todoList)
  };
   addItem = () => {
    //TODO 1: Make the add button work (hint: this.setState())
    let todoList = this.state.todoList;
    todoList.push({content: this.state.newTodoContent, finished:false})
    this.setState({ todoList: todoList });
    store(todoList)
  };
   deleteItem = (event, i) => {
    //TODO 2: Make the delete button work (hint: event.stopPropagation())
    event.stopPropagation()
    let todoList = this.state.todoList;
    todoList.splice(i,1)
    this.setState({ todoList: todoList });
    store(todoList)
    window.location.reload(true);
  };




render() {




   const MyCard = ({FoodType, Glazing, Quantity, Total}) => {
    return (
      <div class="shadow card border-dark mb-3 rounded-0" style={{ height: '18rem' }}>
      <div class="row align-items-center">  
        
          <div class="card-body">
              <div class="row align-items-center">  
                <div class="col-lg-4 align-items-center"><Card.Img variant="top" src="https://www.cookingclassy.com/wp-content/uploads/2012/12/45+minute+cinnamon+rolls9.jpg" style={{ height: '16rem', width: "16rem" }}/></div>
                <div class="col-lg-6 align-items-center"><Card.Text>
                  <i>FoodType: {FoodType}</i><br></br>
                  <i>Glazing: {Glazing}</i><br></br>
                  <i>Quantity: {Quantity}</i><br></br>
                  <i>Total: {Total}</i><br></br>
                </Card.Text></div>
          </div>
                
              </div>
              </div>
      </div>);
  }
    console.log("rerender");

    let list_content = [];
    for (let i = 0; i < this.state.todoList.length; i++) {
      let todo = this.state.todoList[i];
      list_content.push(
        <li>
          FoodType: {todo.foodType} <br></br>
          Glazing: {todo.glazing} <br></br>
          Quantity: {todo.quantity} <br></br>
          Total: {todo.total} <br></br>
          <div className="Filler"></div>
          <button className="DeleteIcon" onClick={(e) => this.deleteItem(e,i)}>
            {"x"}
          </button>
           <div class="row">  
            <div class="col-lg-12">
              <MyCard FoodType={todo.foodType} Glazing={todo.glazing} Quantity={todo.quantity} Total={todo.total}/>
            </div>
          </div>
        </li>
      );
      console.log(todo);
      }
      

    return (
      <div className="App">
        <div className="Header">
          <h5>Checkout Items</h5>
        </div>
        <ul>{list_content}</ul>
      </div>
    );
  }
}

export default Contact;