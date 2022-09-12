function myFilter(list, callback) {

  if (!callback && !list) {
    return "ERROR theres no callback function and no array  so array couldnt filtered";
  } else if (callback === undefined) {
    return "ERROR no callback function so array couldnt filterd";
  } 
  else if(list === undefined){
    return "ERROR no array parameter"
    // JavaScript objects don't have a filter() method, you must first turn the object into an array to use array's filter() method
  }else if (!Array.isArray(list)) {
    return "ERROR native filter function dont accept object";
  }


    let filteredArray = [];

    for (let index in list) {
      if (callback(list[index], index, list)) {
        filteredArray.push(list[index]);
      }
    }
    return filteredArray;}
  
 


let arr1 = [1, 2, 3, 4, 5,6,8,12];
let filterdEven = myFilter(arr1, (element) => element %2== 0);
console.log(filterdEven);
module.exports= myFilter;


