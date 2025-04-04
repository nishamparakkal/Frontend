import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import './Cart.css';

const BackEndURL = process.env.REACT_APP_BACKEND_URL;

const Cart = () => {
  const [cart, setCart] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    checkLogin();
  }, [BackEndURL]); // Dependency on BackEndURL

  console.log("Backend URL:", BackEndURL); // Debugging log

  const checkLogin = () => {
    const token = localStorage.getItem("token");
    if (!token) {
      setTimeout(() => navigate("/login"), 100);
    } else if (BackEndURL) {
      fetchCart();
    }
  };

  const fetchCart = async () => {
    if (!BackEndURL) return; // Ensure BackEndURL is available
    try {
      const response = await axios.get(`${BackEndURL}/cart`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
      });
      console.log("Cart Data:", response.data);
      setCart(response.data || []);
    } catch (error) {
      console.error("Error fetching cart:", error);
    }
  };

  return (
    <div className="container mx-auto p-4 max-w-md bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-bold text-center p-4 bg-gray-100">Your Cart</h2>

      {BackEndURL ? (
        cart.length === 0 ? (
          <p className="p-4">Your cart is empty</p>
        ) : (
          cart.map((item) => (
            item.productId && (
              <div key={item._id} className="flex items-center p-3 mb-2 bg-gray-50 rounded shadow">
                <img src={item.productId.image || ""} alt={item.productId.name || "Product"} className="w-12 h-12 rounded mr-4 cartimg" />
                <div className="flex-1">
                  <strong>{item.productId.name || "Unknown Product"}</strong>
                  <p>1KG</p>
                </div>
              </div>
            )
          ))
        )
      ) : (
        <p className="text-center p-4 text-gray-500">Waiting for backend URL...</p>
      )}
    </div>
  );
};

export default Cart;
