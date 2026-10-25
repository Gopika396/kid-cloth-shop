import { useEffect, useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import AOS from "aos";

import products from "./data/products";
import Home from "./components/Home";
import Products from "./components/Products";
import About from "./components/About";
import Contact from "./components/Contact";
import Cart from "./components/Cart";

const CART_KEY = "ls-cart-v2";

function App() {
  const location = useLocation();

  // Only { id, quantity } is stored. Product details always come from products.js,
  // so old/stale cart data can never show wrong names or images.
  const [cartItems, setCartItems] = useState(() => {
    try {
      const saved = JSON.parse(localStorage.getItem(CART_KEY));
      return Array.isArray(saved) ? saved : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem(CART_KEY, JSON.stringify(cartItems));
  }, [cartItems]);

  useEffect(() => {
    AOS.init({ duration: 700, once: true });
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
    const t = setTimeout(() => AOS.refreshHard(), 50);
    return () => clearTimeout(t);
  }, [location.pathname]);

  const cart = cartItems
    .map((item) => {
      const product = products.find((p) => p.id === item.id);
      return product ? { ...product, quantity: item.quantity } : null;
    })
    .filter(Boolean);

  const addToCart = (product) => {
    setCartItems((current) => {
      const found = current.find((item) => item.id === product.id);
      if (found) {
        return current.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...current, { id: product.id, quantity: 1 }];
    });
  };

  const updateQuantity = (id, amount) => {
    setCartItems((current) =>
      current
        .map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + amount } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeFromCart = (id) => {
    setCartItems((current) => current.filter((item) => item.id !== id));
  };

  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);

  const sharedProps = {
    products,
    cart,
    cartCount,
    addToCart,
    updateQuantity,
    removeFromCart
  };

  return (
    <Routes>
      <Route path="/" element={<Home {...sharedProps} />} />
      <Route path="/products" element={<Products {...sharedProps} />} />
      <Route path="/about" element={<About {...sharedProps} />} />
      <Route path="/contact" element={<Contact {...sharedProps} />} />
      <Route path="/cart" element={<Cart {...sharedProps} />} />
      <Route path="*" element={<Home {...sharedProps} />} />
    </Routes>
  );
}

export default App;