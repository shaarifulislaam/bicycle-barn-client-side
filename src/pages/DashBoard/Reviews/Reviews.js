import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/UseAuth/useAuth";

const Reviews = () => {
  const { user } = useAuth();
  const {
    register,
    reset,
    handleSubmit,

    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    fetch("https://niche-website-server-side-shaarifulislaam.vercel.app/reviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.insertedId) {
          console.log(data);
          alert("Review added Successfully");
          reset();
        }
      });
    // console.log(data);
  };
  return (
    <div>
      <div className="login-box w-75 m-auto mt-5 border border">
        <h1 className="mt-5 text-center ">Share your experience with us!</h1>
        <div className="  d-flex justify-content-center align-items-center">
          <div className="login-form mx-auto text-center">
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                {...register("name")}
                value={user.displayName}
                className="p-2 m-2"
              />
              <input
                {...register("email")}
                value={user.email}
                className="p-2 m-2"
              />

              <textarea
                {...register("description", { required: true })}
                placeholder="Write your experience"
                className="p-2 m-2"
              />

              <select
                {...register("rating")}
                className="p-2 m-2"
                style={{ width: "75%" }}
              >
                <option value={1}>1</option>
                <option value={2}>2</option>
                <option value={3}>3</option>
                <option value={4}>4</option>
                <option value={5}>5</option>
              </select>

              {errors.exampleRequired && <span>This field is required</span>}

              <input type="submit" className="custom-btn my-3" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
