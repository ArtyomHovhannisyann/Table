import React, { useState } from "react";
// import Modal from "./Modal";
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css";

export default function Row({ data }) {
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  return (
    <tr className="row">
      {Object.values(data).map((value, i) => {
        if (value[0] != undefined || typeof value == "number") {
          return <td key={i}>{value}</td>;
        } else {
          return <td>{Object.values(value)[0]}</td>;
        }
      })}
      <td>
        <img
          className="btn edit-btn"
          src="./black-crayon.png"
          onClick={() => setShowEditModal(true)}
        />
        <img
          src="./delete.png"
          className="btn delete-btn"
          onClick={() => setShowDeleteModal(true)}
        />
      </td>
      <Modal open={showEditModal} onClose={()=>setShowEditModal(false)}>
        <h1>Do You Want Save Changes</h1>
        <button>Save</button>
        <button  onClick = {()=>setShowEditModal(false)}>Cancel</button>
      </Modal>
      <Modal open={showDeleteModal} onClose={()=>setShowDeleteModal(false)}>
        <h1>Do You Want Delete Row</h1>
        <button>Delete</button>
        <button onClick = {()=>setShowDeleteModal(false)}>Cancel</button>
      </Modal>
    </tr>
  );
}
