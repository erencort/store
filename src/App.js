import Register from "./components/Register";
import { Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home";
import Header from "./components/Header";
import Products from "./components/Products";
import ProductDetail from "./components/ProductDetail";
import { useSelector } from "react-redux";
import ProfileUpdate from "./components/ProfileUpdate";

function App() {
  return (
    <div>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:itemId" element={<ProductDetail />} />
      </Routes>
    </div>
  );
}

export default App;
