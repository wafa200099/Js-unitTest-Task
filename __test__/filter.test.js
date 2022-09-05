const myFilter = require("../filter");
// filter based on passed array type
test('"normal filter" filter even number in  an array', () => {
  const numbers=[1, 2, 3, 7, 8]
  expect(myFilter(numbers, (element) => element % 2 == 0)).toEqual([
    2, 8,
  ]);
});

test("filter array of strings ", () => {
  const strings = ["wafa", "noor", "hfsa", "sarahnofal"];
  expect(myFilter(strings, (string) => string.length > 4)).toEqual(strings.filter((string) => string.length > 4))

  expect(myFilter(strings, (string) => string.length > 4)).toEqual(
    ["sarahnofal"])
 
});

test("filter  array of object", () => {
  const users = [
    {
      name: "wafa",
      age: "22",
    },
    {
      name: "nour",
      age: "20",
    },
    {
      name: "hafsah",
      age: "33",
    },
  ];
  expect(myFilter(users, (obj) => obj.age>22)).toEqual(users.filter((obj) => obj.age>22));
  expect(myFilter(users, (obj) => obj.age>22)).toEqual([ {
    name: "hafsah",
    age: "33",
  }]);
});

test("filter  array of numbers", () => {
  expect(myFilter([1, 2, 3], (element) => element % 2 == 0)).toEqual(
    [1, 2, 3].filter((element) => element % 2 == 0)
  );
});

test('if we pass object parameter to filter function  ', () => { 
    
    expect(myFilter( { 'a': 1, 'b': 2, 'c': 3 },()=> 1)).toEqual("ERROR native filter function dont accept object")

  })

// filter function when pass empty paramaters (callbacks or array)


test('if we pass empty parameters to filter function  ', () => { 
    
    expect(myFilter()).toEqual("ERROR theres no callback function and no array  so array couldnt filtered")

  })

 
test('if we pass empty array to filter function ', () => {

    
    let arr;
    expect(myFilter(arr,()=>1)).toEqual("ERROR no array parameter")

})

test('if we  dont pass  callback to filter function ', () => {
    expect(myFilter([1,2])).toEqual("ERROR no callback function so array couldnt filterd")

    
 })
