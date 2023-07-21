import {
  injectThemeIntoCss,
  ThemeConsumer,
  ThemeProvider,
} from "@startpage/theming";
import { PropsWithChildren } from "react";
import { necro } from "./theme/necro";
import { BookmarkConsumer, BookmarkProvider } from "@startpage/bookmarks";
import bookmarks from "./components/bookmark/bookmarks";
import { StorageProvider } from "./StorageContext";

export const Providers = ({ children }: PropsWithChildren<unknown>) => (
  <StorageProvider>
    <BookmarkProvider initialBookmarks={bookmarks}>
      <BookmarkConsumer>
        {() => {
          return (
            <ThemeProvider initialTheme={necro} persistTheme={true}>
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
  </StorageProvider>
);
