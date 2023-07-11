import React from "react";

type Props = {
  children?: React.ReactNode;
};

const BookmarkGroup = ({ children }: Props) => {
  return <div className="bookmark-group">{children}</div>;
};

export default BookmarkGroup;
