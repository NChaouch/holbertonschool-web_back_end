function cleanSet(set, startString) {
  if (!startString || startString !== 'string') {
    return '';
  }

  return Array.from(set)
    .filter((value) => typeof value === 'string' && value.startsWith(startString))
    .map((value) => value.slice(startString.length))
    .join('-');
}

module.exports = cleanSet;
