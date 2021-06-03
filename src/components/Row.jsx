import React from "react";

export default function Row({ data }) {
  return (
    <tr>
      {Object.values(data).map((value, i) => {
        if (value[0] != undefined || typeof value == "number") {
          return <td key={i}>{value}</td>;
        } else {
          console.log(Object.values(value));
          return <td>{Object.values(value)[0]}</td>;
        }
      })}
    </tr>
  );
}
