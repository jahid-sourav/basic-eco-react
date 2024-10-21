import { toast } from "react-toastify";
import PageTitle from "../../components/pageTitle";
import useCart from "../../hooks/useCart";

function Me() {
  const { productsInCart, setProductsInCart } = useCart();

  const handleRemoveProduct = (product) => {
    const filtered = productsInCart.filter((item) => item.id !== product.id);
    toast.success(`${product.title} Product Has Been Removed!`);
    setProductsInCart(filtered);

    localStorage.setItem("productsInCart", JSON.stringify(filtered));
  };

  return (
    <>
      <PageTitle title={"User Profile"} />
      <div className="container py-4">
        {productsInCart.length === 0 ? (
          "Please Add Product"
        ) : (
          <>
            <h1 className="mb-2">Cart : {productsInCart.length}</h1>
            {productsInCart.map((item) => (
              <div key={item.id}>
                <p>
                  {item.title}{" "}
                  <span
                    className="text-red-500 underline cursor-pointer"
                    onClick={() => handleRemoveProduct(item)}
                  >
                    Remove
                  </span>
                </p>
              </div>
            ))}
          </>
        )}
      </div>
    </>
  );
}

export default Me;
