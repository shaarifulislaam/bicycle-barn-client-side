import React, { useState } from "react";
import { Alert, Container } from "react-bootstrap";
import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/UseAuth/useAuth";

const MakeAdmin = () => {
  const [success, setSuccess] = useState(false);
  const { error } = useAuth();
  const {
    register,

    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    fetch("http://localhost:5000/users/admin", {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          setSuccess(true);
        }
      });
  };
  return (
    <Container>
      <div className="login-box  m-auto mt-3">
        <div className=" d-flex justify-content-center align-items-center">
          <div className="login-form mx-auto text-center">
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                {...register("email")}
                type="email"
                style={{ width: "100%" }}
                placeholder="Your Email"
                className="p-2 m-2"
              />

              <input
                type="submit"
                style={{ width: "100%" }}
                value="Make Admin"
                className="custom-btn p-2 m-2"
              />
            </form>
            {success && (
              <Alert variant="success">
                <Alert.Link href="#"></Alert.Link> User created successfully
              </Alert>
            )}
            {error && <Alert variant="warning">{error}</Alert>}
          </div>
        </div>
      </div>
    </Container>
  );
};

export default MakeAdmin;
