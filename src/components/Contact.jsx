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

function Example({title}) {
  const [show, setShow] = React.useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Button onClick={handleShow} variant="light" size="lg" style={{backgroundColor: "white", color:"black", padding: 0}}><u>{title}</u></Button>

      <Modal show={show} onHide={handleClose} animation={true}  size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered>
        <Modal.Header closeButton style={{backgroundColor: "orange", color: "white", fontSize: "large"}}>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
       
      <div class="row">    
        <div class="col-lg-7">
        <Card.Img style={{ height: '28rem' }} variant="top" src="https://www.cookingclassy.com/wp-content/uploads/2012/12/45+minute+cinnamon+rolls9.jpg" />
        </div>

        <div class="col-lg-5">

        <div class="row">
          <p>Glazing</p>
   

          <div class="row align-items-center">
            <div class="col-lg-6">
            
              <Button as="input" size="sm" variant="light" style={{width: "9rem", backgroundColor:"orange", color:"white"}} type="button" onclick={<Example title={"alia"}/>} value="None" />
 
            </div>

            <div class="col-lg-6">
             <Button as="input" size="sm" variant="light" style={{width: "9rem", backgroundColor:"orange", color:"white"}} type="button" value="Vanilla-Milk" />{' '}
            </div>
            </div>

          <div class="row my-2 align-items-center">
         <div class="col-lg-6">
              <Button as="input" size="sm" variant="light" style={{width: "9rem", backgroundColor:"orange", color:"white"}} type="button" value="Sugar-Milk" />
            </div>

            <div class="col-lg-6">
             <Button as="input" size="sm" variant="light" style={{width: "9rem", backgroundColor:"orange", color:"white"}} type="button" value="Double" />{' '}
            </div>
          </div>
          </div>

  

        <div class="row align-items-center my-4"> <p>Quantity</p>
          <div class="row align-items-center">
            <div class="col-lg-6">
              <Button as="input" size="sm" variant="light" style={{width: "9rem", backgroundColor:"orange", color:"white"}} type="button" value="1" />
            </div>

            <div class="col-lg-6">
             <Button as="input" size="sm" variant="light" style={{width: "9rem", backgroundColor:"orange", color:"white"}} type="button" value="2" />{' '}
            </div>
            </div>

          <div class="row my-2 align-items-center">
         <div class="col-lg-6">
              <Button as="input" size="sm" variant="light" style={{width: "9rem", backgroundColor:"orange", color:"white"}} type="button" value="6" />
            </div>

            <div class="col-lg-6">
             <Button as="input" size="sm" variant="light" style={{width: "9rem", backgroundColor:"orange", color:"white"}} type="button" value="12" />{' '}
            </div>
          </div>  

 

          </div>

        </div>
   
        </div>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="link" style={{color: "black"}} onClick={handleClose}>
            Continue Browsing
          </Button>
          <Button variant="outline-light" style={{color: "white", backgroundColor: "orange"}} onClick={handleClose}>
            Add to Cart
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
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