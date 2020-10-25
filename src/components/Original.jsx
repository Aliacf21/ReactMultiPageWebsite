import React from "react";
import { Card, Button, Modal,  } from "react-bootstrap";
import './original.css';


const MyCard = ({title, text, price, link}) => (
    <div class="shadow card border-dark mb-3 rounded-0" style={{ height: '36rem' }}>
              <Card.Img style={{ height: '28rem' }} variant="top" src="https://www.cookingclassy.com/wp-content/uploads/2012/12/45+minute+cinnamon+rolls9.jpg" />
              <div class="card-body">
              <div class="row align-items-center">  
                <div class="col-lg-10 align-items-center">  
                  <u><Card.Title><a href={link} style= {{ color: "black"}}>{title}</a></Card.Title></u>
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


function Example() {
  const [show, setShow] = React.useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
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

function Original() {
  return (
 <div className="original">
   render(<Example />);
</div>


  );
}


export default Original;
