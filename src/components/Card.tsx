import clsx from "clsx";
import React from "react";

export interface CardProps extends React.ComponentPropsWithoutRef<"div"> {}

const Card = (props: CardProps) => {
  const { children, className } = props;

  return (
    <div {...props} className={clsx(["surface", className])}>
      {children}
    </div>
  );
};

export default Card;
