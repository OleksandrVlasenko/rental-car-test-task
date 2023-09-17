import { createPortal } from "react-dom";
import { ModalBackdrop, ModalContent } from "./ModalContainer.styled";
import PropTypes from "prop-types";
import { useEffect } from "react";

const ModalContainer = ({ onClose, children }) => {
  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  });

  function handleKeyDown(e) {
    if (e.keyCode === 27) {
      onClose();
    }
  }

  function handlebackdropClick(e) {
    if (e.currentTarget === e.target) {
      onClose();
    }
  }
  return (
    <>
      {createPortal(
        <ModalBackdrop onClick={handlebackdropClick}>
          <ModalContent>{children}</ModalContent>
        </ModalBackdrop>,
        document.getElementById("modal-root")
      )}
    </>
  );
};

ModalContainer.propTypes = {
  children: PropTypes.node,
};

export { ModalContainer };
