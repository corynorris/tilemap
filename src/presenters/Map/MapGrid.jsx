import React from "react";
import Tile from "./Tile";
import Grid from "../Grid";
import "./Map.css";

export const Map = props => {
  const handleDrop = function(value, ev) {
    const data = JSON.parse(ev.dataTransfer.getData("style"));
    props.applyStyle(value, data);
  };

  const { tileWidth, tileHeight } = props;

  const tileComponents = props.tiles.map((row, idx) =>
    row.map((tile, tdx) => (
      <td
        key={tdx + idx * row.length}
        onDrop={handleDrop.bind(this, tile)}
        onDragOver={e => {
          e.preventDefault();
        }}
        onDragEnter={e => {
          e.preventDefault();
        }}
        onDragLeave={e => {
          e.preventDefault();
        }}
        style={{
          width: tileWidth,
          height: tileHeight,
          minWidth: tileWidth,
          minHeight: tileHeight
        }}
      >
        <Tile {...props} value={tile} />
      </td>
    ))
  );

  return (
    <div className="Map">
      <Grid components={tileComponents} />
    </div>
  );
};

export default Map;
