import React from "react";
import iconPaths from "./IconPaths";

export interface Icon extends React.ComponentPropsWithoutRef<"svg"> {
  icon: keyof typeof iconPaths;
}

const Icon = (props: Icon) => {
  const { icon } = props;

  const iconPath = iconPaths[icon];

  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="40"
      height="40"
      viewBox="0 0 256 256"
      aria-hidden="true"
      className="icon"
    >
      <g children={iconPath} />
    </svg>
  );
};

export default Icon;
