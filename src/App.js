import Footer from "./components/Footer";
import ProductDetails from "./pages/ProductDetails";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CartDetails from "./pages/CartDetails";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import UserProfile from "./pages/UserProfile";
import ProductsList from "./pages/ProductsList";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details" element={<ProductDetails />} />
        <Route path="/cart" element={<CartDetails />} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="/products" element={<ProductsList/>}/>
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
