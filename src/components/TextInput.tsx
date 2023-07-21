interface Input extends React.ComponentPropsWithoutRef<"input"> {
  label?: string;
}

const TextInput = (props: Input) => {
  const inputProps = { ...props };

  delete inputProps.label;

  const TextInput = <input type="text" autoFocus {...inputProps} />;

  if (props.label)
    return (
      <label className="input-label">
        {props.label}
        {TextInput}
      </label>
    );

  return TextInput;
};

export default TextInput;
