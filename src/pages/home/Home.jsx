import { useState } from "react";
import { useLoaderData, useNavigation } from "react-router-dom";
import PageTitle from "../../components/pageTitle";
import ProductCard from "../../components/ProductCard";

function Home() {
  const products = useLoaderData();
  const [loadData, setLoadData] = useState(6);
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";

  return (
    <>
      <PageTitle title={"Home"} />
      <section className="container pt-4 pb-12">
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {products.slice(0, loadData).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}

        <div className="text-center mt-5">
          {products.length > loadData && (
            <button
              onClick={() => setLoadData(products.length)}
              className="px-3 py-2 bg-black text-white"
            >
              All Products
            </button>
          )}
        </div>
      </section>
    </>
  );
}

export default Home;
