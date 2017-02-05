import { isArray } from './utils';
import { generateDungeon } from './dungeon';

export const loadMapFile = (file) => {
  const reader = new FileReader();
  return new Promise((resolve, reject) => {
    reader.onload = function (event) {
      try {
        const map = JSON.parse(event.target.result);
        if (typeof map !== 'undefined'
          && isArray(map.data)
          && isArray(map.data[0])) {
          resolve(map);
        } else {
          throw Error('obj.map must be a 2D array');
        }
      } catch (e) {
        reject(e.message);
      }
    };
    reader.readAsText(file);
  })
}



export function generateMap(width, height) {

  const dungeon = generateDungeon(width, height);
  // Edge Detection
  // Horizontal Edges
  // let test = {};
  // for (let x = 0; x < width; x++) {
  //   for (let y = 0; y < height; y++) {
  //     const type = dungeon.get(x, y).type;
  //     if (type === 'wall') {
  //       const mask = dungeon.get8BitMask(x, y, 'wall');
  //       dungeon.tiles[x][y].texture = parseInt(mask, 2);
  //       test[parseInt(mask, 2)] = true;
  //       // dungeon.tiles[x][y].orig = parseInt(mask, 2)+1;
  //     } else if (type === 'floor') {
  //       dungeon.tiles[x][y].texture = '16';
  //     }
  //   }
  // }

  return dungeon;
}