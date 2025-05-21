import { createContext, useReducer } from "react";
import { cartReducer, initialState } from "../reducers/cartReducers.js";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const addToCart = () => {
    dispatch({ type: "increment" });
  };

  const removeFromCart = () => {
    dispatch({ type: "decrement" });
  };

  return (
    <CartContext.Provider
      value={{
        cartCount: state.cartCount,
        addToCart,
        removeFromCart
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
