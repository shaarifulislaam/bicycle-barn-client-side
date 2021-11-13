import React from "react";
import {
  Col,
  Container,
  Image,
  Row,
  Button,
  Spinner,
  Alert,
} from "react-bootstrap";
import { useForm } from "react-hook-form";
import { Link, useHistory } from "react-router-dom";
import useAuth from "../../../../hooks/UseAuth/useAuth";
import regImg from "../../../../images/register/register.png";

const Register = () => {
  const { user, registerUser, isLoading, error } = useAuth();
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const history = useHistory();
  const onSubmit = (data) => {
    registerUser(data.email, data.password, data.name, history);
  };
  return (
    <Container>
      <Row className="d-flex justify-content-center align-items-center ">
        <Col sm={12} md={6} lg={6}>
          <h1>Please Register</h1>
          <div className="login-box  m-auto mt-3">
            <div className=" d-flex justify-content-center align-items-center">
              <div className="login-form mx-auto text-center">
                <form onSubmit={handleSubmit(onSubmit)}>
                  <input
                    {...register("name")}
                    placeholder="Your Name"
                    className="p-2 m-2"
                  />

                  <input
                    {...register("email")}
                    type="email"
                    placeholder="Your Email"
                    className="p-2 m-2"
                  />
                  <input
                    {...register("password")}
                    type="password"
                    placeholder="Your Password"
                    className="p-2 m-2"
                  />

                  <br />
                  {errors.exampleRequired && (
                    <span>This field is required</span>
                  )}

                  <input
                    type="submit"
                    value="Register"
                    className="custom-btn p-2 m-2"
                  />
                </form>
                {isLoading && (
                  <div className="mx-auto text-center">
                    <Spinner animation="border" variant="primary " />
                  </div>
                )}
                {user?.email && (
                  <Alert variant="success">
                    <Alert.Link href="#">an example link</Alert.Link>. User
                    created successfully
                  </Alert>
                )}
                {error && <Alert variant="warning">{error}</Alert>}
                <Link style={{ textDecoration: "none" }} to="/login">
                  <Button variant="text">
                    Already Registered? Please Login
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </Col>
        <Col sm={12} md={6} lg={6}>
          {" "}
          <div className="p-5">
            <Image style={{ width: "100%" }} src={regImg} />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Register;
