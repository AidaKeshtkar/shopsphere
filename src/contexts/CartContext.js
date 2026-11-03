import { createContext } from "react";

const CartContext = createContext({
  cart: [],
  dispatch: () => {},
});

export default CartContext;
