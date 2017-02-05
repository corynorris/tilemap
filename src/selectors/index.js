export const getSizes = ({
  width, height, tilesWide, tilesHigh, scale
}) => ({
  tileWidth: Math.floor(width / tilesWide * scale),
  tileHeight: Math.floor(height / tilesHigh * scale),
})