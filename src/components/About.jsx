import React, {Component} from "react";
import { Card, Button, Modal, ButtonGroup, ToggleButtonGroup, ToggleButton } from "react-bootstrap";



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
  addItem = (foodType, myGlazing, quantity, price) => {
    //TODO 1: Make the add button work (hint: this.setState())
    let todoList = this.state.todoList;
    var myTotal = price * quantity;
    todoList.push({foodType: foodType, glazing:myGlazing, quantity:quantity, total:myTotal})
    this.setState({ todoList: todoList });
    store(todoList)
    window.location.reload(true);
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


  let customerChoiceForQuantity = "1";
  let customerChoiceForGlazing = "None";



  const MyModal = ({title, price}) => { 
    const [show, setShow] = React.useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const customerChoice = []
 


    return (
      <div>
        <Button onClick={handleShow} variant="light" size="lg" style={{backgroundColor: "white", color:"black", padding: 0, textDecoration: "none"}}><u>{title}</u></Button> 

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
              <ButtonType title={"Glazing"}  button1 = {"None"} button2 = {"Vanilla-Milk"} button3 = {"Sugar-Milk"} button4={"Double"} price={price}/>
              <ButtonType title={"Quantity"} button1 = {"1"} button2 = {"2"} button3 = {"6"} button4={"12"} price={price}/>

              <ButtonType1 title={"Order"} button1 = {"1"} button2 = {"2"} button3 = {"6"} button4={"12"} price={price}/>
            </div>
      </div>


        </Modal.Body>
        <Modal.Footer>
          <Button variant="link" style={{color: "black"}} onClick={handleClose}> Continue Browsing </Button>
          <Button variant="outline-light" style={{color: "white", backgroundColor: "orange"}} onClick={() => this.addItem(title, customerChoiceForGlazing, customerChoiceForQuantity, price)}> Add to Cart </Button>
        </Modal.Footer>
      </Modal>
    </div>
    );
  }



  const MyCard = ({title, text, price, link}) => {
    return (
      <div class="shadow card border-dark mb-3 rounded-0" style={{ height: '32rem' }}>
        <Card.Img style={{ height: '24rem' }} variant="top" src="https://www.cookingclassy.com/wp-content/uploads/2012/12/45+minute+cinnamon+rolls9.jpg" />
          <div class="card-body">
              <div class="row align-items-center">  
                <div class="col-lg-10 align-items-center"><MyModal title ={title} price={price}/></div>
                <div class="col-lg-2 align-items-center">  
                  <Card.Title>${price}</Card.Title>
                </div>
       
              </div>
                <Card.Text>
                  <i>Made with {title} and fluffy dough</i>
                </Card.Text>
              </div>
      </div>);
  }

  const ButtonType = ({title, button1, button2, button3, button4, price}) => { 

       const updateValue = (someValue) => {
        if (title == "Quantity") {
        customerChoiceForQuantity = someValue;
        console.log("Quantity: " + customerChoiceForQuantity)
        document.getElementById("currentQuatity").innerHTML = "x" + customerChoiceForQuantity;

      }
      else {
        customerChoiceForGlazing = someValue;
        console.log("Glazing: " + customerChoiceForGlazing);
        document.getElementById("currentGlaze").innerHTML = customerChoiceForGlazing;
      }
      document.getElementById("currentTotal").innerHTML = "$" + price * customerChoiceForQuantity;
    }


   
    return (
    <div class="row">
      <p>{title}</p>
        <div class="row align-items-center"></div>
        <div>

          <div class="row align-items-center">
            <div class="col-lg-6">
              <Button onClick={() => updateValue(button1)} size="sm" variant="light" style={{width: "9rem", backgroundColor:"orange", color:"white"}} value={button1}>{button1}</Button>

            </div>

            <div class="col-lg-6">
              <Button onClick={() => updateValue(button2)}  size="sm" variant="light" style={{width: "9rem", backgroundColor:"orange", color:"white"}} value={button2}>{button2}</Button>
            </div>
          </div>
         
          <div class="row my-2 align-items-center">
              <div class="col-lg-6">
                <Button onClick={() => updateValue(button3)}  size="sm" variant="light" style={{width: "9rem", backgroundColor:"orange", color:"white"}} value={button3}>{button3}</Button>
              </div>

            <div class="col-lg-6">
                <Button onClick={() => updateValue(button4)} size="sm" variant="light" style={{width: "9rem", backgroundColor:"orange", color:"white"}} value={button4}>{button4}</Button>
            </div>
          </div>


          </div>
          </div>

          );
      }



  const ButtonType1 = ({title, button1, button2, button3, button4, price}) => { 
   
    return (
    <div class="row">
      <p>{title}</p>

          <div class="row align-items-center">
            <div class="col-lg-6">
              <Button size="sm" variant="light" style={{width: "9rem", backgroundColor:"white", color:"black", textAlign: "left"}}>Glazing</Button>

            </div>

            <div class="col-lg-6">
              <Button   size="sm" id="currentGlaze" variant="light" style={{width: "9rem", backgroundColor:"white", color:"black", textAlign: "right"}} value={customerChoiceForGlazing}>{customerChoiceForGlazing}</Button>
            </div>
          </div>
         
          <div class="row my-2 align-items-center">
              <div class="col-lg-6">
                <Button  size="sm" variant="light" style={{width: "9rem", backgroundColor:"white", color:"black", textAlign: "left"}}>Quantity</Button>
              </div>

            <div class="col-lg-6">
                <Button  size="sm" id="currentQuatity" variant="light" style={{width: "9rem", backgroundColor:"white", color:"black", textAlign: "right"}} value={customerChoiceForQuantity}>x{customerChoiceForQuantity}</Button>
            </div>
          </div>


           <div class="row my-2 align-items-center">
              <div class="col-lg-6">
                <Button  size="sm" variant="light" style={{width: "9rem", backgroundColor:"white", color:"black", textAlign: "left"}}>Total</Button>
              </div>

            <div class="col-lg-6">
                <Button  size="sm" id="currentTotal" variant="light" style={{width: "9rem", backgroundColor:"white", color:"black", textAlign: "right"}} value={price}>${price}</Button>
            </div>
          </div>

          </div>

          );
      }



    

     for (let name of row1Names) {
    row1.push(
        <div class="col-lg-4">
          <MyCard title={name} price={"1"}/>
        </div>
        );
      }

  for (let name of row2Names) {
    row2.push(
        <div class="col-lg-4">
          <MyCard title={name} price={"1"}/>
        </div>
        );
      }

  


    let list_content = [];



    console.log(this.state.todoList)

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

        </div>

    </div>

   </div>

    </div>




  );
}
}

export default About;
