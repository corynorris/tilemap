import React from 'react';

const Tile = ({
  value,
  textureMap,
  tileHeight,
  tileWidth,
}) => {

  if (typeof textureMap[value] === 'undefined') {
    return (
      <span style={{
        fontSize: `${tileWidth / 2}px`
      }}>{value}</span>
    );
  } else {
    const { image } = textureMap[value];
    return (
      <img src={image}
        role="presentation"
        style={{
          width: '100%',
          height: '100%'
        }} />
    );
  }


}

export default Tile;