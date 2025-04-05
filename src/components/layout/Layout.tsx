import { useLayoutStore } from "@/stores/layout.store";
import { AppShell } from "@mantine/core";
import { Outlet } from "react-router-dom";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { NavMenu } from "./NavMenu";

export default function Layout() {
  const { collapsed, toggle } = useLayoutStore();

  return (
    <AppShell
      header={{
        height: 60,
      }}
      navbar={{
        width: 300,
        breakpoint: "md",
        collapsed: {
          desktop: true,
          mobile: collapsed,
        },
      }}
    >
      <Header />
      <AppShell.Main
        px={{
          base: "xs",
          md: 40,
        }}
      >
        <Outlet />
      </AppShell.Main>
      <AppShell.Navbar>
        <NavMenu label="Shop" to="/shop" onClick={toggle} />
        <NavMenu label="New Arrivals" to="/new-arrivals" onClick={toggle} />
        <NavMenu label="Best Sellers" to="/best-sellers" onClick={toggle} />
      </AppShell.Navbar>
      <Footer />
    </AppShell>
  );
}
