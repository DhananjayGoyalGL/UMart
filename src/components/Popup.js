//popup.js

import "./Popup.css";

function Popup({ productName, productPrice }) {
  return (
    <div className="popup">
      <p>
        {productName} added to cart for ${productPrice}!
      </p>
    </div>
  );
}

export default Popup;
