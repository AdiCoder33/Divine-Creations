import { useState } from "react";
import "../styles/ProductCard.css";

const ProductCard = ({ product }) => {
  const [isFav, setIsFav] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const toggleFav = () => {
    setIsFav(!isFav);
  };

  const handleAddToCart = () => {
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 2000); // Auto hide after 2 sec
  };

  return (
    <div className="product-card">
      <div className="product-image-container">
        <img src={product.image_url} alt={product.name} className="product-image" />
        <button className="fav-btn" onClick={toggleFav}>
          {isFav ? "★" : "☆"}
        </button>
      </div>
      <div className="product-details">
        <h3 className="product-title">{product.name}</h3>
        <p className="product-price">₹{product.price}</p>
        <div className="product-actions">
          <button className="buy-btn">Buy Now</button>
          <button className="cart-btn" onClick={handleAddToCart}>
            Add to Cart
          </button>
        </div>
      </div>

      {/* Cart popup */}
      {showPopup && (
        <div className="cart-popup">
          ✅ Added to Cart!
        </div>
      )}
    </div>
  );
};

export default ProductCard;
