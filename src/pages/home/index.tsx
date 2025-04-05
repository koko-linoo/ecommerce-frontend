import { Stack } from "@mantine/core";
import { Banner } from "./Carousel";
import { CategoryList } from "./category/CategoryList";
import { FeatureProducts } from "./product/FeatureProducts";
import { LatestProducts } from "./product/LatestProducts";

export function HomePage() {
  return (
    <Stack>
      <Banner />
      <CategoryList />
      <FeatureProducts />
      <LatestProducts />
    </Stack>
  );
}
