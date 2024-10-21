import { useContext } from "react";
import { CartContext } from "../context";

function useCart() {
  return useContext(CartContext);
}

export default useCart;
