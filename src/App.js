import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home/Home/Home";
import NotFound from "./pages/NotFound/NotFound";
import Login from "./pages/Home/Login/Login/Login";
import Header from "./pages/shared/Header/Header";
import Footer from "./pages/shared/Footer/Footer";
import Products from "./pages/Home/Products/Products";
import Reviews from "./pages/Home/Reviews/Reviews";
import About from "./pages/Home/About/About";
import AllProducts from "./pages/AllProducts/AllProducts";
import Purchase from "./pages/Purchase/Purchase";

function App() {
  return (
    <div className="App">
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
          <Route exact path="/about">
            <About></About>
          </Route>
          <Route exact path="/products">
            <Products></Products>
          </Route>
          <Route exact path="/allProducts">
            <AllProducts></AllProducts>
          </Route>
          <Route exact path="/purchase/:purchaseId">
            <Purchase></Purchase>
          </Route>
          <Route exact path="/reviews">
            <Reviews></Reviews>
          </Route>
          <Route exact path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
