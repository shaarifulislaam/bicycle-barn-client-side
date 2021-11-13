import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import useAuth from "../../../hooks/UseAuth/useAuth";

const ManageProducts = () => {
  const [manageProducts, setManageProducts] = useState([]);
  const { control, setControl } = useAuth();
  useEffect(() => {
    fetch("https://morning-retreat-31667.herokuapp.com/products")
      .then((res) => res.json())
      .then((data) => setManageProducts(data));
  }, [control]);
  //handle delete
  const handleDelete = (id) => {
    const proceed = window.confirm("Are you sure, you want to delete?");
    if (proceed) {
      const url = `https://morning-retreat-31667.herokuapp.com/${id}`;
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
        Products Available : {manageProducts?.length}{" "}
      </h1>

      <Table responsive striped bordered hover className="container">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        {manageProducts.map((order, index) => (
          <tbody key={order?._id}>
            <tr>
              <td>{index}</td>

              <td>{order?.name}</td>

              <td>{order?.price}</td>

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

export default ManageProducts;
