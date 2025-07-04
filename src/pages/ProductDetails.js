import { useState } from "react";
import "../styles/ProductDetails.css";

const product = {
  name: "Traditional Wedding Garland",
  description:
    "A handcrafted floral garland made with synthetic fabric flowers, perfect for weddings, pujas, and festive decor.",
  price: 399,
  rating: 4.7,
  reviews: 112,
  sizes: ["4 ft", "5 ft", "6 ft"],
  colors: [
    { name: "Red & Yellow", img: "/images/sample1.jpg" },
    { name: "Pink & White", img: "/images/sample2.jpg" },
    { name: "Green & Orange", img: "/images/sample3.jpg" },
  ],
  images: [
    "/images/sample1.jpg",
    "/images/sample1-side.jpg",
    "/images/sample1-close.jpg",
    "/images/sample1-full.jpg",
  ],
  offer: "Buy 2 Garlands, Get ₹50 Off",
};

const ProductDetailsPage = () => {
  const [selectedImage, setSelectedImage] = useState(product.images[0]);
  const [selectedSize, setSelectedSize] = useState(product.sizes[0]);
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [quantity, setQuantity] = useState(1);

  const changeQty = (delta) => {
    setQuantity((q) => Math.max(1, q + delta));
  };

  const handleAddToCart = () => {
    alert(`Added ${quantity} item(s) to cart`);
  };

  const handleBuyNow = () => {
    alert('Proceeding to checkout');
  };

  return (
    <div className="product-detail-container">
      <div className="image-thumbnails">
        {product.images.map((img, index) => (
          <img
            key={index}
            src={img}
            alt="thumbnail"
            className={`thumb ${selectedImage === img ? "active" : ""}`}
            onClick={() => setSelectedImage(img)}
          />
        ))}
      </div>

      <div className="main-image-section">
        <img src={selectedImage} alt="Garland" className="main-image" />
      </div>

      <div className="product-info">
        <h4>Divine Garlands Collection</h4>
        <h2>{product.name}</h2>
        <p className="desc">{product.description}</p>

        <div className="rating">
          ⭐ {product.rating} ({product.reviews} reviews)
        </div>

        <div className="colors">
          <p><strong>Color:</strong> {selectedColor.name}</p>
          <div className="color-thumbs">
            {product.colors.map((color, i) => (
              <img
                key={i}
                src={color.img}
                alt={color.name}
                className={`color-thumb ${selectedColor.name === color.name ? "active" : ""}`}
                onClick={() => {
                  setSelectedColor(color);
                  setSelectedImage(color.img);
                }}
              />
            ))}
          </div>
        </div>

        <div className="sizes">
          <p><strong>Size:</strong></p>
          <div className="size-options">
            {product.sizes.map((size) => (
              <button
                key={size}
                className={`size-btn ${selectedSize === size ? "selected" : ""}`}
                onClick={() => setSelectedSize(size)}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        <div className="price-box">
          <span className="price">₹{product.price}</span>
          <span className="in-stock">In stock</span>
        </div>

        <div className="quantity">
          <p><strong>Qty:</strong></p>
          <div className="qty-controls">
            <button className="qty-btn" onClick={() => changeQty(-1)}>-</button>
            <span>{quantity}</span>
            <button className="qty-btn" onClick={() => changeQty(1)}>+</button>
          </div>
        </div>

        <div className="offer-box">
          <p><strong>{product.offer}</strong></p>
          <small>Discount applied in cart</small>
        </div>

        <div className="action-section">
          <button className="cart-btn" onClick={handleAddToCart}>
            Add to Cart
          </button>
          <button className="buy-btn" onClick={handleBuyNow}>Buy Now</button>
        </div>

        <ul className="features">
          <li>Reusable artificial flowers</li>
          <li>Handcrafted with care</li>
          <li>Perfect for weddings and pujas</li>
        </ul>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
