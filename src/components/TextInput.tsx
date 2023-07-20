export interface Input extends React.ComponentPropsWithoutRef<"input"> {}

const TextInput = (props: Input) => {
  return <input {...props} type="text" autoFocus />;
};

export default TextInput;
