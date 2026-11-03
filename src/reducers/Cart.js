export const CartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      const existingIndex = state.findIndex(
        (item) => item.id === action.payload.id,
      );
      let updatedCart;
      if (existingIndex >= 0) {
        updatedCart = [...state];
        updatedCart[existingIndex].qty += 1;
      } else {
        updatedCart = [...state, { ...action.payload, qty: 1 }];
      }
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return updatedCart;
    }
    case "REMOVE_FROM_CART": {
      const updatedCart = state.filter((item) => item.id !== action.payload.id);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return updatedCart;
    }
    case "INCREASE": {
      const updatedCart = state.map((item) =>
        item.id === action.payload.id ? { ...item, qty: item.qty + 1 } : item,
      );
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return updatedCart;
    }
    case "DECREASE": {
      const updatedCart = state
        .map((item) =>
          item.id === action.payload.id ? { ...item, qty: item.qty - 1 } : item,
        )
        .filter((item) => item.qty > 0);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return updatedCart;
    }
    default:
      return state;
  }
};

export default CartReducer;
