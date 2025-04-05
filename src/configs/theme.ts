import { generateColors } from "@mantine/colors-generator";
import { createTheme } from "@mantine/core";

const theme = createTheme({
  focusRing: "never",
  fontFamily: "Verdana !important",
  primaryColor: "primary",
  colors: {
    primary: generateColors("#25282F"),
  },
  defaultGradient: {
    deg: 90,
    from: "red",
    to: "blue",
  },
  components: {
    Flex: {
      defaultProps: {
        align: "center",
      },
    },
    NavLink: {
      defaultProps: {
        styles: {
          body: {
            display: "block",
            width: "max-content",
          },
          label: {
            fontSize: "0.8rem",
            color: "gray",
          },
        },
      },
    },
  },
});

export default theme;
