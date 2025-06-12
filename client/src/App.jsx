import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import ProductDetail from "./pages/ProductDetail";
import Home from "./pages/Home";
import Login from "./pages/auth/Login";
import About from "./pages/About";
import Register from "./pages/auth/Register";
import Checkout from "./pages/Checkout";
import { useSelector } from "react-redux";
import PlaceOrder from "./pages/PlaceOrder";
import OrderConfirmation from "./pages/OrderConfirm";
import { OrderHistory } from "./pages/OrderHistory";

function App() {
  const userLoginReducer = useSelector((state) => state.userLoginReducer);
  const { userInfo } = userLoginReducer;
  return (
    <>
      <Router future={{ v7_relativeSplatPath: true,v7_startTransition: true }}>
        <Routes>
          <Route exact path="/" element={<Home />}></Route>

          <Route exact path="/about" element={<About />}></Route>

          <Route exact path="/products/:id" element={<ProductDetail />}></Route>
          <Route
            exact
            path="/login"
            element={userInfo ? <Navigate to="/"></Navigate> : <Login />}
          ></Route>
          <Route
            exact
            path="/register"
            element={userInfo ? <Navigate to="/"></Navigate> : <Register />}
          ></Route>
          <Route path="/order/:id" element={<OrderConfirmation />} />
          <Route path="/order-history" element={<OrderHistory />} />

          <Route exact path="/checkout" element={<Checkout />}></Route>
          <Route exact path="/placeorder" element={<PlaceOrder />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
