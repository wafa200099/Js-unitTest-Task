const myMap =require('../map')

// map  function when pass empty paramaters (callbacks or array) or both

test('if we pass empty parameters to map  ', () => { 
    
    expect(myMap()).toEqual("ERROR theres no callback function and no array  so array couldnt mapp")

  })

 
test('if we pass empty array to map  ', () => {

    
    let arr;
    expect(myMap(arr,(value)=>value * 2)).toEqual("ERROR no array parameter")

})

test('if we  dont pass  callback to map ', () => {
    expect(myMap([1,2])).toEqual("ERROR no callback function so array couldnt mapp")

    
 })

// map based on passed array type
test('"normal map" if we pass  array of numbers   ',() => {

  
    expect(myMap([1,2],(value)=>value * 2)).toEqual([2,4])
}) 

 test('if we pass object parameter to map  ', () => { 
    
    expect(myMap( { 'a': 1, 'b': 2, 'c': 3 },(value)=> value * 2)).toEqual("ERROR native map function dont accept object")

  })

  test('if we pass   array of strings  to map  ', () => { 
    
    const strings = ["wafa", "noor", "hafsa", "sarahnofal"];

    expect(myMap(strings, (string) => + "Eng "+string )).toEqual(
      strings.map((string) => + "Eng "+string)
    );
  })


  test("if we pass array of objects to map", () => {
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
    expect(myMap(users, (obj) => obj.name='eng')).toEqual(users.map((obj) => obj.name='eng'));
  });


 

//  users = [{id: 1, name: 'Hugo'}, {id: 2, name: 'Francesco'}];
//  const arr = [
//     {name:"Bill", age:11},
//     {name:"Bill", age:11}
//     ]
// test('if mapp array of object', () => {
//   expect(myMap(users)).toEqual(
//     expect.arrayContaining([
//       expect.objectContaining({id: 1}),
//       expect.objectContaining({id: 2})
//     ])
//   );
// });


// test('if mapp array of object ', () => { 
//     expect(myMap( [{id: 1, name: 'Hugo'}, {id: 2, name: 'Francesco'}],(value)=>{return value * 2})).toEqual("mapp array of object")
//  })




//   test('if we pass object parameter to map  should modify values', () => { 
    
//     expect(myMap( { 'a': 1, 'b': 2, 'c': 3 },(value)=>{return value * 2})).toEqual([2,4,6])

//   })
  
