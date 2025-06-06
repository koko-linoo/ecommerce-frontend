import { Button, Center, Grid, Stack, Title } from "@mantine/core";
import { ProductItem } from "./ProductItem";

export default function NewArrival() {
  return (
    <Stack gap="xl" mb="xl">
      <Title order={2} fw="bolder" ta="center" mt="xl">
        NEW ARRIVALS
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
