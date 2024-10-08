import Card from "react-bootstrap/Card";
import RumahAd from "../assets/image/trending/RUMAH ADSIRI.jpg";
import { detailList } from "../data/DataSejarah";
import Sukuh from "../assets/image/trending/SUKUH.jpg";
import Lawu from "../assets/image/trending/LAWU.jpg";
import Mongkrang from "../assets/image/trending/MONGKRANG.jpg";
import Sekipan from "../assets/image/trending/SEKIPAN.jpg";
import PertaruhanImage from "../assets/image/trending/Jalak-Lawu.jpg";
import GerojoganSewu from "../assets/image/trending/GROJOGAN SEWU.jpg";
import ParangIjo from "../assets/image/trending/PARANGIJO.jpg";
import MasjidAgung from "../assets/image/trending/masjid.png";
import Madirda from "../assets/image/trending/MADIRDA.jpg"
import Jumog from "../assets/image/trending/JUMOG.jpg";
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
                  src={GerojoganSewu}
                  alt="Agak Laen Movie"
                  className="images"
                />
                <div className="card-title-container">
                  <Card.Title className="text-center">GEROJOGAN SEWU</Card.Title>
                </div>
              </Card>
            </a>
            <br /> <br />
          </Col>

          <Col md={4} className="movieWrapper" data-aos="zoom-in">
            <a href="">
              <Card className="bg-dark movieImage">
                <Image
                  src={Jumog}
                  alt="Agak Laen Movie"
                  className="images"
                />
                <div className="card-title-container">
                  <Card.Title className="text-center">AIR TERJUN JUMOG</Card.Title>
                </div>
              </Card>
            </a>
            <br /> <br />
          </Col>

          <Col md={4} className="movieWrapper" data-aos="zoom-in">
            <a href="">
              <Card className="bg-dark movieImage">
                <Image
                  src={Lawu}
                  alt="Agak Laen Movie"
                  className="images"
                />
                <div className="card-title-container">
                  <Card.Title className="text-center">GUNUNG LAWU</Card.Title>
                </div>
              </Card>
            </a>
            <br /> <br />
          </Col>

          <Col md={4} className="movieWrapper" data-aos="zoom-in">
            <a href="">
              <Card className="bg-dark movieImage">
                <Image
                  src={Sukuh}
                  alt="Agak Laen Movie"
                  className="images"
                />
                <div className="card-title-container">
                  <Card.Title className="text-center">CANDI SUKUH</Card.Title>
                </div>
              </Card>
            </a>
            <br /> <br />
          </Col>

          <Col md={4} className="movieWrapper" data-aos="zoom-in">
            <a href="">
              <Card className="bg-dark movieImage">
                <Image
                  src={RumahAd}
                  alt="Agak Laen Movie"
                  className="images"
                />
                <div className="card-title-container">
                  <Card.Title className="text-center">RUMAH ADSIRI</Card.Title>
                </div>
              </Card>
            </a>
            <br /> <br />
          </Col>

          <Col md={4} className="movieWrapper" data-aos="zoom-in">
            <a href="">
              <Card className="bg-dark movieImage">
                <Image
                  src={Mongkrang}
                  alt="Agak Laen Movie"
                  className="images"
                />
                <div className="card-title-container">
                  <Card.Title className="text-center">BUKIT MONGKRANG</Card.Title>
                </div>
              </Card>
            </a>
            <br /> <br />
          </Col>

          <Col md={4} className="movieWrapper" data-aos="zoom-in">
            <a href="">
              <Card className="bg-dark movieImage">
                <Image
                  src={Sekipan}
                  alt="Agak Laen Movie"
                  className="images"
                />
                <div className="card-title-container">
                  <Card.Title className="text-center">BUKIT SEKIPAN</Card.Title>
                </div>
              </Card>
            </a>
            <br /> <br />
          </Col>

          <Col md={4} className="movieWrapper" data-aos="zoom-in">
            <a href="">
              <Card className="bg-dark movieImage">
                <Image
                  src={Madirda}
                  alt="Agak Laen Movie"
                  className="images"
                />
                <div className="card-title-container">
                  <Card.Title className="text-center">MADIRDA</Card.Title>
                </div>
              </Card>
            </a>
            <br /> <br />
          </Col>

          <Col md={4} className="movieWrapper" data-aos="zoom-in">
            <a href="">
              <Card className="bg-dark movieImage">
                <Image
                  src={ParangIjo}
                  alt="Agak Laen Movie"
                  className="images"
                />
                <div className="card-title-container">
                  <Card.Title className="text-center">PARANG IJO</Card.Title>
                </div>
              </Card>
            </a>
            <br /> <br />
          </Col>

          <Col md={4} className="movieWrapper" data-aos="zoom-in">
            <a href="">
              <Card className="bg-dark movieImage">
                <Image
                  src={MasjidAgung}
                  alt="Agak Laen Movie"
                  className="images"
                />
                <div className="card-title-container">
                  <Card.Title className="text-center">MASJID MADANIYAH KARANGANYAR</Card.Title>
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
