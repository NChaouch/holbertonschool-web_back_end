function divideFunction(numerator, deominator) {
  if (deominator === 0) {
    throw Error('cannot divide by 0');
  }
  return numerator / deominator;
}

module.exports = divideFunction;
