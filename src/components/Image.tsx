import React from "react";

export interface ImageProps extends React.ComponentPropsWithoutRef<"img"> {}

const Image = (props: ImageProps) => {
  return <img {...props} />;
};

export default Image;
