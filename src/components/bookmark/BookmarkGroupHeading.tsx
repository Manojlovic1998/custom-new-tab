import React from "react";

type Props = {
  children: React.ReactNode;
};

const BookmarkGroupHeading = ({ children }: Props) => {
  return <h2 className="mb-auto">{children}</h2>;
};

export default BookmarkGroupHeading;
