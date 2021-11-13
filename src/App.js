import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home/Home/Home";
import NotFound from "./pages/NotFound/NotFound";
import Login from "./pages/Home/Login/Login/Login";
import Header from "./pages/shared/Header/Header";
import Footer from "./pages/shared/Footer/Footer";
import Products from "./pages/Home/Products/Products";
import About from "./pages/Home/About/About";
import AllProducts from "./pages/AllProducts/AllProducts";
import Purchase from "./pages/Purchase/Purchase";
import Register from "./pages/Home/Login/Register/Register";
import AuthProvider from "./context/AuthProvider";
import PrivateRoute from "./pages/Home/Login/PrivateRoute/PrivateRoute";
import DashBoard from "./pages/DashBoard/DashBoard/DashBoard";
import Testimonial from "./pages/Home/Testimonial/Testimonial";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route exact path="/home">
              <Home></Home>
            </Route>
            <Route exact path="/login">
              <Login></Login>
            </Route>
            <Route exact path="/register">
              <Register></Register>
            </Route>
            <Route exact path="/about">
              <About></About>
            </Route>
            <Route exact path="/products">
              <Products></Products>
            </Route>
            <Route exact path="/allProducts">
              <AllProducts></AllProducts>
            </Route>
            <PrivateRoute exact path="/purchase/:purchaseId">
              <Purchase></Purchase>
            </PrivateRoute>
            <PrivateRoute path="/dashBoard">
              <DashBoard></DashBoard>
            </PrivateRoute>
            <Route exact path="/Testimonial">
              <Testimonial></Testimonial>
            </Route>
            <Route exact path="*">
              <NotFound></NotFound>
            </Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;
