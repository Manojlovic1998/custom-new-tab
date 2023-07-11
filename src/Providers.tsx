import {
  injectThemeIntoCss,
  ThemeConsumer,
  ThemeProvider,
} from "@startpage/theming";
import { PropsWithChildren } from "react";
import { necro } from "./theme/necro";
import { BookmarkConsumer, BookmarkProvider } from "@startpage/bookmarks";
import bookmarks from "./components/bookmarks";

export const Providers = ({ children }: PropsWithChildren<unknown>) => (
  <BookmarkProvider initialBookmarks={bookmarks}>
    <BookmarkConsumer>
      {() => {
        return (
          <ThemeProvider initialTheme={necro}>
            <ThemeConsumer>
              {({ theme }) => {
                injectThemeIntoCss(theme);
                return children;
              }}
            </ThemeConsumer>
          </ThemeProvider>
        );
      }}
    </BookmarkConsumer>
  </BookmarkProvider>
);
