import { Link } from "react-router-dom";
import { useGetProductsQuery } from "../types";

const Products = () => {
  const { data, loading, error } = useGetProductsQuery();

  if(error) console.error(error)

  if(loading) return <span>Loading...</span>

  return (
    <>
      <h1>Products</h1>
      {loading ? (
        <span>loading....</span>
      ) : (
        <ul className="list">
          {data?.products?.map((product, index) => (
            <li key={index}>
              <Link to={`./${product?.id}`} key={product?.id}>
                {product?.name}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </>
  );
};

export default Products;
