import { InitialBookmarkGroup } from "@startpage/bookmarks";

const bookmarks: InitialBookmarkGroup[] = [
  {
    label: "reddit",
    bookmarks: [
      {
        label: "r/typescript",
        url: "https://www.reddit.com/r/typescript/",
      },
      {
        label: "r/reactjs",
        url: "https://www.reddit.com/r/reactjs/",
      },
    ],
  },
  {
    label: "CSS Tools",
    bookmarks: [
      {
        label: "Hover.css",
        url: "https://ianlunn.github.io/Hover/",
      },
    ],
  },
  {
    label: "design tools",
    bookmarks: [
      { label: "pixlrx", url: "https://pixlr.com/x/" },
      {
        label: "image enlarger",
        url: "https://bigjpg.com/en",
      },
      {
        label: "css gradients",
        url: "https://larsenwork.com/easing-gradients/",
      },
    ],
  },
];

export default bookmarks;
