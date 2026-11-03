import React, { useContext } from "react";
import { useLocation } from "react-router-dom";
import { MdShoppingCart } from "react-icons/md";
import Navbar from "../navbar/Navbar";
import CartContext from "../../contexts/CartContext";
import "./header.css";

const Header = () => {
  const location = useLocation();
  const { cartState } = useContext(CartContext);

  // تعیین عنوان پویا بر اساس مسیر فعلی
  let pageTitle = "Shop";
  if (location.pathname.includes("/about")) pageTitle = "About Me";
  else if (location.pathname.includes("/blog")) pageTitle = "Blog";
  else if (location.pathname.includes("/contact")) pageTitle = "Contact Us";
  else if (location.pathname.includes("/product/"))
    pageTitle = "Product Details";

  return (
    <header className="header">
      <div>
        <h2>{pageTitle}</h2>
        <Navbar />
      </div>
      <div className="cart-icon-wrapper">
        <MdShoppingCart size={28} />
        <span className="cart-badge">{cartState.carts.length}</span>
      </div>
    </header>
  );
};

export default Header;
