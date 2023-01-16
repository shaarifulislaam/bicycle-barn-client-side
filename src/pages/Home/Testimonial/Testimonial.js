import React, { useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import ReactStars from "react-rating-stars-component";

const Testimonial = () => {
  const [testimonial, setTestimonial] = useState([]);
  useEffect(() => {
    fetch("https://niche-website-server-side-shaarifulislaam.vercel.app/reviews")
      .then((res) => res.json())
      .then((data) => setTestimonial(data));
  }, []);

  return (
    <div id="testimonial">
      <h1 className="mt-5 text-center">Testimonial</h1>
      <Row
        xs={1}
        md={2}
        xl={3}
        className="g-3 container-lg  mx-lg-auto mx-md-auto mx-0"
      >
        {testimonial.map((review) => (
          <Col key={review._id}>
            <Card className="rounded-4 shadow">
              <Card.Body>
                <Card.Title className="fw-bold product-title">
                  {review.name}
                </Card.Title>
                <div className="description">
                  <Card.Text className="custom-text">
                    {review.description}
                  </Card.Text>
                  <ReactStars
                    count={5}
                    value={review.rating}
                    size={40}
                    edit={false}
                    emptyIcon={<i className="far fa-star"></i>}
                    halfIcon={<i className="fa fa-star-half-alt"></i>}
                    fullIcon={<i className="fa fa-star"></i>}
                    activeColor="#ffd700"
                  />
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Testimonial;
