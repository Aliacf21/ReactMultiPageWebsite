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



class Contact extends Component {
 
 
  state = {
  };


 componentDidMount() {
    let loaded_todoList = load()
     this.setState(
    //Using || backup assignment
    {todoList: loaded_todoList || default_todoList,
    newTodoContent: ""
    }
  );
  }


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
    this.props.decrease()
  };




render() {


let todoList = this.state.todoList || default_todoList;
let itemsInList = todoList.length || 0;

   const MyCard = ({i, foodType, glazing, quantity, total, image}) => {
    return (
      <div class="shadow card border-dark mb-3 rounded-0" style={{ height: '18rem' }}>
      <div class="row">
     <div class="col-lg-3"><Card.Img variant="top" src={image} style={{ height: '17.9rem', width: "18rem" }}/></div> 
      <div class="col-lg-6"><i>Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</i></div> 
      <div class="col-lg-2"><i>Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</i></div> 

      </div>
             <button className="DeleteIcon" onClick={(e) => this.deleteItem(e,i)}>{"Edit"}</button>
   
      </div>);
  }
    console.log("rerender");

    let list_content = [];
     if (this.state.todoList != undefined){
    for (let i = 0; i < this.state.todoList.length; i++) {
      let todo = this.state.todoList[i];
      list_content.push(
        <div>

   <div class="row my-0">
    <div class="col-lg-1"></div>
     <div class="col-lg-6"><h5>Checkout Item</h5></div> 
      <div class="col-lg-3"><h5>Quantity</h5></div> 
       <div class="col-lg-2"><h5>Price</h5></div> 
   </div>

      <div class="row">  
        <div class="col-lg-1"></div>
            <div class="col-lg-10">
              <MyCard i ={i} foodType={todo.foodType} glazing={todo.glazing} quantity={todo.quantity} total={todo.total} image={todo.image}/>
            </div>
          </div>

             <div class="col-lg-1"></div>
        </div>

      );
      console.log(todo);
      }
    }
      

    return (
      <div className="App">
        <div className="Header">
        </div>
        {list_content}
      </div>
    );
  }
}

export default Contact;