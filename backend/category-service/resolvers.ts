import { CategoryModel } from "./models";

export const resolvers = {
  Query: {
    categories: async () => await CategoryModel.find(),
    category: async (_, { categoryId }) => await CategoryModel.findOne({ categoryId }),
  },
  Category: {
    __resolveReference: async (category) => {
      console.log("[Category __resolveReference]", category);

      return await CategoryModel.findOne({ categoryId: category.categoryId });
    },
  },
};
