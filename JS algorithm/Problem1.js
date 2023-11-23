const testCase1 = [];
const testCase2 = ['ab', 'abc', 'cd', 'cd', 'def', 1, 4, 2];
const testCase3 = [
  'ab',
  'dc',
  'abc',
  'cd',
  {
    length: 3,
    count: 2,
  },
];
const testCase4 = ['a', 'ab', 'abs'];
const testCase5 = ['a', 'ab', 'abs', 'a', 'ab', 'abs'];

const mockArr = ['a', 'ab', 'abc', 'cd', 'def', 'gh'];

const getMostAppearStrByLength = (arr) => {
  if (!arr) {
    return 'Input is required';
  }

  if (!arr.length) {
    return 'Input should be an array';
  }

  if (arr.length === 0) {
    return 'Array need to have value';
  }

  let strCountObject = [{}];

  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== 'string') {
      return 'Only string is allowed';
    }

    const object = strCountObject.find((item) => {
      return item.length === arr[i].length;
    });

    if (object) {
      const getStrIndex = strCountObject.indexOf(object);
      strCountObject[getStrIndex].count += 1;
    } else {
      strCountObject[i] = {
        length: arr[i].length,
        count: 1,
      };
    }
  }

  const strCountArray = strCountObject.map((item) => {
    return item.count;
  });

  const maxCount = Math.max(...Object.values(strCountArray));

  const mostAppearStrLengths = strCountObject
    .filter((item) => item.count === maxCount)
    .map((item) => item.length);

  const newArr = arr.filter((item) => {
    return mostAppearStrLengths.includes(item.length);
  });

  return newArr;
};

const testGetMostAppearStrByLength = () => {
  const result = getMostAppearStrByLength(testCase1);
  if (result !== 'Array need to have value') {
    throw new Error('Test case 1 failed');
  } else {
    console.log('Pass test case 1');
  }

  const result2 = getMostAppearStrByLength(testCase2);
  const result3 = getMostAppearStrByLength(testCase3);
  if (
    result2 !== 'Only string is allowed' &&
    result3 !== 'Only string is allowed'
  ) {
    throw new Error('Test case 2 failed');
  } else {
    console.log('Pass test case 2');
  }

  const result4 = getMostAppearStrByLength(testCase4);
  if (result4.toString() !== ['a', 'ab', 'abs'].toString()) {
    throw new Error('Test case 3 failed');
  } else {
    console.log('Pass test case 3');
  }

  const result5 = getMostAppearStrByLength(testCase5);
  console.log(result5);
  if (result5.toString() !== ['a', 'ab', 'abs', 'a', 'ab', 'abs'].toString()) {
    throw new Error('Test case 4 failed');
  } else {
    console.log('Pass test case 4');
  }

  const result6 = getMostAppearStrByLength(mockArr);
  if (result6.toString() !== ['ab', 'cd', 'gh'].toString()) {
    throw new Error('Test case 5 failed');
  } else {
    console.log('Pass all test case');
  }
};

testGetMostAppearStrByLength();
