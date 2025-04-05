import { Flex } from "@mantine/core";
import { CategoryItem } from "./CategoryItem";

const categories = [
  "Electronics",
  "Clothing",
  "Accessories",
  "Furniture",
  "Home",
  "Sports",
  "Toys",
  "Books",
];

export function CategoryList() {
  return (
    <Flex gap="xs" wrap="wrap">
      {categories.map((item) => (
        <CategoryItem key={item} category={item} />
      ))}
    </Flex>
  );
}
