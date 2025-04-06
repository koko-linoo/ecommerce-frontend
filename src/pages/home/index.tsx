import { Divider, Stack } from "@mantine/core";
import { Banner } from "./Carousel";
import { CategoryList } from "./category/CategoryList";
import { BestSeller } from "./product/BestSeller";
import { NewArrival } from "./product/NewArrival";
import { Values } from "./Values";

export function HomePage() {
  return (
    <Stack>
      <Banner />
      <CategoryList />
      <BestSeller />
      <Divider />
      <NewArrival />
      <Divider />
      <Values />
    </Stack>
  );
}
