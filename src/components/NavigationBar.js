import { Navbar, Container, Nav } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

const NavigationsBar = () => {
  return (
    <div>
      <Navbar variant="dark">
        <Container>
          <Navbar.Brand>DEMASFILM</Navbar.Brand>
          <Nav>
            <Nav.Link data-aos="fade-right" href="#trending">
              TRENDING
            </Nav.Link>
            <Nav.Link data-aos="fade-left" href="#kartun">
              KARTUN
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavigationsBar;
