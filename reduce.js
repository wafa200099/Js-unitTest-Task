function myReduce(list, callback, initialValue = 0) {
  if (!callback && !list) {
   return 'ERROR theres no callback function and no array  so array couldnt reduced'
  } else if (callback === undefined) {
    return "ERROR no callback function so array couldnt reduced";
  } else if (list === undefined) {
    return "ERROR no array parameter";
  } else if (!Array.isArray(list)) {
    return "ERROR native reduce function dont accept object";
  }

  let result = initialValue;

  for (let item of list) {
    result = callback(result, item);
  }

  return result;
}

  let arr=[1,2,3,4,5]
  let sumOfArr= myReduce(arr,(prev,curr)=>prev+curr,0)
  console.log(sumOfArr);
module.exports = myReduce;
