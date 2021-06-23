// Make an object. Name it as cities. 
// Now give it keys as ‘first’,’ second’,’ third’,’ fourth’. Put ‘Karachi’, ‘Lahore’, ‘Islamabad’, ‘Quetta’ as keys.


let cities={
     first:"Islamabad",//In javascript almost every thing is an object.Variables are also object but the difference btween
     second:"Karachi",// objects and variables is that individual elements in object can be access via key words like if we
     third:"Peshawar",//want to access(islamabad) we use the key word cities.first,but in variables we can do the same function
     fourth:"Rawalpindi"// through index numbers.
     
};
console.log(cities);


                         //AccessingObjects

// Access the first and fourth key of the object and print their respective values
console.log(cities["first"]);
console.log(cities["fourth"]);


                 //LoopingObjects

///Loop values of object’s properties by using for...in loop and print them.
for (let i = 0; i < cities.length; cities++) {
     const element = cities[i];
    console.log(element);
    
}