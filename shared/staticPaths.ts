import { Category } from "./types";

interface CategoryStaticParams {
  id: Category;
}

interface CategoryStaticPath {
  params: CategoryStaticParams;
}

const categoriesToPreRender: Category[] = ["Science", "Technology"];

export const categoryPaths: CategoryStaticPath[] = categoriesToPreRender.map(
  (category) => ({ params: { id: category, hh: 33 } })
);
