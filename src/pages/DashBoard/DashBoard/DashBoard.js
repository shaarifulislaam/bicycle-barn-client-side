import "react-bootstrap-drawer/lib/style.css";
import React, { useState } from "react";
import { Col, Collapse, Container, Nav, Row, Button } from "react-bootstrap";
import { Drawer } from "react-bootstrap-drawer";
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";
import DashBoardHome from "../DashBoardHome/DashBoardHome";
import MyOrder from "../MyOrders/MyOrder";
import Reviews from "../Reviews/Reviews";
import Payment from "../Payment/Payment";
import ManageAllOrders from "../ManageAllOrders/ManageAllOrders";
import ManageProducts from "../ManageProducts/ManageProducts";
import AddProduct from "../AddProduct/AddProduct";
import MakeAdmin from "../MakeAdmin/MakeAdmin";
import useAuth from "../../../hooks/UseAuth/useAuth";
import AdminRoute from "../../Home/Login/AdminRoute/AdminRoute";

const DashBoard = (props) => {
  const [open, setOpen] = useState(false);

  const handleToggle = () => setOpen(!open);

  let { path, url } = useRouteMatch();

  const { user, logOut, admin } = useAuth();

  return (
    <Container>
      <Row>
        <Col sm={3}>
          {" "}
          <Drawer {...props}>
            <Drawer.Toggle onClick={handleToggle} />
            <Collapse in={open}>
              <Drawer.Overflow>
                <Drawer.ToC>
                  <Link style={{ textDecoration: "none" }} to="/">
                    <Button className="mb-2 w-100 mx-2" variant="secondary">
                      Home
                    </Button>
                  </Link>
                  <br />
                  {!admin && (
                    <div>
                      <Link style={{ textDecoration: "none" }} to={`${url}`}>
                        <Button
                          className="mb-2 w-75 w-100 mx-2"
                          variant="secondary"
                        >
                          Dashboard
                        </Button>
                      </Link>
                      <br />

                      <Link
                        style={{ textDecoration: "none" }}
                        to={`${url}/myOrder`}
                      >
                        <Button className="mb-2 w-100 mx-2" variant="secondary">
                          My Order
                        </Button>
                      </Link>
                      <br />
                      <Link
                        style={{ textDecoration: "none" }}
                        to={`${url}/payment`}
                      >
                        <Button className="mb-2 w-100 mx-2" variant="secondary">
                          Payment
                        </Button>
                      </Link>
                      <br />
                      <Link
                        style={{ textDecoration: "none" }}
                        to={`${url}/reviews`}
                      >
                        <Button
                          className="mb-2 w-100 mx-2 "
                          variant="secondary"
                        >
                          Reviews
                        </Button>
                        <br />
                      </Link>
                    </div>
                  )}
                  {admin && (
                    <div>
                      <Link
                        style={{ textDecoration: "none" }}
                        to={`${url}/manageAllOrders`}
                      >
                        <Button className="mb-2 w-100 mx-2" variant="secondary">
                          Manage All Orders
                        </Button>
                      </Link>
                      <br />
                      <Link
                        style={{ textDecoration: "none" }}
                        to={`${url}/addProduct`}
                      >
                        <Button className="mb-2 w-100 mx-2" variant="secondary">
                          Add Product
                        </Button>
                      </Link>
                      <br />
                      <Link
                        style={{ textDecoration: "none" }}
                        to={`${url}/makeAdmin`}
                      >
                        <Button className="mb-2 w-100 mx-2" variant="secondary">
                          Make Admin
                        </Button>
                      </Link>
                      <br />
                      <Link
                        style={{ textDecoration: "none" }}
                        to={`${url}/manageProducts`}
                      >
                        <Button className="mb-2 w-100 mx-2" variant="secondary">
                          Manage Products
                        </Button>
                      </Link>
                    </div>
                  )}
                  <Link style={{ textDecoration: "none" }} to="/login">
                    <Button
                      onClick={logOut}
                      className="mb-2 w-100 mx-2"
                      variant="secondary"
                    >
                      Logout
                    </Button>
                  </Link>
                </Drawer.ToC>
              </Drawer.Overflow>
            </Collapse>
          </Drawer>
        </Col>
        <Col sm={9}>
          <Switch>
            <Route exact path={path}>
              <DashBoardHome></DashBoardHome>
            </Route>
            <Route path={`${path}/myOrder`}>
              <MyOrder></MyOrder>
            </Route>
            <Route path={`${path}/payment`}>
              <Payment></Payment>
            </Route>
            <Route path={`${path}/reviews`}>
              <Reviews></Reviews>
            </Route>
            <AdminRoute path={`${path}/manageAllOrders`}>
              <ManageAllOrders></ManageAllOrders>
            </AdminRoute>
            <AdminRoute path={`${path}/addProduct`}>
              <AddProduct></AddProduct>
            </AdminRoute>
            <AdminRoute path={`${path}/makeAdmin`}>
              <MakeAdmin></MakeAdmin>
            </AdminRoute>
            <AdminRoute path={`${path}/manageProducts`}>
              <ManageProducts></ManageProducts>
            </AdminRoute>
          </Switch>
        </Col>
      </Row>
    </Container>
  );
};

export default DashBoard;
