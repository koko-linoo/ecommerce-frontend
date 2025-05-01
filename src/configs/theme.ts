import { generateColors } from "@mantine/colors-generator";
import { createTheme } from "@mantine/core";

const theme = createTheme({
  focusRing: "never",
  fontFamily: "Verdana, sans-serif",
  primaryColor: "primary",
  colors: {
    primary: generateColors("#25282F"),
  },
  defaultGradient: {
    deg: 90,
    from: "red",
    to: "blue",
  },
  components: {},
});

export default theme;
