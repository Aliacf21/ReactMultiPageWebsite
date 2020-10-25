import React from "react";
import { Card, Button, Modal } from "react-bootstrap";


const MyCard = ({title, text, price, link}) => (
    <div class="shadow card border-dark mb-3 rounded-0" style={{ height: '36rem' }}>
              <Card.Img style={{ height: '28rem' }} variant="top" src="https://www.cookingclassy.com/wp-content/uploads/2012/12/45+minute+cinnamon+rolls9.jpg" />
              <div class="card-body">
              <div class="row align-items-center">  
                <div class="col-lg-10 align-items-center">  
                  <Example title={title}/>
                </div>

                <div class="col-lg-2 align-items-center">  
                  <Card.Title>{price}</Card.Title>
                 
                </div>
       
              </div>
                <Card.Text>
                  <i>Made with {title} and fluffy dough</i>
                </Card.Text>
              </div>
      </div>)

function Example({title}) {
  const [show, setShow] = React.useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button onClick={handleShow} variant="light" size="lg" style={{backgroundColor: "white", color:"black", padding: 0}}><u>{title}</u></Button>

      <Modal show={show} onHide={handleClose} animation={true}  size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
       
      <div class="row align-items-center">    
        <div class="col-lg-7">
        <Card.Img style={{ height: '28rem' }} variant="top" src="https://www.cookingclassy.com/wp-content/uploads/2012/12/45+minute+cinnamon+rolls9.jpg" />
        </div>

         <div class="col-lg-4">
        Woohoo, you're reading this text in a modal!
        </div>

        </div>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}


function About() {

  const row1Names = ["Original", "Original; Gluten-Free", "Blackberry"];
  const row2Names = ["Walnut", "Pecan", "Pumpkin Spice"];
  const row1 = []
  const row2 = []

  for (let name of row1Names) {
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

export default About;
