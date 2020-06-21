export const initMap = (size, level) => {
  console.log('create map', size);

  const map = new Array(size * size).fill(level);

  return map;
};

export const generateMap = (map) => {
  const time = Date.now();
  const size = Math.sqrt(map.length);
  if (size > 512) return map;
  const level = 1000 / (size - 1);
  const newSize = size * 2 - 1;
  console.log('size', size);
  console.log('new size', newSize);
  console.log('level', level);
  const newMap = new Array(newSize * newSize);
  newMap[0] = map[0];
  for (let i = 1; i < size; i++) {
    newMap[i * 2] = map[i];
    newMap[i * 2 - 1] = Math.round((map[i - 1] + map[i]) / 2 + (Math.random() - .5) * level);
    newMap[i * 2 * newSize] = map[i * size];
    newMap[(i * 2 - 1) * newSize] = Math.round((map[(i - 1) * size] + map[i * size]) / 2 + (Math.random() - .5) * level);
  }
  for (let y = 1; y < size; y++) {
    for (let x = 1; x < size; x++) {
      const src = x + y * size;
      const dest = x * 2 + y * 2 * newSize;
      newMap[dest] = map[src];
      newMap[dest - 1] = Math.round((map[src - 1] + map[src]) / 2 + (Math.random() - .5) * level);
      newMap[dest - newSize] = Math.round((map[src - size] + map[src]) / 2 + (Math.random() - .5) * level);
      newMap[dest - newSize - 1] = Math.round((map[src - 1] + map[src - 1 - size] + map[src - size] + map[src]) / 4 + (Math.random() - .5) * level);
    }
  }
  console.log('delay', Date.now() - time);
  return newMap;
};
