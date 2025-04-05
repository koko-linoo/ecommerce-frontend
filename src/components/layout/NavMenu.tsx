import { NavLink } from "@mantine/core";
import { Link } from "react-router-dom";

type NavMenuProps = {
  label: string;
  to: string;
  onClick?: () => void;
};

export const NavMenu = ({ label, to, onClick }: NavMenuProps) => {
  return (
    <NavLink
      label={label}
      display="block"
      component={Link}
      to={to}
      onClick={onClick}
    />
  );
};
