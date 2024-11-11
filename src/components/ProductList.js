//ProductList.js

import { useState, useEffect } from "react";
import axios from "axios";
import SidebarFilter from "./SidebarFilter";
import Popup from "./Popup";
import "./ProductList.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";

function ProductList({ onAddToCart, loading }) {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [showPopup, setShowPopup] = useState(false);
  const [popupProduct, setPopupProduct] = useState(null);

  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((response) => {
        setProducts(response.data);
        setFilteredProducts(response.data);
      })
      .catch(() => console.error("Error fetching products"));
  }, []);

  const handleAddToCart = (product) => {
    onAddToCart(product);
    setPopupProduct(product);
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 2000);
  };

  return (
    <div className="product-container">
      <SidebarFilter
        onCategorySelect={(category) => {
          const filtered = category
            ? products.filter((p) => p.category === category)
            : products;
          setFilteredProducts(filtered);
        }}
      />
      <div className="product-list">
        {filteredProducts.map((product) => (
          <div key={product.id} className="product-card">
            <div className="discount-tag">10% Off</div>
            <FontAwesomeIcon icon={faHeart} className="heart-icon" />
            <img src={product.image} alt={product.title} />
            <h2>{product.title}</h2>
            <p>
              ${product.price}
              <span className="discount-prize">2999</span>{" "}
              <span className="given-discount">(33% off)</span>
            </p>
            <button
              onClick={() => handleAddToCart(product)}
              className="add-to-cart-btn"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
      {showPopup && popupProduct && (
        <Popup
          productName={popupProduct.title}
          productPrice={popupProduct.price}
        />
      )}
    </div>
  );
}

export default ProductList;
