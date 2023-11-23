const testCase1 = 5;
const testCase2 = [3];
const testCase3 = [-5, -2, -9, -11, -3];
const testCase4 = [-5, -2, 'a', 'b'];

const mockArr = [1, 4, 2, 3, 5];

const getTwoBiggestSum = (arr) => {
  let haveNan = false;
  if (!arr) {
    return 'Input is required';
  }

  if (!arr.length) {
    return 'Input should be an array';
  }

  if (arr.length < 2) {
    return 'Array should have at least two numbers';
  }

  const newArray = arr.sort((num1, num2) => {
    if (typeof num1 !== 'number' && typeof num2 !== 'number') {
      haveNan = true;
      return;
    }
    return num2 - num1;
  });

  if (haveNan) {
    return 'Input should be an array of numbers';
  }

  const sum = newArray[0] + newArray[1];

  return sum;
};

const testGetTwoBiggestSum = () => {
  const result1 = getTwoBiggestSum(testCase1);
  if (result1 !== 'Input should be an array') {
    throw new Error('Test case 1 failed');
  } else {
    console.log('Pass test case 1');
  }

  const result2 = getTwoBiggestSum(testCase2);
  if (result2 !== 'Array should have at least two numbers') {
    throw new Error('Test case 2 failed');
  } else {
    console.log('Pass test case 2');
  }

  const result3 = getTwoBiggestSum(testCase3);
  if (result3 !== -5) {
    throw new Error('Test case 3 failed');
  } else {
    console.log('Pass test case 3');
  }

  const result4 = getTwoBiggestSum(testCase4);
  if (result4 !== 'Input should be an array of numbers') {
    throw new Error('Test case 4 failed');
  } else {
    console.log('Pass test case 4');
  }

  const result5 = getTwoBiggestSum(mockArr);
  if (result5 !== 9) {
    throw new Error('Test case 5 failed');
  } else {
    console.log('Pass all test cases');
  }
};

testGetTwoBiggestSum();
