import "react-bootstrap-drawer/lib/style.css";
import React, { useState } from "react";
import { Col, Collapse, Container, Nav, Row, Button } from "react-bootstrap";
import { Drawer } from "react-bootstrap-drawer";
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";
import DashBoardHome from "../DashBoardHome/DashBoardHome";
import MyOrder from "../MyOrders/MyOrder";
import Reviews from "../Reviews/Reviews";
import Payment from "../Payment/Payment";
import useAuth from "../../../hooks/UseAuth/useAuth";
import ManageAllOrders from "../ManageAllOrders/ManageAllOrders";
import ManageProducts from "../ManageProducts/ManageProducts";
import AddProduct from "../AddProduct/AddProduct";
import MakeAdmin from "../MakeAdmin/MakeAdmin";

const DashBoard = (props) => {
  const [open, setOpen] = useState(false);

  const handleToggle = () => setOpen(!open);

  let { path, url } = useRouteMatch();

  const { user, logOut } = useAuth();

  return (
    <Container>
      <Row>
        <Col sm={4}>
          {" "}
          <Drawer {...props}>
            <Drawer.Toggle onClick={handleToggle} />
            <Collapse in={open}>
              <Drawer.Overflow>
                <Drawer.ToC>
                  <Link style={{ textDecoration: "none" }} to="/">
                    <Button className="mb-2" variant="secondary">
                      Home
                    </Button>
                  </Link>
                  <br />
                  <Link style={{ textDecoration: "none" }} to={`${url}`}>
                    <Button className="mb-2" variant="secondary">
                      Dashboard
                    </Button>
                  </Link>
                  <br />

                  <Link
                    style={{ textDecoration: "none" }}
                    to={`${url}/myOrder`}
                  >
                    <Button className="mb-2" variant="secondary">
                      My Order
                    </Button>
                  </Link>
                  <br />
                  <Link
                    style={{ textDecoration: "none" }}
                    to={`${url}/payment`}
                  >
                    <Button className="mb-2" variant="secondary">
                      Payment
                    </Button>
                  </Link>
                  <br />
                  <Link
                    style={{ textDecoration: "none" }}
                    to={`${url}/reviews`}
                  >
                    <Button className="mb-2" variant="secondary">
                      Reviews
                    </Button>
                    <br />
                  </Link>
                  <Link
                    style={{ textDecoration: "none" }}
                    to={`${url}/manageAllOrders`}
                  >
                    <Button className="mb-2" variant="secondary">
                      Manage All Orders
                    </Button>
                  </Link>
                  <br />
                  <Link
                    style={{ textDecoration: "none" }}
                    to={`${url}/addProduct`}
                  >
                    <Button className="mb-2" variant="secondary">
                      Add Product
                    </Button>
                  </Link>
                  <br />
                  <Link
                    style={{ textDecoration: "none" }}
                    to={`${url}/makeAdmin`}
                  >
                    <Button className="mb-2" variant="secondary">
                      Make Admin
                    </Button>
                  </Link>
                  <br />
                  <Link
                    style={{ textDecoration: "none" }}
                    to={`${url}/manageProducts`}
                  >
                    <Button className="mb-2" variant="secondary">
                      Manage Products
                    </Button>
                  </Link>
                  <br />
                  <Link style={{ textDecoration: "none" }} to="/login">
                    <Button
                      onClick={logOut}
                      className="mb-2"
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
        <Col sm={8}>
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
            <Route path={`${path}/manageAllOrders`}>
              <ManageAllOrders></ManageAllOrders>
            </Route>
            <Route path={`${path}/addProduct`}>
              <AddProduct></AddProduct>
            </Route>
            <Route path={`${path}/makeAdmin`}>
              <MakeAdmin></MakeAdmin>
            </Route>
            <Route path={`${path}/manageProducts`}>
              <ManageProducts></ManageProducts>
            </Route>
          </Switch>
        </Col>
      </Row>
    </Container>
  );
};
const Application = (props) => {
  return (
    <Container fluid>
      <Row className="flex-xl-nowrap">
        <Col xs={12} md={3} lg={2} />
        <Col xs={12} md={9} lg={10}>
          {props.children}
        </Col>
      </Row>
    </Container>
  );
};
export default DashBoard;
