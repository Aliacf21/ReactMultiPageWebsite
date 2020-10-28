import React, {Component} from "react";
import { Card, Button, Modal, ButtonGroup, ToggleButton } from "react-bootstrap";



 const default_todoList = [
    {
     typeOfFood: "Original",
      Glazing: false,
      Quantity: 0
    }
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



class About extends Component {
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
  addItem = (myString) => {
    //TODO 1: Make the add button work (hint: this.setState())
    let todoList = this.state.todoList;
    todoList.push({typeOfFood: myString, Glazing:false, Quantity:0})
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
  };




  render() 

  {

  let row1Names = ["Original", "Original; Gluten-Free", "Blackberry"];
  let row2Names = ["Walnut", "Pecan", "Pumpkin Spice"];
  let row1 = [];
  let row2 = [];
  let myGlazig = "None";



  /*for (let name of row1Names) {
    row1.push(
        <div class="col-lg-4">
          <MyCard title={name} price={"$1"}/>
        </div>
        );
      }

  for (let name of row2Names) {
    row2.push(
        <div class="col-lg-4">
          <MyCard title={name} price={"$1"}/>
        </div>
        );
      }

    */
 

  const MyModal = ({title}) => { 
    const [show, setShow] = React.useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const customerChoice = []

    return (
      <>
        <Button onClick={handleShow} variant="light" size="lg" style={{backgroundColor: "white", color:"black", padding: 0}}><u>{title}</u></Button> 
         <Modal show={show} onHide={handleClose} backdrop="static"  animation={true}  size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
           <Modal.Header closeButton style={{backgroundColor: "orange", color: "white", fontSize: "large"}}>
            <Modal.Title>{title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
           <div class="row">    
            <div class="col-lg-7">
              <Card.Img style={{ height: '28rem' }} variant="top" src="https://www.cookingclassy.com/wp-content/uploads/2012/12/45+minute+cinnamon+rolls9.jpg" />
            </div>

            <div class="col-lg-5">
              <ButtonType title={"Glazing"} button1 = {"None"} button2 = {"Vanilla-Milk"} button3 = {"Sugar-Milk"} button4={"Double"}/>
              <ButtonType title={"Quantity"} button1 = {"1"} button2 = {"2"} button3 = {"6"} button4={"12"}/>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="link" style={{color: "black"}} onClick={handleClose}> Continue Browsing </Button>
          <Button variant="outline-light" style={{color: "white", backgroundColor: "orange"}} onClick={handleClose}> Add to Cart </Button>
        </Modal.Footer>
      </Modal>
    </>
    );
  }



  const MyCard = ({title, text, price, link}) => {
    return (
      <div class="shadow card border-dark mb-3 rounded-0" style={{ height: '36rem' }}>
        <Card.Img style={{ height: '28rem' }} variant="top" src="https://www.cookingclassy.com/wp-content/uploads/2012/12/45+minute+cinnamon+rolls9.jpg" />
          <div class="card-body">
              <div class="row align-items-center">  
                <div class="col-lg-10 align-items-center"><MyModal title ={"hello"}/></div>
                <div class="col-lg-2 align-items-center">  
                  <Card.Title>{price}</Card.Title>
                </div>
       
              </div>
                <Card.Text>
                  <i>Made with {title} and fluffy dough</i>
                </Card.Text>
              </div>
      </div>);
  }


  const ButtonType = ({title, button1, button2, button3, button4}) => { 

    let customerChoice = []
    return (

    <div class="row">
      <p>{title}</p>
        <div class="row align-items-center"></div>

          <div class="row align-items-center">
            <div class="col-lg-6">
              <Button as="input" onClick={() => this.addItem("PLEASE????")} size="sm" variant="light" style={{width: "9rem", backgroundColor:"orange", color:"white"}} value={button1} />
            </div>

            <div class="col-lg-6">
              <Button as="input" onClick={() => customerChoice.push("Vanilla Milk")} size="sm" variant="light" style={{width: "9rem", backgroundColor:"orange", color:"white"}} value={button2} />
            </div>
          </div>
         
          <div class="row my-2 align-items-center">
              <div class="col-lg-6">
                <Button as="input" onClick={() => customerChoice.push("Sugar Milk")} size="sm" variant="light" style={{width: "9rem", backgroundColor:"orange", color:"white"}} value={button3} />
              </div>

            <div class="col-lg-6">
                <Button as="input" onClick={() => customerChoice.push("Double")} size="sm" variant="light" style={{width: "9rem", backgroundColor:"orange", color:"white"}} value={button4} />
            </div>

          </div>
    </div>

          );
      }




    row1.push(
      <div class="col-lg-4">
        <MyCard title={"Original"} />
      </div>
    )


    let list_content = [];

    for (let i = 0; i < this.state.todoList.length; i++) {
      let todo = this.state.todoList[i];
      console.log("This is the value:" + todo.typeOfFood);
      list_content.push(
        <li
          key={todo.typeOfFood + "_" + i.toString()}
          onClick={(evt) => this.toggleDone(evt, i)}>
          {todo.typeOfFood}
          {todo.Glazing}
          {todo.Quantity}
          <div className="Filler"></div>
          <div className="DeleteIcon" onClick={(e) => this.deleteItem(e,i)}>
            {"x"}
          </div>
        </li>
        
      );
      
    }

  return (
    <div className="about">
      <div class="container">
         <div className="contact">

      <div class="container">
      
        <div class="row align-items-center my-4">    
           {row1}
        </div>
        
         <div class="row align-items-center my-4">    
           {row2}
          </div>

        <div class="row align-items-center my-5"></div> 
        
      <input
            type="text"
            value={this.state.newTodoContent}
            onChange={(evt) => {
              console.log(evt.target.value);
              this.setState({ newTodoContent: evt.target.value });
            }}
            placeholder="new to do...."
          />
          <span onClick={() => this.addItem("derp")} className="AddNewToDoButton">
            Add
          </span>
        </div>
        <ul>{list_content}</ul>
      </div>
    </div>

    </div>

  );
}
}

export default About;
