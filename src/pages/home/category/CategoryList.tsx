import { Box, Center, useMantineTheme } from "@mantine/core";
import classes from "./style.module.css";

import { Carousel } from "@mantine/carousel";
import { useMediaQuery } from "@mantine/hooks";

const categories = [
  "Electronics",
  "Clothing",
  "Accessories",
  "Furniture",
  "Sports",
  "Toys",
  "Books",
  "Music",
  "Movies",
  "Home & Kitchen",
];

export default function CategoryList() {
  const theme = useMantineTheme();
  const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
  const desktop = useMediaQuery(`(max-width: ${theme.breakpoints.lg})`);
  return (
    <Carousel
      withIndicators
      classNames={classes}
      slideSize={{
        base: "50%",
        sm: "25%",
        lg: "20%",
      }}
      align="start"
      slidesToScroll={mobile ? 2 : desktop ? 4 : 5}
      slideGap="xs"
      nextControlProps={{
        style: {
          backgroundColor: "white",
        },
      }}
      previousControlProps={{
        style: {
          backgroundColor: "white",
        },
      }}
    >
      {categories.map((category) => (
        <Carousel.Slide key={category}>
          <Box bg="primary">
            <Center h={70} c="white">
              {category}
            </Center>
          </Box>
        </Carousel.Slide>
      ))}
    </Carousel>
  );
}
