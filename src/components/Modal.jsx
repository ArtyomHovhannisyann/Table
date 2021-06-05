import React from "react";
import { Portal } from "react-portal"
export default function Modal() {
  return (
    <Portal node = {document.body}>
      <div className="modal">
        <div className="modal-wrapper">
          <h1>{messege}</h1>
          <button>{btnText}</button>
          <button>Cancle</button>
        </div>
      </div>
    </Portal>
  );
}
