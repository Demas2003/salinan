import { Button, Col, Container, Row } from "react-bootstrap";
import NavigationsBar from "./NavigationBar";
import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';

const Intro = () => {
//   const images = [
//     "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
//     "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
//     "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
// ];

  return (
    <div className="myBG">
      <NavigationsBar />
      {/* <Slide>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[0]})` }}>
                    <span>Slide 1</span>
                </div>
            </div>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[1]})` }}>
                    <span>Slide 2</span>
                </div>
            </div>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[2]})` }}>
                    <span>Slide 3</span>
                </div>
            </div>
        </Slide> */}
      
      <div className="intro">
        <Container className="text-white d-flex justify-content-center text-center align-items-center">
          <Row>
            <Col>
              <div className="title">SELAMAT DATANG</div>
              <div className="title">DI NUSA AR</div>
              <div className="introButton mt-4 text-center">
                {/* <Button className="btn-gradient">Selengkapnya</Button> */}
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Intro;
