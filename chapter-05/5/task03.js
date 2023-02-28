function filterRangeInPlace(arr, a, b) {
  arr.forEach((item, i) => {
    if (item < a || item > b) { arr.splice(i, 1) }
  })
}

let arr = [5, 3, 8, 1];

filterRangeInPlace(arr, 1, 4);
