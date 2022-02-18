import { useParams } from "react-router-dom";
import { useGetProductQuery } from "../types";

const Product = () => {
  const { productId } = useParams();
  const { data, loading, error } = useGetProductQuery({
    variables: {
      id: productId as string,
    },
  });

  if(error) console.error(error)

  if(loading) return <span>Loading...</span>

  return (
    <>
      <h1>{data?.product?.name}</h1>
      <pre>€ {data?.product?.price}</pre>
      <img src={data?.product?.image!} alt={data?.product?.name!} />
      {/* TODO: show categories */}
    </>
  );
};

export default Product;
