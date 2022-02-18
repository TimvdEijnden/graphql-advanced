import { useGetCategoriesQuery } from "../types";

const Categories = () => {
  const { data, loading, error } = useGetCategoriesQuery();

  if (error) console.error(error);

  if (loading) return <span>Loading...</span>;

  return (
    <>
      <h1>Categories</h1>
      <ul className="list">
        {data?.categories?.map((category, index) => (
          <li key={index}>{category?.name}</li>
        ))}
      </ul>
    </>
  );
};

export default Categories;
