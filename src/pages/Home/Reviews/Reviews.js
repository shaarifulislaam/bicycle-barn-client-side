import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Reviews = () => {
  return (
    <Container className="mt-5" id="reviews">
      <h1>Reviews</h1>
      <Row>
        <Col xs={6} md={4}>
          <h1>Lorem Ipsam</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Praesentium, quod.
          </p>
        </Col>
        <Col xs={6} md={4}>
          <h1>Lorem Ipsam</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Praesentium, quod.
          </p>
        </Col>
        <Col xs={6} md={4}>
          <h1>Lorem Ipsam</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Praesentium, quod.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default Reviews;
