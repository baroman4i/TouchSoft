const filterStrings = (strArr, count) => strArr.filter(word => word.length <= count)
console.log(filterStrings(['a', 'ab', 'abc'], 2))