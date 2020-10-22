import React from "react";
import { Card, Button } from "react-bootstrap";


const MyCard = ({title, text, price, link}) => (
    <div class="shadow card border-dark mb-3 rounded-0" style={{ height: '36rem' }}>
              <Card.Img style={{ height: '28rem' }} variant="top" src="https://www.chowstatic.com/blog-media/2014/12/sandhiracinnamon-roll13859833365480.jpg" />
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

function About() {
  return (
    <div className="about">
      <div class="container">
         <div className="contact">
      <div class="container">

        <div class="row align-items-center my-4">    
          <div class="col-lg-4">
            <MyCard title={"Original"} text={"Alia ... :/"} price={"$1"} link={"original"}/>
          </div>
          
          <div class="col-lg-4">
            <MyCard title={"Original; Gluten-Free"} text={"Alia ... :/"}/>
          </div>
          <div class="col-lg-4">
            <MyCard title={"Blackberry"} text={"Alia ... :/"}/>
          </div>
        </div>
       

        <div class="row align-items-center my-4">    
          <div class="col-lg-4">
            <MyCard title={"Walnut"} text={"Alia ... :/"}/>
          </div>
          <div class="col-lg-4">
            <MyCard title={"Pecan"} text={"Alia ... :/"}/>
          </div>
          <div class="col-lg-4">
            <MyCard title={"Pumpkin Spice"} text={"Alia ... :/"}/>
          </div>
        </div>

        <div class="row align-items-center my-5"></div> 
        
        </div>
      </div>
      </div>
    </div>
  );
}

export default About;
