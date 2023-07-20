import { SearchEngineName } from "@startpage/search";
import Icon from "./icons/Icon";
import { Fragment, useState } from "react";
import { useOutsideClick } from "../hooks/useOutsideClick";

type SupportedEngines = "duckduckgo" | "google" | "youtube";

type SearchEngineMenuProps = {
  searchEngine: SearchEngineName;
  searchEngineSetter: React.Dispatch<React.SetStateAction<SearchEngineName>>;
};

const SearchEngineMenu = ({
  searchEngine,
  searchEngineSetter,
}: SearchEngineMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleEngineOptionClick = () => {
    setIsOpen((prevState) => !prevState);
  };
  const ref = useOutsideClick(
    () => isOpen && setIsOpen((prevState) => !prevState)
  );

  const icons: SupportedEngines[] = ["youtube", "google", "duckduckgo"];

  return (
    <div className="search-engine-menu" ref={ref}>
      {searchEngine === "youtube" && (
        <div className="engine-option" onClick={handleEngineOptionClick}>
          <Icon icon={searchEngine} />
        </div>
      )}
      {searchEngine === "google" && (
        <div className="engine-option" onClick={handleEngineOptionClick}>
          <Icon icon={searchEngine} />
        </div>
      )}
      {searchEngine === "duckduckgo" && (
        <div className="engine-option" onClick={handleEngineOptionClick}>
          <Icon icon={searchEngine} />
        </div>
      )}

      {isOpen && (
        <ul className="search-engine-list">
          {icons.map((icon) => {
            return (
              <Fragment key={icon}>
                {searchEngine !== icon && (
                  <li
                    className="engine-option"
                    onClick={() => {
                      setIsOpen((prevState) => !prevState);
                      searchEngineSetter(icon);
                    }}
                  >
                    <Icon icon={icon} />
                  </li>
                )}
              </Fragment>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default SearchEngineMenu;
