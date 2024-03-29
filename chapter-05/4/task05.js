function getMaxSubSum(arr) {
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    let currentSum = 0;
    for (let j = i; j < arr.length; j++) {
      currentSum += arr[j];
      sum = Math.max(sum, currentSum);
    }
  }

  return maxSum;
}
