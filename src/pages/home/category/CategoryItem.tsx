import { Card, Image, Text } from "@mantine/core";

export function CategoryItem({ category }: { category: string }) {
  return (
    <Card radius={0} w={160} withBorder>
      <Card.Section>
        <Image
          src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png"
          h={80}
          alt="No way!"
        />
      </Card.Section>
      <Text fw={500} size="xs" mt="md">
        {category}
      </Text>
    </Card>
  );
}
