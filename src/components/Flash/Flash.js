import React from "react";
import { useFlash } from "./FlashContext";
import { Alert } from "react-bootstrap";
import "./Flash.css";

export default function Flash({ visibility, message, type }) {
  const { closeFlash } = useFlash();

  const closeFlashButton = () => {
    closeFlash();
  };

  return (
    <Alert
      show={visibility}
      dismissible
      variant={type}
      onClose={closeFlashButton}
      className={
        "col-sm-4 mt-4 position-fixed top-0 start-50 translate-middle-x stack"
      }
      style={{
        borderRadius: "16px",
      }}
    >
      {message}
    </Alert>
  );
}
