import React from "react";
import { Image, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import error from "../../images/error/error.jpg";

const NotFound = () => {
  return (
    <div>
      <Image src={error} style={{ width: "100%", height: "80vh" }}></Image>
      <Link to="/home">
        <Button variant="secondary">Go to home</Button>
      </Link>
    </div>
  );
};

export default NotFound;
