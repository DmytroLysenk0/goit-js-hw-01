function getElementWidth(content, padding, border) {
  let numContent = Number.parseFloat(content);
  let numPadding = Number.parseFloat(padding);
  let numBorder = Number.parseFloat(border);

  const allWidth = numContent + 2 * numPadding + 2 * numBorder;

  return allWidth;
}

getElementWidth('50px', '8px', '4px');
getElementWidth('60px', '12px', '8.5px');
getElementWidth('200px', '0px', '0px');

// console.log(getElementWidth('50px', '8px', '4px')); // 74
// console.log(getElementWidth('60px', '12px', '8.5px')); // 101
// console.log(getElementWidth('200px', '0px', '0px')); // 200
