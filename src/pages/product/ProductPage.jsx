import { useLoaderData, useNavigation } from "react-router-dom";
import useCartActions from "../../hooks/useCartActions";

function ProductPage() {
  const product = useLoaderData();
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  const { addToCart } = useCartActions();

  return (
    <div className="container">
      {isLoading ? (
        <p>Loading....</p>
      ) : (
        <div className="py-4">
          <h1>{product.title}</h1>
          <h1>ID : {product.id}</h1>
          <button
            className="px-3 py-2 bg-black text-white"
            onClick={() => addToCart(product)}
          >
            Add
          </button>
          <img
            src={product?.images[0]}
            className="w-[400] h-[400px] object-cover"
          />
        </div>
      )}
    </div>
  );
}

export default ProductPage;
