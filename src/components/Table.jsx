import React from "react";
import Row from "./Row";

export default function Table({ data }) {
  return (
    <div className="table">
      <table>
        <tr>
          {data[0] != undefined &&
            Object.keys(data[0]).map((key, i) => {
              return <th key={i}>{key}</th>;
            })}
        </tr>
        {data != undefined && data.map((el, i) => <Row data={el} key={i} />)}
      </table>
    </div>
  );
}
