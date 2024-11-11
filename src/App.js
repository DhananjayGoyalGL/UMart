import { useState, useEffect } from "react";
import ProductList from "./components/ProductList";
import Cart from "./components/Cart";
import "./App.css";
import Navbar from "./components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { Spinner } from "react-bootstrap";

function App() {
  const [loading, setLoading] = useState(true);
  const [cartItems, setCartItems] = useState([]);

  const handleAddToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  useEffect(() => {
    setTimeout(() => setLoading(false), 3000);
  }, []);

  if (loading)
    return (
      <div className="loading-container">
        <Spinner animation="border" variant="info" size="lg" />
        Loading ...
      </div>
    );

  return (
    <>
      <Navbar />
      <div className="main-content">
        <ProductList onAddToCart={handleAddToCart} loading={loading} />
        <Cart cartItems={cartItems} loading={loading} />
      </div>
    </>
  );
}

export default App;
