import { Navbar, Container, Nav } from "react-bootstrap";
import Logo from "../assets/image/bg/logo.jpg";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

const NavigationsBar = () => {
  return (
    <div>
      <Navbar variant="dark">
        <Container>
          <img
            src={Logo}
            width="60"
            height="60"
            className="d-inline-block align-top nameImg"
          />
          <Nav>
            <Nav.Link href="#trending">DESTINASI WISATA</Nav.Link>
            <Nav.Link href="#kartun">PRODUK</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavigationsBar;
