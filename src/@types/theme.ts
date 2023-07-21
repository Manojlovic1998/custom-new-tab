import "@startpage/theming";

import { StpgTheme } from "@themeforge/preset";

declare module "@startpage/theming" {
  export interface Theme extends StpgTheme {}
}
