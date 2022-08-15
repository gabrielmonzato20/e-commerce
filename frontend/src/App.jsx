import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./component/header";
import Footer from "./component/footer";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import CarScreen from "./screens/CarScreen";
import LoginScreen from "./screens/LoginScreen.jsx";
import UserRegisterScreen from "./screens/UserRegisterScreen.jsx";
import UserProfileScreen from "./screens/UserProfileScreen.jsx";
import PaymentScreen from "./screens/PaymentScreen.jsx";
import ShippingScreen from "./screens/ShippingScreen.jsx";
import PlaceOrderScreen from "./screens/PlaceOrderScreen";

function App() {
  return (
    <Router>
      <Header />
      <main className="py-3">
        <Container>
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/product/:id" element={<ProductScreen />} />
            <Route path="/cart/:id" element={<CarScreen />} />
            <Route path="/register" element={<UserRegisterScreen />} />
            <Route path="/profile" element={<UserProfileScreen />} />
            <Route path="/payment" element={<PaymentScreen />} />
            <Route path="/shipping" element={<ShippingScreen />} />
            <Route path="/placeorder" element={<PlaceOrderScreen />} />
            <Route path="/login" element={<LoginScreen />} />
          </Routes>
        </Container>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
