const myFind =require('../find')

test('"normal find "find first matched element in an array',() => {

  
    expect(myFind([1,2,3],element => element > 1)).toEqual(2)
})

// find based on passed array type

  
  test("find element in  array of strings ", () => {
    const strings = ["wafa", "noor", "hafsa", "sarahnofal"];
  
    expect(myFind(strings, (string) => string.length > 4)).toEqual(
      strings.find((string) => string.length > 4)
    );
  });
  test("find element in array of object", () => {
    const users = [
      {
        name: "wafa",
        age: "22",
      },
      {
        name: "nour",
        age: "25",
      },
      {
        name: "hafsah",
        age: "33",
      },
    ];
    expect(myFind(users, (obj) => obj.age>22)).toEqual(users.find((obj) => obj.age>22));
  });
  
  test("find element in array of numbers", () => {
    expect(myFind([1, 2, 3], (element) => element % 2 == 0)).toEqual(
      [1, 2, 3].find((element) => element % 2 == 0)
    );
  });
  
  test('if we pass object parameter to find function  ', () => { 
      
      expect(myFind( { 'a': 1, 'b': 2, 'c': 3 },()=> 1)).toEqual("ERROR native find function dont accept object")
  
    })
  
  // filter function when pass empty paramaters (callbacks or array)
  
  
  test('if we pass empty parameters to find function  ', () => { 
      
      expect(myFind()).toEqual("ERROR theres no callback function and no array  so we couldnt find first matched element")
  
    })
  
   
  test('if we pass empty array to find function ', () => {
  
      
      let arr;
      expect(myFind(arr,()=>1)).toEqual("ERROR no array parameter")
  
  })
  
  test('if we  dont pass  callback to find function ', () => {
      expect(myFind([1,2])).toEqual("ERROR no callback function so we couldnt find first matched element")
  
      
   })
   test('"undefined " find function faild because theres no element matched',() => {

  
    expect(myFind([1,2,3],element => element > 5)).toEqual(undefined)
})