import Card from "react-bootstrap/Card";
import DemonSlayerImage from "../assets/image/kartun/desain.png";
import KungfuPandaImage from "../assets/image/kartun/kungfu panda.jpg";
import OnePieceImage from "../assets/image/kartun/one piece.jpg";
import { Container, Row, Col, Image } from "react-bootstrap";

const Kartun = () => {
  return (
    <div className="kartun">
      <Container>
        <br />
        <h1 data-aos="fade-left" className="text-white">
          PRODUK LOKAL KARANGANYAR
        </h1>
        <br />
        <Row>
          <Col md={4} className="movieWrapper" id="kartun">
            <Card data-aos="zoom-in" className="bg-dark movieImage">
              <Image
                src={DemonSlayerImage}
                alt="Agak Laen Movie"
                className="images"
              />
              <div className="mt-1 p-2 text-white">
                <Card.Title className="text-center card-title-container">
                  CERITANYA T-SHIRT
                </Card.Title>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Kartun;
