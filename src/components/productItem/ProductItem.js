import React, { useContext } from "react";
import { Link } from "react-router-dom";
import CartContext from "../../contexts/CartContext";
import Button from "../button/Button";
import { PROJECT_URL } from "../../configs/general";
import "./productItem.css";

const ProductItem = ({ product }) => {
  const { cartState, cartDispatch } = useContext(CartContext);
  const isInCart = cartState.carts.includes(product.id);

  const handleCartToggle = () => {
    if (isInCart) {
      cartDispatch({ type: "REMOVE_FROM_CART", id: product.id });
    } else {
      cartDispatch({ type: "ADD_TO_CART", id: product.id });
    }
  };

  return (
    <div className="product-card">
      <img
        src={`${PROJECT_URL}/${product.image}`}
        alt={product.name}
        className="product-img"
      />
      <h4>{product.name}</h4>
      <p>{product.price}</p>
      <Button
        handleClick={handleCartToggle}
        style={{
          backgroundColor: isInCart ? "red" : "green",
          color: "#fff",
          fontSize: "14px",
          padding: "5px 10px",
        }}
      >
        {isInCart ? "Remove from Cart" : "Add to Cart"}
      </Button>
      <Link to={`/product/${product.id}`}>View Details</Link>
    </div>
  );
};

export default ProductItem;
