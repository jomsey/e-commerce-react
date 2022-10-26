import Footer from "./components/Footer";
import TopBar from "./components/TopBar";
import ProductDetails from "./pages/ProductDetails";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CartDetails from "./pages/CartDetails";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import UserProfile from "./pages/UserProfile";
function App() {
  return (
    <div className="App">
      <TopBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details" element={<ProductDetails />} />
        <Route path="/cart" element={<CartDetails />} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/profile" element={<UserProfile />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
