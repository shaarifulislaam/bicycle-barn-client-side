import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useParams } from "react-router";
import useAuth from "../../hooks/UseAuth/useAuth";
import "./purchase.css";

const Purchase = () => {
  const { purchaseId } = useParams();
  const [product, setProduct] = useState({});

  const { user } = useAuth();

  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();
  useEffect(() => {
    fetch(`https://morning-retreat-31667.herokuapp.com/${purchaseId}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);

  const onSubmit = (data) => {
    data.status = "pending";
    fetch("https://morning-retreat-31667.herokuapp.com/orders", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.insertedId) {
          alert("Data added successfully!");
          reset();
          // history.push("/myBooking");
        }
      });
    console.log(data);
  };
  return (
    <div className="row ">
      <div className="col-md-6 col-lg-8 col-sm-12">
        <div className="row container-fluid mt-lg-5">
          <div className="col-md-12 col-lg-6 col-sm-12">
            <img className="mt-lg-5" src={product?.img} alt="" />
          </div>
          <div className="col-md-12 col-lg-6 col-sm-12 custom-height">
            <h3 className="mt-5">{product?.name}</h3>
            <p>{product?.description}</p>
            <p className="service-price">Fee : {product?.price} BDT</p>
          </div>
        </div>
      </div>

      {/* place order  */}
      <div className="col-md-6 col-lg-4 col-sm-12 border border p-1 mt-2 custom-con">
        <h1 className="mt-3 text-center text-info">Place Order</h1>
        <div className="login-box  m-auto mt-3">
          <div className=" d-flex justify-content-center align-items-center">
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

                <input
                  {...register("phone")}
                  placeholder="Enter Phone number"
                  className="p-2 m-2"
                />

                <input
                  {...register("product")}
                  placeholder="Product Name"
                  value={product?.name}
                  className="p-2 m-2"
                />
                <input
                  {...register("address", { required: true })}
                  placeholder="Address"
                  className="p-2 m-2"
                />
                <input
                  {...register("price", { required: true })}
                  placeholder="Price"
                  value={product?.price}
                  className="p-2 m-2"
                />
                <br />
                {errors.exampleRequired && <span>This field is required</span>}

                <input
                  type="submit"
                  value="Order"
                  className="custom-btn mb-2"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Purchase;
