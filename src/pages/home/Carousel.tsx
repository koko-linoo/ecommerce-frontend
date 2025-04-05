import { Carousel } from "@mantine/carousel";
import { Center } from "@mantine/core";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";

export function Banner() {
  return (
    <Carousel
      loop
      slideGap="sm"
      withIndicators
      height="calc(100vh - var(--app-shell-header-height) - var(--mantine-spacing-md))"
      controlSize={40}
      nextControlIcon={<IconChevronRight />}
      previousControlIcon={<IconChevronLeft />}
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
      <Carousel.Slide>
        <Center h="100%" p="md" bg="primary" c="white">
          <h1>Slide 1</h1>
        </Center>
      </Carousel.Slide>
      <Carousel.Slide>
        <Center h="100%" p="md" bg="primary" c="white">
          <h1>Slide 2</h1>
        </Center>
      </Carousel.Slide>
      <Carousel.Slide>
        <Center h="100%" p="md" bg="primary" c="white">
          <h1>Slide 3</h1>
        </Center>
      </Carousel.Slide>
      {/* ...other slides */}
    </Carousel>
  );
}
