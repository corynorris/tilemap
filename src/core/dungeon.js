import DungeonFactory from 'dungeon-factory';

export default function generateDungeon(width, height) {
  const dungeon = DungeonFactory.generate({
    width,
    height,
  });
  dungeon.width = width;
  dungeon.height = height;

  dungeon.get = function (x, y) {
    if (x < 0 || x >= width) return false;
    if (y < 0 || y >= height) return false;
    return this.tiles[x][y];
  }

  dungeon._check = (x, y, type) => {
    return (this.get(x, y) && this.get(x, y).type === type);
  }

  dungeon.get4BitMask = (x, y, type) => {
    let N = this.check(x, y - 1, type);
    let E = this.check(x + 1, y, type);
    let S = this.check(x, y + 1, type);
    let W = this.check(x - 1, y, type);
    return `${+N}${+E}${+S}${+W}`;
  }

  dungeon.get8BitMask = (x, y, type) => {
    let NW = this.check(x - 1, y - 1, type);
    let N = this.check(x, y - 1, type);
    let NE = this.check(x + 1, y - 1, type);
    let E = this.check(x + 1, y, type);
    let SE = this.check(x + 1, y + 1, type);
    let S = this.check(x, y + 1, type);
    let SW = this.check(x - 1, y + 1, type);
    let W = this.check(x - 1, y, type);
    return `${+NW}${+N}${+NE}${+E}${+SE}${+S}${+SW}${+W}`;
  }

  return dungeon;
}
