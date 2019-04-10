import React from "react";

export const Grid = ({ components }) => {
  let rows = [];
  let curRow = [];
  for (let y = 0; y < components[0].length; y++) {
    for (let x = 0; x < components.length; x++) {
      curRow.push(components[x][y]);
    }
    rows.push(<tr key={y}>{curRow}</tr>);
    curRow = [];
  }

  return (
    <table>
      <tbody>{rows}</tbody>
    </table>
  );
};

export default Grid;
