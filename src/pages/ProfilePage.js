import { useState } from "react";
import "../styles/ProfilePage.css";

const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState("details");
  const [editMode, setEditMode] = useState(false);
  const [expandedOrder, setExpandedOrder] = useState(null); // for tracking toggle

  const [user, setUser] = useState({
    name: "Aditya Kumar",
    email: "aditya@example.com",
    phone: "+91-9876543210",
    dob: "2000-01-01",
    gender: "Male",
    address: "123 Main Street, Hyderabad",
    pincode: "500001",
    state: "Telangana",
    country: "India",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }));
  };

  const renderField = (label, name, type = "text") => (
    <p>
      <strong>{label}:</strong>{" "}
      {editMode ? (
        type === "select" ? (
          <select name={name} value={user[name]} onChange={handleChange}>
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
          </select>
        ) : (
          <input
            type={type}
            name={name}
            value={user[name]}
            onChange={handleChange}
          />
        )
      ) : (
        user[name]
      )}
    </p>
  );

  const renderContent = () => {
    switch (activeTab) {
      case "details":
        return (
          <div className="tab-content">
            <div className="user-details-header">
              <h2>My Details</h2>
              {!editMode && (
                <button className="edit-btn" onClick={() => setEditMode(true)}>
                  Edit
                </button>
              )}
            </div>
            <div className="user-details">
              {renderField("Name", "name")}
              {renderField("Email", "email")}
              {renderField("Phone", "phone")}
              {renderField("Date of Birth", "dob", "date")}
              {renderField("Gender", "gender", "select")}
              {renderField("Address", "address")}
              {renderField("Pincode", "pincode")}
              {renderField("State", "state")}
              {renderField("Country", "country")}
            </div>
            {editMode && (
              <button className="save-btn" onClick={() => setEditMode(false)}>
                Save
              </button>
            )}
          </div>
        );

      case "orders":
        const orders = [
          {
            id: "12345",
            status: "Delivered",
            date: "2025-06-28",
            tracking: ["Ordered", "Packed", "Shipped", "Out for Delivery", "Delivered"],
          },
          {
            id: "12346",
            status: "In Transit",
            date: "2025-06-29",
            tracking: ["Ordered", "Packed", "Shipped"],
          },
          {
            id: "12347",
            status: "Cancelled",
            date: "2025-06-25",
            tracking: ["Ordered", "Cancelled"],
          },
        ];

        return (
          <div className="tab-content">
            <h2>My Orders</h2>
            {orders.map((order) => (
              <div
                key={order.id}
                className="order-card"
                onClick={() => setExpandedOrder(expandedOrder === order.id ? null : order.id)}
              >
                <div className="order-summary">
                  <p><strong>Order #{order.id}</strong></p>
                  <p>Status: {order.status}</p>
                  <p>Date: {order.date}</p>
                </div>
                {expandedOrder === order.id && (
                  <div className="tracking-info">
                    {order.tracking.map((step, index) => (
                      <div key={index} className="tracking-step">
                        <span className="bullet"></span>
                        <span>{step}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        );

      case "addresses":
        return (
          <div className="tab-content">
            <h2>My Addresses</h2>
            <p>Home: 123 Main Street, Hyderabad</p>
            <p>Office: 456 Tech Park, Bangalore</p>
          </div>
        );

      case "favourites":
        return (
          <div className="tab-content">
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
    <div className="profile-wrapper">
      <div className="tab-bar">
        <button className={activeTab === "details" ? "active" : ""} onClick={() => setActiveTab("details")}>My Details</button>
        <button className={activeTab === "orders" ? "active" : ""} onClick={() => setActiveTab("orders")}>My Orders</button>
        <button className={activeTab === "addresses" ? "active" : ""} onClick={() => setActiveTab("addresses")}>My Addresses</button>
        <button className={activeTab === "favourites" ? "active" : ""} onClick={() => setActiveTab("favourites")}>My Favourites</button>
      </div>
      <div className="content-area">{renderContent()}</div>
    </div>
  );
};

export default ProfilePage;
