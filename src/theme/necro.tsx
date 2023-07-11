import { BaseColors, ColorPalette, createColorScheme } from "@startpage/preset";

const base: BaseColors = {
  bg: "#000000",
  fg: "#FFFFFF",
  primary: "#7028FF",
  secondary: "#E2D4FF",
};

const space = {
  smallest: "0.125rem",
  small: "0.5rem",
  medium: "1rem",
  large: "1.5rem",
  largest: "3rem",
};

const palette: ColorPalette = {
  red: "#E06C75",
  green: "#98C379",
  yellow: "#E5C07B",
  blue: "#61AFEF",
  purple: "#C678DD",
  cyan: "#56B6C2",
  orange: "#FFBB7C",
};

const necroColorScheme = createColorScheme("necro", base, palette);

export const necro = {
  space: space,
  color: necroColorScheme,
  // Hacked the logic because documentation is way too vague for 5 in the morning sprint to get this done.
  inverted: false,
};
