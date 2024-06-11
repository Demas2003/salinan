import { Button, Col, Container, Row } from "react-bootstrap";
import NavigationsBar from "./NavigationBar";

const Intro = () => {
  return (
    <div className="myBG">
      <NavigationsBar />
      <div className="intro">
        <Container className="text-white d-flex justify-content-center text-center align-items-center">
          <Row>
            <Col>
              <div className="title">SELAMAT DATANG</div>
              <div className="title">DI NUSA AR</div>
              <div className="introButton mt-4 text-center">
                <Button className="btn-gradient">Selengkapnya</Button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Intro;
