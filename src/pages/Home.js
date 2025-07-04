import { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../components/ProductCard";
import { Link } from "react-router-dom";
import "../styles/Home.css";

// Images shown in the hero carousel
const heroImages = [
  "/images/garland1.jpg",
  "/images/garland2.jpg",
  "/images/garland3.jpg",
  "/images/garland4.jpg",
];

const Home = () => {
  const [products, setProducts] = useState([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    axios.get("http://localhost:8000/products").then((res) => {
      setProducts(res.data);
    });

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % heroImages.length);
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <img src={heroImages[index]} className="hero-img" alt="Divine Garland" />
        <div className="hero-overlay">
          <h1>Divine Creations</h1>
          <p>Colorful artificial flower garlands for every celebration</p>
          <Link to="/products" className="hero-button">Shop Now</Link>
        </div>
      </section>

      {/* 🔵 Info Section about the brand */}
      <div className="info-section">
        <div className="info-image">
          <img src="/images/garland4.jpg" alt="About Divine Garlands" />
        </div>
        <div className="info-text">
          <h2>Why Choose Divine Garlands?</h2>
          <p>
            At Divine Garlands, we blend tradition with elegance. Each garland is handcrafted with care using premium artificial flowers to bring joy to every ceremony, wedding, or celebration. Our mission is to offer high-quality, reusable, and beautiful floral decorations that speak of love and culture.
          </p>
          <p>
            Whether you're decorating your home, planning a wedding, or gifting something meaningful — Divine Garlands is your trusted partner.
          </p>
        </div>
      </div>

      {/* Products Section */}
      <section className="products-section">
        <h1 className="section-title">Flower Garlands Collection</h1>
        <div className="product-grid">
        {/* Real products (max 9 shown) */}
        {products.slice(0, 9).map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}

        {/* Sample demo products to fill up to 11 */}
        <ProductCard
          product={{
            id: "sample1",
            name: "Elegant Red Garland",
            price: 299,
            image_url: "/images/sample1.jpg",
          }}
        />
        <ProductCard
          product={{
            id: "sample2",
            name: "Traditional Wedding Garland",
            price: 399,
            image_url: "/images/sample2.jpg",
          }}
        />
        <ProductCard
          product={{
            id: "sample2",
            name: "Traditional Wedding Garland",
            price: 399,
            image_url: "/images/sample2.jpg",
          }}
        />
        <ProductCard
          product={{
            id: "sample2",
            name: "Traditional Wedding Garland",
            price: 399,
            image_url: "/images/sample2.jpg",
          }}
        />

        {/* 12th Card: See All Products link */}
        <div className="see-all-card">
          <Link to="/products" className="see-all-link">
            <div className="see-all-box">
              <p>See All Products →</p>
            </div>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
