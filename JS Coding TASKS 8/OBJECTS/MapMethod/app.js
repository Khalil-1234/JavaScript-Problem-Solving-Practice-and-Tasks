//A-- Suppose you’re given this array: let agesArray = [12,45,56,4]. Use map method to print all of the values and their indices. After that use map method to make a new array from the same array by multiplying each age value by 10.

let agesArray = [12,45,56,4];

console.log(agesArray);
var multiAges=agesArray.map(test);
document.write(multiAges);
function test(x) {
    return x * 10;

}
//B -- Suppose you’re given an array of objects:

et usersData = [

    {
    name: "Saeed",
    
    lastName: "Ahmad",
    
    school: "UoT",
    
    profession: "engineer",
    
    },
    
    {
    
    name: "Ali",
    
    lastName: "Khan",
    
    school: "TUM",
    
    profession: "researcher",
    
    }
    
    ];