import React, { useEffect, useState } from "react";
import { Card, Col, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const AllProducts = () => {
  const [allProducts, setAllProducts] = useState([]);
  useEffect(() => {
    const url = "https://morning-retreat-31667.herokuapp.com/allProducts";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setAllProducts(data));
  }, []);
  return (
    <div>
      <h3 className="mt-5">FEATURED PRODUCTS</h3>
      <Row
        xs={1}
        md={2}
        xl={3}
        className="g-3 container-lg  mx-lg-auto mx-md-auto mx-0"
      >
        {allProducts.map((pd) => (
          <Col key={pd._id}>
            <Card className="rounded-4 shadow">
              <Card.Img variant="top" src={pd.img} />
              <Card.Body>
                <Card.Title className="fw-bold service-title">
                  {pd.name}
                </Card.Title>
                <div className="description">
                  <Card.Text className="custom-text">
                    {pd.description.slice(0, 160)}
                  </Card.Text>
                </div>
                <p className="service-price">Fee : {pd.price} BDT</p>
              </Card.Body>
              <Card.Footer className="border border-0 bg-white">
                <Link to={`/serviceDetails/${pd._id}`}>
                  <Button variant="primary  custom-btn ">Book Now</Button>
                </Link>
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default AllProducts;
