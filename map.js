function myMap(list, callback) {

  if (!callback && !list) {
    return "ERROR theres no callback function and no array  so array couldnt mapp";
  } else if (callback === undefined) {
    return "ERROR no callback function so array couldnt mapp";
  } 
  else if(list === undefined){
    return "ERROR no array parameter"

  }else if (!Array.isArray(list)) {
    return "ERROR native map function dont accept object";
  }
  else {
    let mappedArray = [];
    for (let index in list) {
      mappedArray.push(callback(list[index], index, list));
    }

    return mappedArray;
  }

  // let mappedArray = [];
  // for (let index in list) {
  // mappedArray.push(callback(list[index],index,list))

  // }

  // return mappedArray;
}

let oldArray = [1, 2, 3, 4, 5];
let newArray = myMap(oldArray, function (value) {
  return value * 2;
});
console.log(newArray);
module.exports = myMap;

