import React from "react";
import { Col, Container, Image, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import banner from "../../../images/banner.jpg";

const Banner = () => {
  return (
    <Container>
      <Row className="d-flex justify-content-center align-items-center ">
        <Col sm={12} md={6} lg={6}>
          <div>
            <div className="text-start">
              <h1>
                Largest Bicycle <br />
                Manufacturer
              </h1>
              <p>
                Check out our exclusive collection of mountain bikes ,stunt
                bikes, city bikes, girls bikes and more.
              </p>
              <Link to="/allProducts">
                <Button className="custom-btn" variant="secondary">
                  Explore
                </Button>
              </Link>
            </div>
          </div>
        </Col>
        <Col sm={12} md={6} lg={6}>
          {" "}
          <div className="mt-5">
            <Image style={{ width: "100%" }} src={banner} />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Banner;
