import { useNavigate } from "react-router";
import {
  CreateProductMutationVariables,
  useCreateProductMutation,
  useGetCategoriesQuery,
} from "../types";

const Categories = () => {
  const navigate = useNavigate();
  const {
    data: categoriesData,
    loading: categoriesLoading,
    error: categoriesError,
  } = useGetCategoriesQuery();
  const [
    createProductMutation,
    { data: productData, loading: productLoading, error: productError },
  ] = useCreateProductMutation();

  if (categoriesError) console.log(categoriesError);

  if (categoriesLoading) return <span>Loading...</span>;

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(event);

    const form = event.target as HTMLFormElement;

    console.log(parseInt(form.productCategory.value));


    const variables: CreateProductMutationVariables = {
      name: form.productName.value,
      image: form.productImage.value,
      price: parseFloat(form.productPrice.value),
      categoryId: parseInt(form.productCategory.value, 10),
    };

    console.log(variables);


    await createProductMutation({ variables });

    if (productError) console.log(productError);

    event.preventDefault();
    // navigate("/products");
  };

  return (
    <>
      <h1>Add product</h1>
      <form onSubmit={handleSubmit}>
        <p>
          <input type="text" name="productName" placeholder="Product name" />
        </p>
        <p>
          <input
            type="text"
            name="productImage"
            placeholder="Product image url"
          />
        </p>
        <p>
          <input
            type="number"
            name="productPrice"
            placeholder="Product price"
            step="0.01"
          />
        </p>
        <p>
          <select name="productCategory">
            <option>Product category</option>
            {categoriesData?.categories?.map((category, index) => (
              <option key={index} value={category?.categoryId}>
                {category?.name}
              </option>
            ))}
          </select>
        </p>
        <p>
          {" "}
          <button type="submit">Add product</button>
        </p>
      </form>
    </>
  );
};

export default Categories;
