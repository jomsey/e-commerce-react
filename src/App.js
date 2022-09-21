import Footer from "./components/Footer";
import TopBar from "./components/TopBar";
import ProductDetails from "./pages/ProductDetails";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
function App() {
  return (
    <div className="App">
      <TopBar />
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/details"} index element={<ProductDetails />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
