import { Box, Divider, Flex, Grid, Group, Stack } from "@mantine/core";

export function Footer() {
  return (
    <footer>
      <Stack
        bg="primary"
        c="white"
        py="sm"
        mt="md"
        px={{
          base: "xs",
          md: 40,
        }}
      >
        <Grid gutter="md">
          <Grid.Col
            span={{
              base: 12,
              md: 6,
            }}
          >
            <h3>About Us</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </Grid.Col>
          <Grid.Col
            span={{
              base: 12,
              md: 6,
            }}
          >
            <h3>Contact Us</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </Grid.Col>
          <Grid.Col
            span={{
              base: 12,
              md: 6,
            }}
          >
            <h3>Social Media</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </Grid.Col>
          <Grid.Col
            span={{
              base: 12,
              md: 6,
            }}
          >
            <h3>Customer Service</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </Grid.Col>
        </Grid>
        <Divider />
        <Stack align="center" hiddenFrom="md" my="xl">
          <Flex gap="xs">
            <Box>© 2025 Ecommerce</Box>
            <Box>All rights reserved</Box>
          </Flex>
          <Flex gap="xs">
            <Box>Privacy Policy</Box>
            <Box>Terms of Service</Box>
          </Flex>
        </Stack>
        <Group justify="space-between" my="xl" visibleFrom="md">
          <Flex gap="xs">
            <p>© 2025 Ecommerce</p>
            <p>All rights reserved</p>
          </Flex>
          <Flex gap="xs">
            <p>Privacy Policy</p>
            <p>Terms of Service</p>
          </Flex>
        </Group>
      </Stack>
    </footer>
  );
}
