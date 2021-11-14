import React, { useEffect, useState } from "react";
import { Card, Col, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./products.css";

const Products = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://morning-retreat-31667.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  const homePageProducts = products.slice(0, 6);
  return (
    <div id="products">
      <h1 className="mt-5 text-center">
        {" "}
        <span>
          <i class="fas fa-bicycle"></i>
        </span>{" "}
        <span className="text"> FEATURED</span> PRODUCTS
      </h1>
      <Row
        xs={1}
        md={2}
        xl={3}
        className="g-3 container-lg  mx-lg-auto mx-md-auto mx-0"
      >
        {homePageProducts.map((pd) => (
          <Col key={pd._id}>
            <Card style={{ border: "none" }} className="rounded-4 shadow-sm">
              <Card.Img
                variant="top"
                style={{ height: "300px" }}
                src={pd.img}
              />
              <Card.Body>
                <Card.Title
                  style={{ height: "50px" }}
                  className="fw-bold product-title"
                >
                  {pd.name}
                </Card.Title>
                <div className="description mt-3">
                  <Card.Text className="custom-text">
                    {pd.description.slice(0, 100)}
                  </Card.Text>
                </div>
                <p className="product-price">
                  Price : <span className="text"> {pd.price}</span> BDT
                </p>
              </Card.Body>
              <Card.Footer className="border border-0 bg-white">
                <Link to={`/purchase/${pd._id}`}>
                  <Button variant="primary  custom-btn ">Buy Now</Button>
                </Link>
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Products;
