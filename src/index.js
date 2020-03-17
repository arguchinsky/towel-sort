
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (arguments[0]){
    return matrix.map((el, i) => {
    if (i % 2) return el.reverse();
    return el;
    }).flat();
  }
  return [];
}
