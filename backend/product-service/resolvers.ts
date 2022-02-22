import {
  ProductModel,
  Availability
} from "./models";

export const resolvers = {
  Query: {
    products: async () => await ProductModel.find(),
    product: async (_, { id }) => await ProductModel.findById(id),
    // availableProducts: async () => await ProductModel.find({ availability: Availability.IN_STOCK }),
  },
  Category: {
    products: async (category) => {
      console.log("[Category products]", category);

      return (
        (await ProductModel.find()).filter((product) =>
          product.categories.includes(category.categoryId)
        ) ?? null
      );
    },
  },
  Product: {
    categories: async (product) => {
      console.log("[Product categories]", product);
      return product.categories.map((categoryId) => ({
        categoryId,
      }));
    },
  },
  Mutation: {
    createProduct: async (_, input) => {
      const doc = {
        name: input.name,
        price: input.price,
        image: input.image,
        categories: [input.categoryId],
      };
      const product = await new ProductModel(doc).save();

      return product;
    },
  },
};
