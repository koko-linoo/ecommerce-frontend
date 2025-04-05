import { Button, Card, Image, Stack, Text } from "@mantine/core";

export function ProductItem() {
  return (
    <Card shadow="sm" withBorder w={240}>
      <Card.Section>
        <Image
          src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png"
          height={120}
          alt="Norway"
        />
      </Card.Section>

      <Stack mt="xs" gap="xs">
        <Text size="md">Classic Tour</Text>
        <Text size="xs">KS - 10000</Text>
        <Button fullWidth radius="xs" size="xs">
          Book classic tour now
        </Button>
      </Stack>
    </Card>
  );
}
