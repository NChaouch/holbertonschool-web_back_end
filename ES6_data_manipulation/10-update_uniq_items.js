function updateUniqueItems(map) {
  if (!(map instanceof Map)) {
    throw new Error('Cannot process');
  }

  for (const [key, value] of map.entries()) {
    if (value === 1) {
      map.set(key, 100);  // REPLACE BY 100 IF 1
    }
  }
  return map;
}

module.exports = updateUniqueItems;
