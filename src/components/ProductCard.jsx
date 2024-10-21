import { Link } from "react-router-dom";
import useCartActions from "../hooks/useCartActions";

function ProductCard({ product }) {
  const { addToCart } = useCartActions();

  return (
    <div className="overflow-hidden rounded bg-white text-slate-500 shadow-md shadow-slate-200">
      {/*  <!-- Image --> */}
      <figure>
        <img
          src={product?.thumbnail}
          alt="card image"
          className="aspect-video w-full"
        />
      </figure>
      {/*  <!-- Body--> */}
      <div className="p-6 text-center">
        <Link className="underline" to={`/products/${product.id}`}>
          {product?.title}
        </Link>
        <p className="capitalize">Category : {product?.category}</p>
        <p className="capitalize">Price : ${product?.price}</p>
      </div>
      <div className="text-center pb-2">
        <button
          className="px-3 py-2 bg-black text-white"
          onClick={() => addToCart(product)}
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
