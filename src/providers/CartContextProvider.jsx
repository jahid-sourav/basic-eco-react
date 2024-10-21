import { useState } from "react";
import { CartContext } from "../context";

function CartContextProvider({ children }) {
  const [productsInCart, setProductsInCart] = useState(() => {
    const savedProducts = localStorage.getItem("productsInCart");
    return savedProducts ? JSON.parse(savedProducts) : [];
  });

  return (
    <CartContext.Provider value={{ productsInCart, setProductsInCart }}>
      {children}
    </CartContext.Provider>
  );
}

export default CartContextProvider;
