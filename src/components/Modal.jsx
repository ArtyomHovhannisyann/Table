import React from "react";
import { Portal } from "react-portal"
export default function Modal({messege,btnText,closeModal}) {
  return (
    <Portal node = {document.body}>
      <div className="modal">
        <div className="modal-wrapper">
          <h1>{messege}</h1>
          <button>{btnText}</button>
          <button onClick = {closeModal}>Cancle</button>
        </div>
      </div>
    </Portal>
  );
}
