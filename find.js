function myFind (list, callback)  {
    if (!callback && !list) {
        return "ERROR theres no callback function and no array  so we couldnt find first matched element";
      } else if (callback === undefined) {
        return "ERROR no callback function so we couldnt find first matched element";
      } 
      else if(list === undefined){
        return "ERROR no array parameter"
      
      }else if (!Array.isArray(list)) {
        return "ERROR native find function dont accept object";
      }

        for (let item of list) {
   
            if (callback(item)) {
                return item;
            }
        }
      
        return undefined;
      }

  

  let array =[1,2,3,4,5]
  let found=myFind(array,element => element > 1)
  console.log(found);
module.exports= myFind;