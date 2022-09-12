

const myReduce =require('../reduce')

test('reduce an array to find single element result',() => {

  
    expect(myReduce([1,2,3,4,5],(prev,curr)=>prev+curr,0)).toEqual(15)
})


// filter based on passed array type
test('"normal reduce " reduce array into max value ', () => {
    let arr=[1,2,3]
    expect(myReduce(arr, (a, b) => { return Math.max(a, b)},0)).toEqual(3);
  });
  
  test("reduce array of strings ", () => {
    const strings = ["wafa","alomour","wafa"];
  
     expect(myReduce(strings,(accumulator, number) => {
        if(number.includes("wafa")) {
          return accumulator += 1;
        } else {
          return accumulator;}
      }, 0)).toEqual(2);
    });

   
   
    
   
  test("filter  array of object", () => {
    const objects = [{ x: 1 }, { x: 2 }, { x: 3 }];
    expect(myReduce( objects ,(previousValue, currentValue) => previousValue + currentValue.x,
    0,)).toEqual(6);
  });
  
  test("reduce  array of numbers", () => {
    const numbers=[1, 2, 3]
    expect(myReduce(numbers, (pre,cur) => pre*cur,1)).toEqual(numbers.reduce((pre,cur) => pre*cur,1));
  });

  test('if we pass object parameter to reduce function  ', () => { 
      
      expect(myReduce( { 'a': 1, 'b': 2, 'c': 3 },()=> 1)).toEqual("ERROR native reduce function dont accept object")
  
    })
  
  // reduce function when pass empty paramaters (callbacks or array) or both
  
  
  test('if we pass empty parameters to filter function  ', () => { 
      
    expect(myReduce()).toEqual('ERROR theres no callback function and no array  so array couldnt reduced')
  
    })
  
   
  test('if we pass empty array to reduce function ', () => {
  
      
      let arr;
      expect(myReduce(arr,()=>1)).toEqual("ERROR no array parameter")
  
  })
  
  test('if we  dont pass  callback to reduce function ', () => {
      expect(myReduce([1,2])).toEqual("ERROR no callback function so array couldnt reduced")

   })
  

   //How reduce() works with and without an initial value
   test('if we  dont pass  initial value to reduce function ', () => {
    //sum callback
    expect(myReduce([1,2],(pre,cur)=>{return pre+cur})).toEqual(3)

 })
 test('if we  pass  initial value to reduce function ', () => {
  //sum callback
    expect(myReduce([1,2],(pre,cur)=>{return pre+cur},5)).toEqual(8)

 })

   
// The reduce() method executes a reducer function for array element. 
// The reduce() method returns a single value: the function's accumulated result
// The reduce() method does not  execute the function for empty array elements.
// The reduce() method does not change the original array.