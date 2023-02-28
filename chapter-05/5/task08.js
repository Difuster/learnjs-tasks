function getConvertedData(arr) {
  return arr.map(i => {
    return {id: i.id, fullName: i.name + ' ' + i.surname};
  })
}
