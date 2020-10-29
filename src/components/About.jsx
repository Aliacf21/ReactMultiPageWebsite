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
  state = {};

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
  addItem = (foodType, myGlazing, quantity, price, image) => {
    //TODO 1: Make the add button work (hint: this.setState())
    let todoList = this.state.todoList;
    var myTotal = price * quantity;
    todoList.push({foodType: foodType, glazing:myGlazing, quantity:quantity, total:myTotal, image: image})
    this.setState({ todoList: todoList });
    store(todoList)
    //pass some call back as a prop 
    this.props.increase()

    
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

  let row1Names = [
  {type: "Original", price: 1, image: "https://www.faithfullyglutenfree.com/wp-content/uploads/2011/01/Cinnamon-Buns-2181483.jpg"}, 
  {type: "Original; Gluten-Free", price: 2, image: "https://www.cookingclassy.com/wp-content/uploads/2012/12/45+minute+cinnamon+rolls9.jpg"},
   {type: "Blackberry", price: 1.5, image: "https://kristineskitchenblog.com/wp-content/uploads/2018/05/blackberry-pie-700-0066.jpg"}];
  let row2Names = [
  {type: "Walnut", price: 3, image: "https://www.bearnakedfood.com/wp-content/uploads/2018/05/DSCF1980-800x1200.jpg"}, 
  {type: "Pecan", price: 2, image: "https://images.ctfassets.net/uw7yiu2kuigc/4BjBKP0HEN9htyhktAiWa0/8e9fa4d10df96a36525af327c243b65d/Classic-Pecan-Pie-Lead.jpg"}, 
  {type: "Pumpkin Spice", price: 1, image: "https://tastesbetterfromscratch.com/wp-content/uploads/2015/10/Pumpkin-Pie-5-500x500.jpg"}];
  let row1 = [];
  let row2 = [];


  let customerChoiceForQuantity = "1";
  let customerChoiceForGlazing = "None";



  const MyModal = ({title, price, image}) => { 
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
              <Card.Img style={{ height: '28rem' }} variant="top" src={image}/>
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
          <Button variant="outline-light" style={{color: "white", backgroundColor: "orange"}} onClick={() => this.addItem(title, customerChoiceForGlazing, customerChoiceForQuantity, price, image)}> Add to Cart </Button>
        </Modal.Footer>
      </Modal>
    </div>
    );
  }


  const openModal = ({myTitle, myPrice}) => {
    console.log("Enter here")
return (
  <div class="col-lg-9 text-left">
    <MyModal title ={myTitle} price={myPrice}/>
  </div>);
  }

  const MyCard = ({title, text, price, link, image}) => {
    return (
      <div class="shadow card border-dark mb-3 rounded-0" style={{ height: '32rem' }}>
        <Card.Img style={{ height: '24rem' }}  onClick= {() => openModal(title, price)} src={image} />
          <div class="card-body">   
              <div class="row">  
                <div class="col-lg-9 text-left">
                  <MyModal title ={title} price={price} image={image}/>
                </div>
                <div class="col-lg-3 text-right">  
                  <Card.Title style={{marginTop: "5px"}}>${price}</Card.Title>
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
    <div class="row" style={{marginBottom: "20px"}}>
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
    <div class="row" style={{marginTop: "80px"}}>

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
          <MyCard title={name.type} price={name.price} image={name.image}/>
        </div>
        );
      }

  for (let name of row2Names) {
    row2.push(
        <div class="col-lg-4">
          <MyCard title={name.type} price={name.price} image={name.image}/>
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
