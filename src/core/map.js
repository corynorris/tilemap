import { isArray } from './utils';
// import { generateDungeon } from './dungeon';

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
