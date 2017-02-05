export const loadTexture = (image) => ({
  type: 'LOAD_TEXTURE',
  image,
});

export const loadMap = (map) => ({
  type: 'LOAD_MAP',
  map,
});

export const applyStyle = (key, style) => ({
  type: 'APPLY_STYLE',
  key,
  style,
});

export const setTilesWide = (value) => ({
  type: 'SET_TILES_WIDE',
  value,
});

export const setTilesHigh = (value) => ({
  type: 'SET_TILES_HIGH',
  value,
});

export const setScale = (value) => ({
  type: 'SET_SCALE',
  value,
});
