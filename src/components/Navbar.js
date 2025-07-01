import { Link } from "react-router-dom";
import "../styles/Navbar.css";

const Navbar = () => (
  <nav className="navbar">
    <div className="navbar-brand">
      <h2><Link to="/">Divine Creations</Link></h2>
    </div>

    <div className="navbar-search">
      <input
        type="text"
        placeholder="Search garlands..."
        className="search-input"
      />
    </div>

    <div className="navbar-links">
      <Link to="/">🛍️ Products</Link>
      <Link to="/offers">🎁 Offers</Link>
      <Link to="/cart">🛒 Cart</Link>
      <Link to="/profile">👤 Profile</Link>
    </div>
  </nav>
);

export default Navbar;
