import React from "react";
import { BookmarkIcon, WrenchIcon } from "@heroicons/react/24/solid";

const SettingsTab = () => {
  return (
    <div className="settings-tab">
      <div className="settings-options-wrapper">
        <button className="settings-btn">
          <WrenchIcon />
        </button>
        <button className="settings-btn">
          <BookmarkIcon />
        </button>
      </div>
    </div>
  );
};

export default SettingsTab;
