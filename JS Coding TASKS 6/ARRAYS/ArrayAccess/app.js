// Print the first and last member of the same array

const cars = ["Saab", "Volvo", "BMW"];
  console.log(cars[0]);
  console.log(cars[2]);
  

  // 4) Problem Name: Array Length
  //Print the length and size of the array

  const numbers =[1,2,3,4,5,6,7];
  console.log(numbers.length);
//   //Note: There is no size() method available with the array.
//  But there is a length field available in the array that can be used to,
//   find the length or size of the array.

// array.length: length is a final variable applicable for arrays. 
// With the help of the length variable, 
// we can obtain the size of the array


//5) Problem Name: toString
//Convert the same array to string using the toString() method

let naturalNumber =[1,2,3,4,5,6,7];
  console.log(naturalNumber.toString());
  console.log(typeof naturalNumber);  // Object

//   date type of naturalnumber is showing object after converting from number into 
// string.Need strong reason and illustration why the data type is oject instead of
// string