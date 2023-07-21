import BookmarkGroup from "./BookmarkGroup";
import BookmarkGroupHeading from "./BookmarkGroupHeading";
import BookmarksList from "./BookmarksList";
import { useBookmarks } from "@startpage/bookmarks";

const BookmarksTab = () => {
  const bookmarksState = useBookmarks();

  return (
    <div id="bookmarks">
      {bookmarksState.bookmarkGroups.map(({ id, label, bookmarks }) => {
        return (
          <BookmarkGroup key={id}>
            <BookmarkGroupHeading>{label}</BookmarkGroupHeading>
            <BookmarksList bookmarks={bookmarks} />
          </BookmarkGroup>
        );
      })}
    </div>
  );
};

export default BookmarksTab;
