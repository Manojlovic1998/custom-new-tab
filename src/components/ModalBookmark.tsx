import { useBookmarks, BookmarkGroup, Bookmark } from "@startpage/bookmarks";
import { useState } from "react";
import {
  BookmarkIcon,
  ChevronRightIcon,
  PlusIcon,
  TrashIcon,
  CheckIcon,
  PencilSquareIcon,
  XMarkIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/solid";
import Button from "./Button";
import TextInput from "./TextInput";

const RenderBookmarkGroups = ({
  bookmarkGroups,
}: {
  bookmarkGroups: BookmarkGroup[];
}) => {
  return bookmarkGroups.map((bookmarkGroup, index) => {
    return (
      <RenderBookmarkGroup
        bookmarkGroup={bookmarkGroup}
        index={index}
        key={bookmarkGroup.id}
      />
    );
  });
};

const RenderBookmarkGroup = ({
  bookmarkGroup,
  index,
}: {
  bookmarkGroup: BookmarkGroup;
  index: number;
}) => {
  const { id, label, bookmarks } = bookmarkGroup;
  const [isOpen, setIsOpen] = useState(false);
  const [isInEditMode, setIsInEditMode] = useState(false);
  const [groupLabel, setGroupLabel] = useState<string>(label);
  const { removeGroup, editGroup, addBookmark } = useBookmarks();

  return (
    <li key={id}>
      <div>
        <div
          role="button"
          tabIndex={index}
          aria-label={`Expand ${label} bookmarks`}
          className="disclosure"
          onClick={() => !isInEditMode && setIsOpen((prevState) => !prevState)}
          aria-expanded={isOpen}
          aria-controls={id}
        >
          {!isInEditMode && !isOpen && (
            <>
              <ChevronRightIcon className="icon" /> {label}
            </>
          )}
          {isOpen && (
            <>
              <ChevronDownIcon className="icon" /> {label}
            </>
          )}
          {isInEditMode && (
            <TextInput
              value={groupLabel}
              onKeyUp={(event) => {
                if (event.key !== "Enter") return;

                editGroup(id, groupLabel);
                setIsInEditMode((prevState) => !prevState);
              }}
              onChange={(event) => setGroupLabel(event.target.value)}
            />
          )}
        </div>

        {!isInEditMode && (
          <>
            <PlusIcon
              className="icon"
              role="button"
              onClick={() => {
                addBookmark(id, { label: "New Bookmark", url: "" });
                setIsOpen(true);
              }}
            />
            <TrashIcon
              className="icon"
              role="button"
              onClick={() => removeGroup(id)}
            />
            <PencilSquareIcon
              className="icon"
              role="button"
              onClick={() => setIsInEditMode((prevState) => !prevState)}
            />
          </>
        )}

        {isInEditMode && (
          <>
            <CheckIcon
              className="icon"
              role="button"
              onClick={() => {
                editGroup(id, groupLabel);
                setIsInEditMode((prevState) => !prevState);
              }}
            />
            <XMarkIcon
              className="icon"
              onClick={() => setIsInEditMode((prevState) => !prevState)}
            />
          </>
        )}
      </div>
      {isOpen && (
        <ul id={id}>
          <RenderBookmarks bookmarks={bookmarks} />
        </ul>
      )}
    </li>
  );
};

const RenderBookmarks = ({
  bookmarks,
}: {
  bookmarks: Bookmark[];
}): JSX.Element[] => {
  return bookmarks.map(({ id, label, url }) => {
    return <RenderBookmark id={id} label={label} url={url} />;
  });
};

const RenderBookmark = (props: Bookmark) => {
  const { id, label, url } = props;
  const { editBookmark, removeBookmark } = useBookmarks();
  const [isInEditMode, setIsInEditMode] = useState(false);
  const [bookmarkLabel, setBookmarkLabel] = useState(label);
  const [bookmarkUrl, setBookmarkUrl] = useState(url);

  return (
    <li key={id}>
      {isInEditMode && (
        <TextInput
          value={bookmarkLabel}
          onKeyUp={(event) => {
            if (event.key !== "Enter") return;

            editBookmark(id, { label: bookmarkLabel, url: bookmarkUrl });
            setIsInEditMode((prevState) => !prevState);
          }}
          onChange={(event) => setBookmarkLabel(event.target.value)}
        />
      )}
      {!isInEditMode && <p>{label}</p>}
      {url.length !== 0 && !isInEditMode && <p>{url}</p>}
      {isInEditMode && (
        <TextInput
          value={bookmarkUrl}
          onKeyUp={(event) => {
            if (event.key !== "Enter") return;

            editBookmark(id, { label: bookmarkLabel, url: bookmarkUrl });
            setIsInEditMode((prevState) => !prevState);
          }}
          onChange={(event) => setBookmarkUrl(event.target.value)}
        />
      )}
      {isInEditMode && (
        <>
          <CheckIcon
            className="icon"
            role="button"
            onClick={() => {
              editBookmark(id, { label: bookmarkLabel, url: bookmarkUrl });
              setIsInEditMode((prevState) => !prevState);
            }}
          />
          <XMarkIcon
            className="icon"
            onClick={() => setIsInEditMode((prevState) => !prevState)}
          />
        </>
      )}
      {!isInEditMode && (
        <>
          <PencilSquareIcon
            className="icon"
            role="button"
            onClick={() => setIsInEditMode((prevState) => !prevState)}
          />
          <TrashIcon
            className="icon"
            role="button"
            onClick={() => removeBookmark(id)}
          />
        </>
      )}
    </li>
  );
};

const ModalBookmark = () => {
  const { bookmarkGroups, addGroup } = useBookmarks();
  const handleNewGroup = () => addGroup("New Group");

  return (
    <div className="bookmarks-settings">
      <div>
        <h1>
          <BookmarkIcon className="icon" /> Bookmarks
        </h1>
      </div>
      <div>
        <ul>
          <RenderBookmarkGroups bookmarkGroups={bookmarkGroups} />
        </ul>
      </div>
      <Button onClick={handleNewGroup} type="button">
        <PlusIcon className="icon" />
        Add New Group
      </Button>
    </div>
  );
};

export default ModalBookmark;
