function getMinMax(str) {
  let parts = str.split(' ');
  let numbers = [];

  for (let part of parts) {
    let num = parseFloat(part);
    if (!isNaN(num)) {
      numbers.push(num);
    }
  }

  return {
    min: Math.min(...numbers),
    max: Math.max(...numbers)
  };
}
