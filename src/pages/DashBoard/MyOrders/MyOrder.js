import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import useAuth from "../../../hooks/UseAuth/useAuth";

const MyOrder = () => {
  const [myOrders, setMyOrders] = useState([]);

  const { control, setControl, user } = useAuth();
  useEffect(() => {
    fetch(`https://bicycle-barn-server-side.onrender.com/orders/${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setMyOrders(data);
      });
  }, [control, user.email]);
  //handle delete
  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure, you want to delete?");
    if (proceed) {
      const url = `https://bicycle-barn-server-side.onrender.com/orders/${id}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            alert("data Deleted!!");
            setControl(!control);
          }
        });
    }
  };
  return (
    <div>
      <h1 className="text-center custom-margin">
        My Orders : {myOrders?.length}{" "}
      </h1>

      <Table responsive striped bordered hover className="container">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th className="text-center">Product</th>
            <th>Price</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        {myOrders.map((order, index) => (
          <tbody key={order?._id}>
            <tr>
              <td>{index}</td>
              <td>{user?.displayName}</td>
              <td>{order?.product}</td>
              <td>{order?.price}</td>

              <td>
                <button className="btn btn-primary">
                  {order?.status === "pending" ? "Pending" : "Approved"}
                </button>
              </td>
              <td
                className="delete-btn text-center"
                onClick={() => handleDelete(order?._id)}
              >
                <i class="fas fa-times"></i>
              </td>
            </tr>
          </tbody>
        ))}
      </Table>
    </div>
  );
};

export default MyOrder;
