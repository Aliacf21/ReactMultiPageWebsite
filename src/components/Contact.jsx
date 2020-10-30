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



  const MyDropDowns = ({activeQuantity}) => { 

    let quantityValues = [1, 2, 6, 12]
    let buttonArray = []
    for (let index in quantityValues) {
     if (quantityValues[index] == activeQuantity) { buttonArray.push( <Dropdown.Item eventKey="quantityValues[index]" active>{quantityValues[index]}</Dropdown.Item>)}
    else {
      buttonArray.push(
        <Dropdown.Item id="Sometest" eventKey="quantityValues[index]">{quantityValues[index]}</Dropdown.Item>
        )
      }
    }

    return (
    <Dropdown as={ButtonGroup}>
    <Dropdown.Toggle style={{width: "120px", textAlign: "right", backgroundColor: "white", color: "black", border: "1px solid black", borderRadius: "2px"}}> {activeQuantity}</Dropdown.Toggle>
    <Dropdown.Menu a>
      {buttonArray}
    </Dropdown.Menu>
  </Dropdown>
    )}


  const ProductDescription = ({foodType, glazing, i}) => {return(
    <div>
      <div>
          <br></br>
          <b>{foodType}</b><br></br>
          Glazing: {glazing}<br></br><br></br>
          <i>Description: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.</i>
          <br></br>
          <br></br>
          <button style={{marginRight: "0px", backgroundColor: "white", border: "none"}} className="DeleteIcon" onClick={(e) => this.deleteItem(e,i)}><u>{"Remove"}</u></button>
          <button style={{backgroundColor: "white", border: "none"}} onClick={(e) => this.deleteItem(e,{i})}>|</button>
          <button style={{backgroundColor: "white", border: "none"}} onClick={(e) => this.deleteItem(e,{i})}><u>{"Edit"}</u></button>
      </div> 

    </div>)}

   const MyCard = ({i, foodType, glazing, quantity, total, image}) => {
    
    return (
      <div>

      <div class="shadow card border-dark mb-3 rounded-0" style={{ height: '18rem'}}>

      <div class="row">
          <div class="col-lg-5"><Card.Img variant="top" src={image} style={{ height: '17.9rem', width: "18rem" }}/></div> 

          <div class="col-lg-3">
          <ProductDescription foodType={foodType} glazing={glazing} i={i}/>
        </div>  
       <div class="col-lg-1"> </div>
          <div class="col-lg-2">  
          <br></br>
          Quantity <br></br>
          <MyDropDowns activeQuantity={quantity}/>
          <br></br><br></br><br></br><br></br><br></br><br></br>
         <br></br>
          <Button style={{width: "120px", fontSize: "20px", textAlign: "right", backgroundColor: "white", color: "black", border: "none", borderRadius: "2px"}}>${total}</Button>

          </div>
 
      
      </div>
          
  
      </div>
      
      </div>

      );
  }


  const MyCheckout = ({itemCount, finalTotal}) => {
    
    return (
            

      <div class="shadow card border-dark mb-3 rounded-0" style={{ height: '10.5rem'}}>
      <div class="row my-3">


       <div class="col-1"> </div>
       <b><u><p>Order Summary</p></u>   </b>    <br></br>
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

    console.log("rerender");

    let finalTotal = 0;

    let list_content = [];
     if (this.state.todoList != undefined){
    for (let i = 0; i < this.state.todoList.length; i++) {
      let todo = this.state.todoList[i];
      list_content.push(
        <div>
            <div class="col-lg-12">
              <MyCard i ={i} foodType={todo.foodType} glazing={todo.glazing} quantity={todo.quantity} total={todo.total} image={todo.image}/>
          </div>
        </div>

      );
      finalTotal = finalTotal + todo.total
      console.log(todo);
      }
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