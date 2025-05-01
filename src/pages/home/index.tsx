import { Stack } from "@mantine/core";
import { Suspense, lazy } from "react";

const Banner = lazy(() => import("./Carousel"));
const BestSeller = lazy(() => import("./product/BestSeller"));
const CategoryList = lazy(() => import("./category/CategoryList"));
const Hero = lazy(() => import("./Hero"));
const NewArrival = lazy(() => import("./product/NewArrival"));
const Values = lazy(() => import("./Values"));

export default function HomePage() {
  return (
    <Stack gap="xl">
      <Suspense fallback={<div>Loading...</div>}>
        <Banner />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <CategoryList />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <BestSeller />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <NewArrival />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <Hero />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <Values />
      </Suspense>
    </Stack>
  );
}
