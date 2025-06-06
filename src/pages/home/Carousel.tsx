import classes from "./style.module.css";

import { Carousel } from "@mantine/carousel";
import { BackgroundImage, Center } from "@mantine/core";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";

export default function Banner() {
  const autoplay = useRef(Autoplay({ delay: 5000 }));

  return (
    <Carousel
      loop
      withIndicators
      slideGap="sm"
      plugins={[autoplay.current]}
      onMouseEnter={autoplay.current.stop}
      onMouseLeave={autoplay.current.reset}
      classNames={classes}
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
        <BackgroundImage
          h="100%"
          src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-1.png"
        >
          <Center h="100%" c="white">
            <h1>Slide 1</h1>
          </Center>
        </BackgroundImage>
      </Carousel.Slide>
      <Carousel.Slide>
        <BackgroundImage
          h="100%"
          src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-1.png"
        >
          <Center h="100%" c="white">
            <h1>Slide 2</h1>
          </Center>
        </BackgroundImage>
      </Carousel.Slide>
      <Carousel.Slide>
        <BackgroundImage
          h="100%"
          src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-1.png"
        >
          <Center h="100%" c="white">
            <h1>Slide 3</h1>
          </Center>
        </BackgroundImage>
      </Carousel.Slide>
    </Carousel>
  );
}
