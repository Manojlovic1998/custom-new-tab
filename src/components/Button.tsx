import clsx from "clsx";

export interface Button extends React.ComponentPropsWithoutRef<"button"> {}

const Button = (props: Button) => {
  const { children, className } = props;

  if (className)
    return (
      <button {...props} className={clsx([className])}>
        {children}
      </button>
    );
  return <button {...props}>{children}</button>;
};

export default Button;
