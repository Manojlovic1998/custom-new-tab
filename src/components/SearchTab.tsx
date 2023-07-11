import React from "react";

type Props = {
  children?: React.ReactNode;
};

const SearchTab = ({ children }: Props) => {
  return <div>{children}</div>;
};

export default SearchTab;
