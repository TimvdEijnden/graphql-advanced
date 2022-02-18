import { CategoryModel } from "./models";

export const resolvers = {
  Query: {
    categories: async () => await CategoryModel.find(),
    category: async (_, { id }) => await CategoryModel.findById(id),
  },
  Category: {
    __resolveReference: async (category) => {
      console.log("[Category __resolveReference]", category);

      return await CategoryModel.findOne({ categoryId: category.categoryId });
    },
  },
};
