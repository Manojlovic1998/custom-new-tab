interface Input extends React.ComponentPropsWithoutRef<"input"> {
  label?: string;
  onChangeCallback: (value: string) => void;
}

const UrlInput = ({ label, onChangeCallback, ...rest }: Input) => {
  const TextInput = (
    <input
      type="url"
      autoFocus
      {...rest}
      onChange={(event) => {
        onChangeCallback(event.target.value);
      }}
    />
  );

  if (label)
    return (
      <label className="input-label">
        {label}
        {TextInput}
      </label>
    );

  return TextInput;
};

export default UrlInput;
