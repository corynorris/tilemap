import React from 'react';
import Tile from './Tile';
import Grid from '../Grid';
import './Map.css';

export const Map = (props) => {

  const handleDrop = (value, ev) => {
    const data = JSON.parse(ev.dataTransfer.getData("style"));
    props.applyStyle(
      value,
      data,
    );
  }

  const {tileWidth, tileHeight} = props;

  const tileComponents = props.tiles.map((row, idx) => row.map((tile, tdx) => (
    <td
      key={tdx + idx * row.length}
      onDragOver={(e) => { e.preventDefault() } }
      onDrop={handleDrop.bind(this, tile)}
      style={{
        width: tileWidth,
        height: tileHeight,
      }}
      >
      <Tile {...props} value={tile} />
    </td>
  )));

  return (
    <div className="Map">
      <Grid components={tileComponents} />
    </div>
  )
}

export default Map
