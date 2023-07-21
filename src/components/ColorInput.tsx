import Color from "color";
import TextInput from "./TextInput";
import { useEffect, useState } from "react";

interface ColorInputProp extends React.ComponentPropsWithoutRef<"input"> {
  label: string;
  value: string;
  onChangeCallback: (value: string) => void;
}

const isColor = (color: string) => {
  try {
    Color(color);
    return true;
  } catch {
    return false;
  }
};

// Create hex color validation form covering all edge cases
const isHexColor = (color: string) => {
  const hexRegex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
  console.log(hexRegex.test(color));

  return hexRegex.test(color);
};

const ColorInput = (props: ColorInputProp) => {
  const { label, value, onChangeCallback } = props;
  const [color, setColor] = useState(value);

  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setColor(event.target.value);
    if (isHexColor(event.target.value) && isColor(event.target.value))
      onChangeCallback(event.target.value);
  };

  useEffect(() => setColor(value), [value]);

  return (
    <TextInput
      onChange={handleOnChange}
      value={color}
      label={label}
      maxLength={7}
    ></TextInput>
  );
};

export default ColorInput;
