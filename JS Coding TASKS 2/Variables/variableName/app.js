// Declare a variable using let inside a function.
//  Add that same variable in another function and see what happens.

let x = 5;
let y =x + 6;
console.log(y);
// show error

// Now declare a variable using var in a block and try reassigning the value to that
// iable in another block and see if it throws an error or not.




 {
  var c = 2;
  console.log(x);
}
//  {
     
//     c=4;
//  }
// console.log(x);
//Uncaught SyntaxError: Identifier 'x' has already been declared


// Create a global variable and try using that variable in another function 
// and see if you're able to access that variable.

var num=10;

{
    let s=12;
    let x=s+num;
    console.log(x);
}

// Yes we can access golabal variable.

