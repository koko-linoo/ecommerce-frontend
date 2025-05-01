import {
  BackgroundImage,
  Button,
  Center,
  Flex,
  Stack,
  Text,
  Title,
} from "@mantine/core";
import { IconArrowRight } from "@tabler/icons-react";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <Flex direction={{ base: "column", md: "row" }}>
      <BackgroundImage
        src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-1.png"
        flex="1"
      >
        <Center h={300} c="white">
          <Title order={1}>Ecommerce</Title>
        </Center>
      </BackgroundImage>
      <Stack
        flex={1}
        w="100%"
        p="xl"
        justify="center"
        align="start"
        bg="primary.0"
        h={300}
      >
        <Title order={4} ta="center" c="indigo">
          SALE UP TO 40% OFF
        </Title>
        <Title order={3} fw="bold">
          HUNDREDS of New lower prices!
        </Title>
        <Text>
          It's more affordable than ever to give every room in your home a
          stylish makeover
        </Text>
        <Button
          size="xs"
          styles={{
            root: {
              borderBottom: "1px solid gray",
              borderRadius: 0,
            },
          }}
          variant="transparent"
          p="0"
          rightSection={<IconArrowRight size={14} />}
          component={Link}
          to="/shop"
        >
          Shop now
        </Button>
      </Stack>
    </Flex>
  );
}
