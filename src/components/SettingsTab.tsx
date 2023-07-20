import { BookmarkIcon, WrenchIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import { createPortal } from "react-dom";
import Modal from "./Modal";
import ModalBookmark from "./ModalBookmark";

type modalType = "bookmark" | "general" | undefined;

const SettingsTab = () => {
  const [settingsModalIsOpen, setSettingsModalIsOpen] =
    useState<boolean>(false);
  const [modalContentType, setModalContentType] = useState<modalType>();

  const onButtonClick = (modalVariant: modalType) => {
    if (!modalVariant) return;

    setSettingsModalIsOpen((prevState) => !prevState);

    switch (modalVariant) {
      case "bookmark":
        setModalContentType("bookmark");
        break;
      case "general":
        setModalContentType("general");
        break;
    }
  };

  return (
    <>
      <div className="settings-tab">
        <div className="settings-options-wrapper">
          <button className="settings-btn">
            <WrenchIcon />
          </button>
          <button
            className="settings-btn"
            onClick={() => onButtonClick("bookmark")}
            type={"button"}
          >
            <BookmarkIcon />
          </button>
        </div>
      </div>
      {createPortal(
        settingsModalIsOpen ? (
          <Modal
            modalIsOpenHandler={() => {
              setSettingsModalIsOpen((prevState) => !prevState);
            }}
          >
            {modalContentType === "bookmark" && <ModalBookmark />}
          </Modal>
        ) : (
          <></>
        ),
        document.getElementById("modal") as HTMLDivElement
      )}
    </>
  );
};

export default SettingsTab;
