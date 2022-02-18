import { ProductModel } from "./models";

export const resolvers = {
  Query: {
    products: async () => await ProductModel.find(),
    product: async (_, { id }) => await ProductModel.findById(id),
  },
  Category: {
    products: async (category) => {
      console.log('[Category products]', category);

      return (await ProductModel.find()).filter((product) =>
        product.categories.includes(category.categoryId)
      ) ?? null;
    }
  },
  Product: {
    categories: async (product) => {
      console.log('[Product categories]', product);
      return product.categories.map((categoryId) => ({ __typename: 'Category', categoryId }));
    }
  }
};