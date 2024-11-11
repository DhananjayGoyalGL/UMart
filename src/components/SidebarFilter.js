//SideFilter.js

import "./SidebarFilter.css";

function SidebarFilter({
  onCategorySelect,
  onPriceRangeChange,
  onRatingFilter,
}) {
  return (
    <div className="input-group-container">
      <div className="input-group">
        <h3>Categories</h3>
        <select onChange={(e) => onCategorySelect(e.target.value)}>
          <option value="">All</option>
          <option value="electronics">Electronics</option>
          <option value="jewelery">Jewelry</option>
          <option value="men's clothing">Men's Clothing</option>
          <option value="women's clothing">Women's Clothing</option>
        </select>
        <p className="orange-text">See All</p>
      </div>

      <div className="input-group">
        <h3>Price Range</h3>
        <label>
          <input type="checkbox" onChange={() => onPriceRangeChange("0-100")} />
          $0 - $100
        </label>
        <label>
          <input
            type="checkbox"
            onChange={() => onPriceRangeChange("100-200")}
          />
          $100 - $200
        </label>
        <label>
          <input
            type="checkbox"
            onChange={() => onPriceRangeChange("200-300")}
          />
          $200 - $300
        </label>
        <label>
          <input
            type="checkbox"
            onChange={() => onPriceRangeChange("300-400")}
          />
          $300 - $400
        </label>
        <label>
          <input
            type="checkbox"
            onChange={() => onPriceRangeChange("400-1000")}
          />
          $400 - $1000
        </label>
        <p className="orange-text">See All</p>
      </div>

      <div className="input-group">
        <h3>Rating</h3>
        <label>
          <input type="checkbox" onChange={() => onRatingFilter(4)} />
          <span style={{ color: "gold" }}>★★★★</span> & Up
        </label>
        <label>
          <input type="checkbox" onChange={() => onRatingFilter(3)} />
          <span style={{ color: "gold" }}>★★★</span> & Up
        </label>
        <label>
          <input type="checkbox" onChange={() => onRatingFilter(2)} />
          <span style={{ color: "gold" }}>★★</span> & Up
        </label>
        <label>
          <input type="checkbox" onChange={() => onRatingFilter(1)} />
          <span style={{ color: "gold" }}>★</span> & Up
        </label>
      </div>
    </div>
  );
}

export default SidebarFilter;
