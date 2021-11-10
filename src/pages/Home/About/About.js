import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import about from "../../../images/about/about-images.jpg";
import about1 from "../../../images/about/7956.jpg";

const About = () => {
  return (
    <Container id="about">
      <Row className="d-flex justify-content-center align-items-center mt-5">
        <Col sm={12} md={6} lg={6}>
          <div className="mt-5">
            <Image style={{ width: "100%" }} src={about1} />
          </div>
        </Col>
        <Col sm={12} md={6} lg={6}>
          <div className="text-start">
            <h1>
              Best Adventure <br /> Tourer Bicycle
            </h1>
            <p>
              Bicycle Barn going through the cites of the word in classical
              literature, discovered the undoubtable sourceand going through.
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
