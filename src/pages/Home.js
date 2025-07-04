import { useEffect, useState } from "react";
import axios from "axios";
import ProductCard from "../components/ProductCard";
import { Link } from "react-router-dom";
import "../styles/Home.css";

// ✅ Image arrays
const mainCarouselImages = [
  "/images/garland1.jpg",
  "/images/garland2.jpg",
  "/images/garland3.jpg",
  "/images/garland4.jpg",
];

const verticalCarousel1 = [
  "/images/side1.jpg",
  "/images/side2.jpg",
  "/images/side3.jpg",
];

const verticalCarousel2 = [
  "/images/side4.jpg",
  "/images/side5.jpg",
  "/images/side6.jpg",
];

const Home = () => {
  const [products, setProducts] = useState([]);
  const [mainIndex, setMainIndex] = useState(0);
  const [side1Index, setSide1Index] = useState(0);
  const [side2Index, setSide2Index] = useState(0);

  useEffect(() => {
    axios.get("http://localhost:8000/products").then((res) => {
      setProducts(res.data);
    });

    const mainInterval = setInterval(() => {
      setMainIndex((prev) => (prev + 1) % mainCarouselImages.length);
    }, 3000);

    const side1Interval = setInterval(() => {
      setSide1Index((prev) => (prev + 1) % verticalCarousel1.length);
    }, 2500);

    const side2Interval = setInterval(() => {
      setSide2Index((prev) => (prev + 1) % verticalCarousel2.length);
    }, 2500);

    return () => {
      clearInterval(mainInterval);
      clearInterval(side1Interval);
      clearInterval(side2Interval);
    };
  }, []);

  return (
    <div className="home">
      {/* Carousel Section */}
      <div className="carousel-section">
        <div className="main-carousel">
          <img src={mainCarouselImages[mainIndex]} alt="Main Carousel" />
        </div>

        <div className="side-carousels">
          <div className="side-carousel">
            <img src={verticalCarousel1[side1Index]} alt="Side Carousel 1" />
          </div>
          <div className="side-carousel">
            <img src={verticalCarousel2[side2Index]} alt="Side Carousel 2" />
          </div>
        </div>
      </div>

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
      </div>
    </div>
  );
};

export default Home;