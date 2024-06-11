import Card from "react-bootstrap/Card";
import AgakLaenImage from "../assets/image/trending/agak laen.jpg";
import PertaruhanImage from "../assets/image/trending/pertaruhan.jpg";
import MariposaImage from "../assets/image/trending/mariposa.jpg";
import { Container, Row, Col, Image } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

const Trending = () => {
  return (
    <div>
      <Container>
        <br />
        <h1 data-aos="fade-right" className="text-white">
          TRENDING FILM
        </h1>
        <br />
        <Row>
          <Col md={4} className="movieWrapper" id="trending" data-aos="zoom-in">
            <Card className="bg-dark movieImage">
              <Image
                src={AgakLaenImage}
                alt="Agak Laen Movie"
                className="images"
              />
              <div className="mt-1 p-2 text-white">
                <Card.Title className="text-center">AGAK LAEN</Card.Title>
                <Card.Text className="text-left">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content.
                </Card.Text>
                <Card.Text className="text-left">
                  Last updated 3 mins ago
                </Card.Text>
              </div>
            </Card>
          </Col>

          <Col md={4} className="movieWrapper" data-aos="zoom-in">
            <Card className="bg-dark movieImage">
              <Image
                src={PertaruhanImage}
                alt="Agak Laen Movie"
                className="images"
              />
              <div className="mt-1 p-2 text-white">
                <Card.Title className="text-center">PERTARUHAN</Card.Title>
                <Card.Text className="text-left">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content.
                </Card.Text>
                <Card.Text className="text-left">
                  Last updated 3 mins ago
                </Card.Text>
              </div>
            </Card>
          </Col>

          <Col md={4} className="movieWrapper" data-aos="zoom-in">
            <Card className="bg-dark movieImage">
              <Image
                src={MariposaImage}
                alt="Agak Laen Movie"
                className="images"
              />
              <div className="mt-1 p-2 text-white">
                <Card.Title className="text-center">MARIPOSA</Card.Title>
                <Card.Text className="text-left">
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content.
                </Card.Text>
                <Card.Text className="text-left">
                  Last updated 3 mins ago
                </Card.Text>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Trending;
