import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import productsData from "../app/product.json";
import CartContext from "../../contexts/CartContext";
import Button from "../button/Button";
import { PROJECT_URL } from "../../configs/general";
import "./singleProduct.css";

const SingleProduct = () => {
  const { id } = useParams();
  const product = productsData.find((p) => p.id === id);
  const { cartState, cartDispatch } = useContext(CartContext);

  if (!product) {
    return <h2>Product not found!</h2>;
  }

  const isInCart = cartState.carts.includes(product.id);

  return (
    <div className="single-product">
      <img src={`${PROJECT_URL}/${product.image}`} alt={product.name} />
      <h2>{product.name}</h2>
      <h3>{product.price}</h3>
      <Button
        handleClick={() =>
          cartDispatch({
            type: isInCart ? "REMOVE_FROM_CART" : "ADD_TO_CART",
            id: product.id,
          })
        }
        style={{ backgroundColor: isInCart ? "red" : "green", color: "#fff" }}
      >
        {isInCart ? "Remove from Cart" : "Add to Cart"}
      </Button>
    </div>
  );
};

export default SingleProduct;
