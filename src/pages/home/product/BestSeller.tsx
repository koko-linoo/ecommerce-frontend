import { Button, Center, Grid, Stack, Title } from "@mantine/core";
import { ProductItem } from "./ProductItem";

export function BestSeller() {
  return (
    <Stack gap="xl">
      <Title order={2} fw="bolder" ta="center" mt="xl">
        BEST SELLERS
      </Title>
      <Grid>
        <Grid.Col span={{ base: 12, sm: 6, lg: 3 }}>
          <ProductItem />
        </Grid.Col>
        <Grid.Col span={{ base: 12, sm: 6, lg: 3 }}>
          <ProductItem />
        </Grid.Col>
        <Grid.Col span={{ base: 12, sm: 6, lg: 3 }}>
          <ProductItem />
        </Grid.Col>
        <Grid.Col span={{ base: 12, sm: 6, lg: 3 }}>
          <ProductItem />
        </Grid.Col>
      </Grid>
      <Center>
        <Button size="xs" variant="outline" radius="xl" px="xl">
          View all
        </Button>
      </Center>
    </Stack>
  );
}
