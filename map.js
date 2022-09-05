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

// let oldArray={ 'a': 1, 'b': 2, 'c': 3 }
// let newArray=oldArray.map(function(value){return value * 2})
// console.log(newArray);

//There is no native map to the Object object, but how about this:
//  A lot of people are mentioning that the previous methods do not return a new object, but rather operate on the object itself. For that matter I wanted to add another solution that returns a new object and leaves the original object as it is:
// Array.prototype.includesObj = function(obj) {
//     for(let i = 0; i < this.length; i++) {
//        if(JSON.stringify(this[i], Object.keys(this[i]).sort()) === JSON.stringify(obj, Object.keys(obj).sort())) return true;
//     }
//     return false;
//  }

// else if (list.includesObj()){

//     return "mapp array of object"
//   }
