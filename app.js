/*
1.

Set (4) {1, 2, 3, 4}

2.

"ref"

3.

Map (2) {[1,2,3] => true, [1,2,3] => false}

4.

const hasDuplicate = (arr) => {
  let newArr = [...new Set(arr)];
  if (newArr.length === arr.length) {
    return false;
  } else {
    return true;
  }
};

5.
*/

const vowelCount = (str) => {
  const newMap = new Map();

  for (let char of str) {
    let smallChar = char.toLowerCase();
    if (isVowel(smallChar)) {
      if (newMap.has(smallChar)) {
        newMap.set(smallChar, newMap.get(smallChar) + 1);
      } else {
        newMap.set(smallChar, 1);
      }
    }
  }
  return newMap;
};
