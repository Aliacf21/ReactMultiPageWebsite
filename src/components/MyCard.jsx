import React, {Component} from "react";
import { Card, Button, Modal } from "react-bootstrap";


class MyCard  extends Component {
    
    const myCard = (({title, text, price, link}))
    return (
    <div class="shadow card border-dark mb-3 rounded-0" style={{ height: '36rem' }}>
      <Card.Img style={{ height: '28rem' }} variant="top" src="https://www.cookingclassy.com/wp-content/uploads/2012/12/45+minute+cinnamon+rolls9.jpg" />
          <div class="card-body">
              <div class="row align-items-center">  
                <div class="col-lg-10 align-items-center"> </div>

                <div class="col-lg-2 align-items-center">  
                  <Card.Title>{price}</Card.Title>
                </div>
       
              </div>
                <Card.Text>
                  <i>Made with {title} and fluffy dough</i>
                </Card.Text>
              </div>
      </div>);
  };

export default MyCard;