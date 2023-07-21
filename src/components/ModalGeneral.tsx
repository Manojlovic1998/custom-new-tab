import { WrenchScrewdriverIcon } from "@heroicons/react/24/solid";
import {
  BaseColors,
  ColorPalette,
  ColorScheme,
  createColorScheme,
} from "@themeforge/preset";
import { useTheme } from "@startpage/theming";
import Color from "color";
import { useEffect, useState } from "react";
import ColorInput from "./ColorInput";
import UrlInput from "./UrlInput";
import { useStorage } from "../StorageContext";

const ModalGeneral = () => {
  const { theme, setTheme } = useTheme();
  const [imageUrl, setImageUrl] = useStorage();

  const [colorScheme, setColorScheme] = useState<ColorScheme>();

  const [baseColors, setBaseColors] = useState<BaseColors>({
    bg: Color(`rgba(${theme.color.bg.base})`).hex(),
    fg: Color(`rgba(${theme.color.fg.base})`).hex(),
    primary: Color(`rgba(${theme.color.primary.base})`).hex(),
    secondary: Color(`rgba(${theme.color.secondary.base})`).hex(),
  });

  const palette: ColorPalette = {
    red: "#E06C75",
    green: "#98C379",
    yellow: "#E5C07B",
    blue: "#61AFEF",
    purple: "#C678DD",
    cyan: "#56B6C2",
    orange: "#FFBB7C",
  };

  const space = {
    smallest: "0.125rem",
    small: "0.5rem",
    medium: "1rem",
    large: "1.5rem",
    largest: "3rem",
  };

  useEffect(() => {
    setColorScheme(createColorScheme("user", baseColors, palette));
  }, [baseColors]);

  useEffect(() => {
    if (colorScheme)
      setTheme({ space: space, color: colorScheme, inverted: false });
  }, [colorScheme]);

  // Handle on change event to add https:// if not present
  const handleOnChange = (urlString: string) => {
    if (!urlString) return;
    if (urlString.match(/https?:\/\/.+/)) {
      setImageUrl(urlString);
    } else {
      setImageUrl(`https://${urlString}`);
    }
  };

  return (
    <div className="general-settings">
      <div>
        <h1>
          <WrenchScrewdriverIcon className="icon" /> General Settings
        </h1>
      </div>
      <div className="theme-settings-section">
        <h2>Theme</h2>
        <h3>Image</h3>
        <div className="theme-image">
          <UrlInput
            label={"Image url"}
            value={imageUrl}
            onChangeCallback={handleOnChange}
          />
        </div>
        <h3>Colors</h3>
        <div className="theme-colors">
          <ColorInput
            value={baseColors.bg}
            label="Background"
            pattern="[a-fA-F\d]+"
            onChangeCallback={(value: string) => {
              setBaseColors((prevState) => {
                return {
                  ...prevState,
                  bg: Color(value).hex(),
                };
              });
            }}
          />
          <ColorInput
            value={baseColors.fg}
            label="Foreground"
            pattern="[a-fA-F\d]+"
            onChangeCallback={(value: string) => {
              setBaseColors((prevState) => {
                return {
                  ...prevState,
                  fg: Color(value).hex(),
                };
              });
            }}
          />
          <ColorInput
            value={baseColors.primary}
            label="Primary"
            pattern="[a-fA-F\d]+"
            onChangeCallback={(value: string) => {
              setBaseColors((prevState) => {
                return {
                  ...prevState,
                  primary: Color(value).hex(),
                };
              });
            }}
          />
          <ColorInput
            value={baseColors.secondary}
            label="Secondary"
            pattern="[a-fA-F\d]+"
            onChangeCallback={(value: string) => {
              setBaseColors((prevState) => {
                return {
                  ...prevState,
                  secondary: Color(value).hex(),
                };
              });
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default ModalGeneral;
