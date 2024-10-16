import { useParams } from "react-router-dom";
import { detailList } from "../data/DataMasjid";
import NavigationsBar from "../components/NavigationBar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Tentang from "../components/Tentang";

function SejarahMasjid() {
  const { id } = useParams();
  const data = detailList.find((item) => item.id === parseInt(id));

  if (!data) {
    return <div>Data tidak ditemukan</div>;
  }

  return (
    <>
      <div className="masjid">
        <NavigationsBar />
        <br />
        <section id="masjid">
          <Container className="wrapper">
            <Row className="align-items-start">
              <Col md={8} className="mb-3">
                <h1 className="text-start text-white weight-800">
                  {data.title}
                </h1>
              </Col>
              <Col md={12}>
                <Image src={data.image} alt={data.title} fluid rounded />
              </Col>
            </Row>
            <Row className="justify-content-center mt-3">
              <Col md={12}>
                <div
                  className="skill"
                  style={{
                    whiteSpace: "pre-line",
                    padding: "1rem",
                    backgroundColor: "#f8f9fa",
                    borderRadius: "10px",
                  }}
                  dangerouslySetInnerHTML={{ __html: data.description }}
                />
              </Col>
            </Row>
          </Container>
        </section>
        <br />
        <br />
        <Tentang />
      </div>
    </>
  );
}

export default SejarahMasjid;
