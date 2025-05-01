import { useLayoutStore } from "@/stores/layout.store";
import { AppShell, Burger, Flex, Text } from "@mantine/core";
import { useHeadroom } from "@mantine/hooks";
import { Link } from "react-router-dom";
import { NavMenu } from "./NavMenu";
import { Search } from "./Search";
import { SignInButton } from "./SignInButton";

export function Header() {
  const showBorder = useHeadroom({ fixedAt: 80 });

  const { toggle, collapsed } = useLayoutStore();

  return (
    <AppShell.Header
      bg={showBorder ? "white" : "blue.0"}
      px={{
        base: "xs",
        md: 40,
      }}
      withBorder={false}
    >
      <Flex h="100%" py="0.5rem" justify="space-between" gap="lg">
        <Flex gap="lg">
          <Burger onClick={toggle} hiddenFrom="md" opened={!collapsed} />
          <Text fz="xl" fw="bolder" component={Link} to="/">
            Ecommerce
          </Text>
          <Flex visibleFrom="md">
            <NavMenu label="Home" to="/" />
            <NavMenu label="Shop" to="/shop" />
            <NavMenu label="New Arrivals" to="/new-arrivals" />
            <NavMenu label="Best Sellers" to="/best-sellers" />
          </Flex>
        </Flex>
        <Flex>
          <Search />
          <SignInButton />
        </Flex>
      </Flex>
    </AppShell.Header>
  );
}
