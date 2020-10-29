import React from "react";
import { Carousel, Button, Modal } from "react-bootstrap";

function Home() {
  return (
    <div className="home">
      <div class="container">
        <div class="row align-items-center my-3">
          <div class="col-12">
            <Carousel>
            
              <Carousel.Item interval={2000}>
                <img
                  className="d-block w-100"
                  src="https://images-gmi-pmc.edge-generalmills.com/165f3d2f-0610-40a6-abf8-478fb850be7c.jpg"
                  alt="Third slide"
                  style={{ height: '36rem'}}
                />

               
              </Carousel.Item>
              <Carousel.Item interval={2000}>
                <img
                  className="d-block w-100"
                  src="https://www.tastesoflizzyt.com/wp-content/uploads/2020/07/blueberry-blackberry-pie-1200-2.jpg"
                  alt="Third slide"
                   style={{ height: '36rem'}}
                />

            
              </Carousel.Item>

                <Carousel.Item interval={2000}>
                <img 
                  className="d-block w-100"
                  src="https://natashaskitchen.com/wp-content/uploads/2014/11/Cinnamon-Apple-Pie-6-500x375.jpg"
                  alt="First slide"
                  style={{ height: '36rem'}}
                />
      
              </Carousel.Item>
</Carousel>
          </div>
          </div>
          <div class="row align-items-center my-2">
          <div class="col-12">
            <h1 class="font-weight-light">About Us</h1>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
          </div>
          </div>
        </div>
      </div>

  );
}

export default Home;
