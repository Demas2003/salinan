import Card from "react-bootstrap/Card";
import { detailList } from "../data/DataSejarah";

import PertaruhanImage from "../assets/image/trending/Jalak-Lawu.jpg";
import { Link } from "react-router-dom";
import MariposaImage from "../assets/image/trending/Jalak-Lawu.jpg";
import { Container, Row, Col, Image } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
// ..
AOS.init();

const Trending = () => {
  return (
    <div className="trending">
      <Container>
        <br />
        <h1 data-aos="fade-right" className="text-white">
          DESTINASI WISATA SOLO RAYA
        </h1>
        <br />
        <Row>
          {detailList.map((item) => (
            <Col
              md={4}
              className="movieWrapper"
              id="trending"
              data-aos="zoom-in"
              key={item.id}
            >
              <Link to={`/sejarah/${item.id}`}>
                <Card className="bg-dark movieImage">
                  <Image
                    src={item.imagess}
                    alt={item.title}
                    className="images"
                  />
                  <div className="card-title-container">
                    <Card.Title className="text-center">
                      {item.title}
                    </Card.Title>
                  </div>
                </Card>
              </Link>
            </Col>
          ))}

          <Col md={4} className="movieWrapper" data-aos="zoom-in">
            <a href="">
              <Card className="bg-dark movieImage">
                <Image
                  src={PertaruhanImage}
                  alt="Agak Laen Movie"
                  className="images"
                />
                <div className="card-title-container">
                  <Card.Title className="text-center">JALAK LAWU</Card.Title>
                </div>
              </Card>
            </a>
            <br /> <br />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Trending;
