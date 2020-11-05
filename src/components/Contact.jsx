import React, {Component} from "react";
import { Card, Button, Modal, Dropdown, DropdownButton, ButtonGroup } from "react-bootstrap";


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

  //Function to Remove item from Cart 
   deleteItem = (event, i) => {
    event.stopPropagation()
    let todoList = this.state.todoList;
    todoList.splice(i,1)
    this.setState({ todoList: todoList });
    store(todoList)
    //Function which decrements the count in App.js
    this.props.decrease()
  };


render() {


let todoList = this.state.todoList || default_todoList;
let itemsInList = todoList.length || 0;
let buttonCount = 0


  //Drop down Component
  const MyDropDowns = ({activeQuantity}) => { 
    let quantityValues = [1, 2, 6, 12]
    let buttonArray = []



    const change = (x) => {
      activeQuantity = x
      console.log(document.getElementById(x).parentNode);
     
    }



    for (let index in quantityValues) {
    //Make the active dropdown button the current chosen dropdown 
    if (quantityValues[index] == activeQuantity) { buttonArray.push( <Dropdown.Item id={index} eventKey="quantityValues[index]" onClick={() => change(quantityValues[index])} active>{quantityValues[index]}</Dropdown.Item>)}
    else {
      buttonArray.push(
        <Dropdown.Item id={index} eventKey="quantityValues[index]" onClick={() => change(quantityValues[index])}>{quantityValues[index]}</Dropdown.Item>
        )
      }
    }

    return (
    <Dropdown as={ButtonGroup}>
      <Dropdown.Toggle style={{width: "120px", textAlign: "right", backgroundColor: "white", color: "black", border: "1px solid black", borderRadius: "2px"}}>{activeQuantity}</Dropdown.Toggle>
      <Dropdown.Menu a>
        {buttonArray}
      </Dropdown.Menu>

  </Dropdown>
    )}


  const ProductDescription = ({foodType, glazing, i, quantity}) => {
    let description = "Lorem ipsum dolor sit amet, consectetur adipiscing elit."
    if (foodType == "Original; Gluten-Free") { description = "Lorem ipsum dolor sit amet." }
    return(
    <div>
      <div>
          <br></br>
          <b>{foodType}</b><br></br>
          Glazing: {glazing}<br></br>
          Quantity: {quantity}<br></br><br></br>
          <i>Description:{description}</i>
          <br></br>
          <br></br>
          <button style={{marginRight: "0px", backgroundColor: "white", border: "none"}} className="DeleteIcon" onClick={(e) => this.deleteItem(e,i)}><u>{"Remove"}</u></button>
       
          
      </div> 

    </div>)}

   //Component for Checkout card
   const MyCard = ({i, foodType, glazing, quantity, total, image}) => {
    return (
      <div>
        <div class="shadow card border-dark mb-3 rounded-0" style={{ height: '18rem'}}>
        <div class="row">
          <div class="col-lg-5"><Card.Img variant="top" src={image} style={{ height: '17.9rem', width: "18rem" }}/></div> 
          <div class="col-lg-4">
            <ProductDescription foodType={foodType} glazing={glazing} i={i} quantity={quantity}/>
          </div>  

          <div class="col-lg-2">  
            <br></br><br></br><br></br>


            <br></br><br></br><br></br><br></br><br></br><br></br><br></br>
          <Button style={{width: "120px", fontSize: "20px", textAlign: "right", backgroundColor: "white", color: "black", border: "none", borderRadius: "2px"}}>${total}</Button>
          </div>
        </div>
      </div>
    </div>
    );
  }


//Checkout total Component
  const MyCheckout = ({itemCount, finalTotal}) => {
    return (
      <div class="shadow card border-dark mb-3 rounded-0" style={{ height: '10.5rem'}}>
      <div class="row my-3">
       <div class="col-1"> </div>
       <b><u><p>Order Summary</p></u></b><br></br>
       <div class="col-12"> </div>
       <div class="col-1"> </div>
      <p style={{fontSize: "20px"}}>Subtotal ({itemCount}): </p>
      <div class="col-4"> </div>
      <div class="col-3"> 
        <p style={{fontSize: "20px", textAlign: "right"}} >${finalTotal}</p>
      </div>
           <Button variant="lg" style={{width: "320px", fontSize: "20px", textAlign: "center", backgroundColor: "orange", color: "white", border: "1px solid black", borderRadius: "2px", marginLeft: "30px"}}>Checkout</Button>
      </div>
      </div>
      );
  }

    let finalTotal = 0;
    let list_content = [];

    //Make sure the item list is not undefined 
    if (this.state.todoList != undefined){
    for (let i = 0; i < this.state.todoList.length; i++) {
      //Loop through each item for checkout
      let todo = this.state.todoList[i];
      list_content.push(
        <div>
            <div class="col-lg-12">
              <MyCard i ={i} foodType={todo.foodType} glazing={todo.glazing} quantity={todo.quantity} total={todo.total} image={todo.image}/>
          </div>
        </div>

      );
      finalTotal = finalTotal + todo.total}
    }
      
    return (
      <div className="App">
        <div className="Header">
            <div class="container">
                <div class="row my-3">
                  <div class="col-8">
                     {list_content}
                  </div>
                  <div class="col-4">
                    <MyCheckout finalTotal= {finalTotal} itemCount = {list_content.length} />
                  </div>
                </div>
              </div>
            </div>
          </div>
    );
  }
}

export default Contact;