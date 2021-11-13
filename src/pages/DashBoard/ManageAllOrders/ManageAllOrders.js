import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import useAuth from "../../../hooks/UseAuth/useAuth";
import "./manageAllOrders.css";

const ManageAllOrders = () => {
  const [orders, setOrders] = useState([]);
  const { control, setControl, user } = useAuth();
  useEffect(() => {
    fetch("http://localhost:5000/orders")
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [control]);
  //*handle delete
  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure, you want to delete?");
    if (proceed) {
      const url = `http://localhost:5000/orders/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("Delete successfully!");
            setControl(!control);
          }
        });
    }
  };
  return (
    <div>
      <h1 className="text-center custom-margin">
        ALL Orders : {orders?.length}{" "}
      </h1>

      <Table responsive striped bordered hover className="container">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Product</th>
            <th>Price</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        {orders.map((order, index) => (
          <tbody key={order?._id}>
            <tr>
              <td>{index}</td>
              <td>{user?.displayName}</td>
              <td>{order?.email}</td>
              <td>{order?.product}</td>
              <td>{order?.price}</td>

              <td>
                <button
                  // onClick={() => handleUpdate(booking._id)}
                  className="btn btn-primary"
                >
                  {order?.status === "pending" ? "Pending" : "Approved"}
                </button>
              </td>
              <td
                className="delete-btn text-center"
                onClick={() => handleDelete(order?._id)}
              >
                <i class="far fa-trash-alt"></i>
              </td>
            </tr>
          </tbody>
        ))}
      </Table>
    </div>
  );
};

export default ManageAllOrders;
