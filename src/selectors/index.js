import { createSelector } from 'reselect';

const settingsSelector = state => state.settings;

export const getSizes = createSelector(
  settingsSelector,
  ({ width, height, tilesWide, tilesHigh, scale }) => ({
    tileWidth: Math.floor(width / tilesWide * scale),
    tileHeight: Math.floor(height / tilesHigh * scale),
  })
);
