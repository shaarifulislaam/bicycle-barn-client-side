import React from "react";
import {
  Col,
  Container,
  Image,
  Row,
  Button,
  Alert,
  Spinner,
} from "react-bootstrap";
import { useForm } from "react-hook-form";
import { Link, useHistory, useLocation } from "react-router-dom";
import useAuth from "../../../../hooks/UseAuth/useAuth";
import login from "../../../../images/login/login.jpg";

const Login = () => {
  const { user, loginUser, signInWithGoogle, isLoading, error } = useAuth();

  const location = useLocation();
  const history = useHistory();
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    loginUser(data.email, data.password, location, history);
    alert("login ");
    // console.log(data);
  };
  const handleGoogleSignIn = () => {
    signInWithGoogle(location, history);
  };
  return (
    <Container>
      <Row className="d-flex justify-content-center align-items-center ">
        <Col sm={12} md={6} lg={6}>
          <h1 className="text-center">Please Login</h1>
          <div className="login-box  m-auto mt-3">
            <div className=" d-flex justify-content-center align-items-center">
              <div className="login-form mx-auto text-center">
                <form onSubmit={handleSubmit(onSubmit)}>
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
                    value="Login"
                    className="custom-btn p-2 m-2"
                  />
                </form>
                <Link style={{ textDecoration: "none" }} to="/register">
                  <Button variant="text">New user? Please Register</Button>
                </Link>
                <p>------------------------------------</p>
                <Button
                  onClick={handleGoogleSignIn}
                  className="custom-btn"
                  variant="primary"
                >
                  Google sign in
                </Button>
                {isLoading && (
                  <div className="mx-auto text-center">
                    <Spinner animation="border" variant="primary" />
                  </div>
                )}
                {user?.email && (
                  <Alert variant="success">
                    <Alert.Link href="#">an example link</Alert.Link>. User
                    created successfully
                  </Alert>
                )}
                {error && <Alert variant="warning">{error}</Alert>}
              </div>
            </div>
          </div>
        </Col>
        <Col sm={12} md={6} lg={6}>
          {" "}
          <div className="mt-2">
            <Image style={{ width: "100%" }} src={login} />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
