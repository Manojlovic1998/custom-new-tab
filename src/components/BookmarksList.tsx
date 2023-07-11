import React from "react";

type Bookmark = {
  id: string;
  label: string;
  url: string;
};

type Props = {
  bookmarks: Bookmark[];
};

const BookmarksList = ({ bookmarks }: Props) => {
  return (
    <ul>
      {bookmarks.map((bookmark) => {
        return (
          <li key={bookmark.id}>
            <a href={bookmark.url}>{bookmark.label}</a>
          </li>
        );
      })}
    </ul>
  );
};

export default BookmarksList;
