import { useContext, useEffect } from "react";
import { toast } from "react-toastify";
import { CartContext } from "../context";

function useCartActions() {
  const { productsInCart, setProductsInCart } = useContext(CartContext);

  const addToCart = (product) => {
    setProductsInCart((prevProductsInCart) => {
      const alreadyInCart = prevProductsInCart.some(
        (item) => item.id === product.id
      );

      if (alreadyInCart) {
        toast.error("Already Added");
        return prevProductsInCart;
      } else {
        toast.success("Product Added");
        return [...prevProductsInCart, product];
      }
    });
  };

  useEffect(() => {
    localStorage.setItem("productsInCart", JSON.stringify(productsInCart));
  }, [productsInCart]);
  return { productsInCart, addToCart };
}

export default useCartActions;
