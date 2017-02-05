export const range = (size, val) => {
  return Array(size).fill(val);
}

export function isArray(obj) {
  return Object.prototype.toString.call( obj ) === '[object Array]';
}
