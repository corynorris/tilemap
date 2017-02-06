export const range = (size, val) => {
  return Array(size).fill(val);
}

export function isArray(obj) {
  return Object.prototype.toString.call(obj) === '[object Array]';
}

export function parseJson(obj, msg) {
  try {
    return JSON.parse(this.responseText);
  } catch (e) {
    throw Error(msg)
  }
}