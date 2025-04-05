import { Flex, ScrollArea, Stack, Title } from "@mantine/core";
import { ProductItem } from "./ProductItem";

export function LatestProducts() {
  return (
    <Stack>
      <Title order={3}>Latest Products</Title>
      <ScrollArea>
        <Flex gap="md">
          {Array.from({ length: 8 }).map((_, index) => (
            <ProductItem key={index} />
          ))}
        </Flex>
      </ScrollArea>
    </Stack>
  );
}
