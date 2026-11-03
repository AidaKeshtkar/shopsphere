import React, { useReducer } from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import CartContext from "../../contexts/CartContext";
import CartReducer from "../../reducers/Cart";
import "./layout.css";

// مقدار اولیه سبد خرید از localStorage
const initialCartState = {
  carts: localStorage.getItem("carts")
    ? JSON.parse(localStorage.getItem("carts"))
    : [],
};

const Layout = ({ children }) => {
  const [cartState, cartDispatch] = useReducer(CartReducer, initialCartState);

  return (
    <CartContext.Provider value={{ cartState, cartDispatch }}>
      <div className="layout-container">
        <Header />
        <main className="main-content">{children}</main>
        <Footer />
      </div>
    </CartContext.Provider>
  );
};

export default Layout;
