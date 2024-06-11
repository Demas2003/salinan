import Card from "react-bootstrap/Card";
import DemonSlayerImage from "../assets/image/kartun/demon slayer.webp";
import KungfuPandaImage from "../assets/image/kartun/kungfu panda.jpg";
import OnePieceImage from "../assets/image/kartun/one piece.jpg";
import { Container, Row, Col, Image } from "react-bootstrap";

const Kartun = () => {
  return (
    <div>
      <Container>
        <br />
        <h1 className="text-white">KARTUN FILM</h1>
        <br />
        <Row>
          <Col md={4} className="movieWrapper" id="kartun">
            <Card className="bg-dark movieImage">
              <Image
                src={DemonSlayerImage}
                alt="Agak Laen Movie"
                className="images"
              />
              <div className="mt-1 p-2 text-white">
                <Card.Title className="text-center">DEMON SLAYER</Card.Title>
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

          <Col md={4} className="movieWrapper">
            <Card className="bg-dark movieImage">
              <Image
                src={KungfuPandaImage}
                alt="Agak Laen Movie"
                className="images"
              />
              <div className="mt-1 p-2 text-white">
                <Card.Title className="text-center">KUNGFU PANDA</Card.Title>
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

          <Col md={4} className="movieWrapper">
            <Card className="bg-dark movieImage">
              <Image
                src={OnePieceImage}
                alt="Agak Laen Movie"
                className="images"
              />
              <div className="mt-1 p-2 text-white">
                <Card.Title className="text-center">ONE PIECE</Card.Title>
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

export default Kartun;
