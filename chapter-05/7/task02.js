function aclean(arr) {
  let cleanedArr = new Map();

  arr.forEach((word) => {
    let arrFromWord = word.toLowerCase().split("").sort();
    cleanedArr.set(arrFromWord.join(""), word); 
  })

  return Array.from(cleanedArr.values());
}
