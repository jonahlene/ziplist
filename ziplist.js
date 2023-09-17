function ziplist(listOne, listTwo) {
  const newArr = [];
  let i = 0;
  let j = 0;

  while (i < listOne.length || j < listOne.length) {
    if (i < listOne.length) {
      newArr.push(listOne[i]);
      i++;
    }
    if (j < listTwo.length) {
      newArr.push(listTwo[j]);
      j++;
    }
  }

  return newArr;
}

function zipListTheSimpleWay(listOne, listTwo) {
  return _.flatten(_.zip(listOne, listTwo));
}

const testListOne = ['a', 'b', 'c'];
const testListTwo = [1, 2, 3];

console.log(ziplist(testListOne, testListTwo));
console.log(zipListTheSimpleWay(testListOne, testListTwo));
