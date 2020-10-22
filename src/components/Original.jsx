import React from "react";
import { Card, Button } from "react-bootstrap";

const MyCard = ({title, text}) => (
    <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="https://www.chowstatic.com/blog-media/2014/12/sandhiracinnamon-roll13859833365480.jpg" />
              <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                  {text}
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>)

function Original() {
  return (
    <div className="original">
      <div class="container">

        <div class="row align-items-center my-5">    
          <div class="col-lg-4">
            <MyCard title={"AJ is great"} text={"Alia ... :/"}/>
          </div>
          <div class="col-lg-4">
            <MyCard title={"AJ is great"} text={"Alia ... :/"}/>
          </div>
          <div class="col-lg-4">
            <MyCard title={"AJ is great"} text={"Alia ... :/"}/>
          </div>
        </div>
       

        <div class="row align-items-center my-5">    
          <div class="col-lg-4">
            <MyCard title={"AJ is great"} text={"Alia ... :/"}/>
          </div>
          <div class="col-lg-4">
            <MyCard title={"AJ is great"} text={"Alia ... :/"}/>
          </div>
          <div class="col-lg-4">
            <MyCard title={"AJ is great"} text={"Alia ... :/"}/>
          </div>
        </div>

        <div class="row align-items-center my-5"></div> 
        
        </div>
      </div>
  );
}

export default Original;
