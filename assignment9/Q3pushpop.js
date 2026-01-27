function modifyArray(arr) {
  arr.push("NewItem");
  arr.pop();
  return arr;
}

console.log(modifyArray([1, 2, 3]));