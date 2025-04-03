import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";

function Home() {
  const navigate = useNavigate();

  return (
    <div className="home">
      <header>
        <div className="navbar">
          <div className="logo">Instant <span>Grocer</span></div>
          <div className="search-bar">
            <input type="text" placeholder="Search for your items" />
          </div>
          <div className="icons">
            <button className="cart-btn" onClick={() => navigate("/cart")}>🛒 <span id="cart-count">0</span></button>
          </div>
        </div>
      </header>

      <div className="banner">
        <div className="banner-content">
          <h1>Fresh & Healthy Grocery</h1>
          <p>Get up to <strong>50% OFF</strong> on all products.</p>
          <button className="order-btn" onClick={() => navigate("/product")}>Shop Now</button>
        </div>
        <div className="image">
          <img src="https://drive.google.com/uc?export=view&id=1ER69WsJANC-LfmbWmi7PxrHS_p-AY2wg" alt="Groceries" />
        </div>
      </div>

      <section className="category-section">
        <h2>Explore Categories</h2>
        <div className="categories">
          {["nuts", "millets", "fruits", "vegetables", "cereals", "pulses", "spices", "salt"].map((category) => (
            <button key={category} className="category-item" onClick={() => navigate(`/product`)}>
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>
      </section>

      <section className="suggested-section">
        <h2>Suggested For You</h2>
        <div className="suggested-items">
          <div className="suggested-item">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrsk-PHXl2cB-RinKzRsBmMAuT3qktI10nYQ&s" alt="Almonds" />
            <span>Almond Nuts</span>
            <span className="discount">50% off</span>
          </div>
          <div className="suggested-item">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRtF3PyMjKpGotbzs1PhhRHmXFzOKA6GYU5A&s" alt="Rice" />
            <span>Rice Cereals</span>
            <span className="discount">10% off</span>
          </div>
          <div className="suggested-item">
            <img src="https://5.imimg.com/data5/SELLER/Default/2023/5/308016439/IW/CD/GV/152347570/spices.jpg" alt="Spices" />
            <span>Spices Mix</span>
            <span className="discount">30% off</span>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
