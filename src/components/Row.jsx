import React, { useState } from "react";

export default function Row({ data }) {
  const [showModal,setShowModal] = useState(false)
  return (
    <tr className = "row" >
      {Object.values(data).map((value, i) => {
        if (value[0] != undefined || typeof value == "number") {
          return <td key={i}>{value}</td>;
        } else {
          return <td>{Object.values(value)[0]}</td>;
        }
      })}
      <td>
        <img  className = "btn edit-btn" src="./black-crayon.png" onClick = {()=>setShowModal(true)}/>
        <img src="./delete.png" className = "btn delete-btn"/>
      </td>
    </tr>
  );
}
