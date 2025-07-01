import { useState } from "react";
import "../styles/ProfilePage.css";

const ProfilePage = () => {
  const [activeSection, setActiveSection] = useState("details");

  const renderSection = () => {
    switch (activeSection) {
      case "details":
        return (
          <div className="profile-section">
            <h2>My Details</h2>
            <p><strong>Name:</strong> Aditya Kumar</p>
            <p><strong>Email:</strong> aditya@example.com</p>
            <p><strong>Phone:</strong> +91-9876543210</p>
          </div>
        );
      case "orders":
        return (
          <div className="profile-section">
            <h2>My Orders</h2>
            <ul>
              <li>Order #12345 - Delivered</li>
              <li>Order #12346 - In Transit</li>
              <li>Order #12347 - Cancelled</li>
            </ul>
          </div>
        );
      case "addresses":
        return (
          <div className="profile-section">
            <h2>My Addresses</h2>
            <p>Home: 123 Main Street, Hyderabad</p>
            <p>Office: 456 Tech Park, Bangalore</p>
          </div>
        );
      case "favourites":
        return (
          <div className="profile-section">
            <h2>My Favourites</h2>
            <ul>
              <li>Red Wedding Garland</li>
              <li>Minimal Tulsi Mala</li>
            </ul>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="profile-container">
      <div className="profile-sidebar">
        <button onClick={() => setActiveSection("details")}>My Details</button>
        <button onClick={() => setActiveSection("orders")}>My Orders</button>
        <button onClick={() => setActiveSection("addresses")}>My Addresses</button>
        <button onClick={() => setActiveSection("favourites")}>My Favourites</button>
      </div>
      <div className="profile-content">
        {renderSection()}
      </div>
    </div>
  );
};

export default ProfilePage;
