import React from "react";
import Card from "./Card";
import { XMarkIcon } from "@heroicons/react/24/solid";

type Props = {
  children: React.ReactNode;
  modalIsOpenHandler: () => void;
};

const Modal = ({ children, modalIsOpenHandler }: Props) => {
  return (
    <div className="modal-wrapper" onClick={modalIsOpenHandler}>
      <Card
        className="modal"
        onClick={(event) => {
          event.stopPropagation();
        }}
      >
        <XMarkIcon className="icon close-icon" onClick={modalIsOpenHandler} />
        {children}
      </Card>
    </div>
  );
};

export default Modal;
