import { isArray, parseJson } from './utils';

export const loadMapFile = (file) => {
  const reader = new FileReader();
  return new Promise((resolve, reject) => {
    reader.onload = function (event) {
      try {
        const map = parseJson(event.target.result,
          "Not a valid JSON file.");
        if (typeof map !== 'undefined'
          && isArray(map.data)
          && isArray(map.data[0])) {
          resolve(map);
        } else {
          throw Error('JSON detected, however the format must be { data: [[]] }.');
        }
      } catch (e) {
        reject(e.message);
      }
    };
    reader.readAsText(file);
  })
}
