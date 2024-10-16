import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import Logo from "../assets/image/bg/logo.jpg";

function Tentang() {
  return (
    <section id="contact-person">
      <Container className="wrapper text-center">
        <Row className="mb-4">
          <Col>
            <Image
              data-aos="zoom-out"
              src={Logo}
              alt="Logo"
              width={100}
              height={100}
            />
          </Col>
        </Row>
        <Row>
          <Col>
            <h3 data-aos="flip-left">Contact Person</h3>
            <p data-aos="flip-right">
              Situs ini merupakan situs resmi nusa ar. Semua isi yang tercantum
              di dalam situs ini bertujuan untuk memberikan informasi dan bukan
              sebagai tujuan komersial. Penjualan yang ditampilkan merupakan
              tanda kemitraan yang akan menghubungkan Anda kepada Mitra Kami.
            </p>
            <p>
              <strong data-aos="flip-left">Email:</strong> nusaar24@gmail.com
              <br />
              <strong data-aos="flip-right">Phone:</strong> 0852-8202-8312
            </p>
          </Col>
        </Row>
        <Row className="mt-4">
          <Col>
            <h4>Follow Us</h4>
            <a
              data-aos="flip-down"
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <FaFacebook size={32} />
            </a>
            <a
              data-aos="flip-down"
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <FaTwitter size={32} />
            </a>
            <a
              href="https://www.instagram.com/nusaa.ar?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
            >
              <FaInstagram size={32} />
            </a>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Tentang;
