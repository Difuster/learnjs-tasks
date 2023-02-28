function unique(arr) {
  let uniqueArr = [];

  arr.forEach(item => {
    if(!uniqueArr.includes(item)) {uniqueArr.push(item)}
  })

  return uniqueArr;
}
