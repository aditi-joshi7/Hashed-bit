const nums = [11, 27, 35, 40];

function sumNumbers(arr) {
  return arr.reduce((sum, num) => sum + num, 0);
}

console.log(sumNumbers(nums));