//1-Traverse your name and print its length, indices, and each character.
let myFirstName="khalil";

   console.log(myFirstName.length);
 
//indice each letter of my name.
 
for (let i = 0; i < myFirstName.length; i++) {
    
    console.log("charatcter " + ":" + myFirstName[i])
    
}

//2-Take any two random strings and concatenate them to each other
let firstName = "pakistan";
let secondName = "zindabad";

console.log(firstName + " " + secondName);


// concantating by using aray and fo loop
let strings = ["khalil", "hussain"];

for (i = 0; i < strings.length; i++) {
    console.log(strings[0] + " " + strings[1]);
}

/*3-Suppose you are given a string: ‘Karachi’. 
Convert it to ‘Kolachi’ (Hint: Need to look at appropriate indices and replace them)*/
let city = "Karachi";
String.prototype.replaceAt = function(index, replacement) {
    if (index >= this.length) {
        return this.valueOf();
    }
    return this.substring(0, index) + replacement + this.substring(index + 1);
}

//replacing "a" into "o"
city = city.replaceAt(1, 'o');
console.log(city);


String.prototype.replaceAt = function(index, replacement) {
    if (index >= this.length) {
        return this.valueOf();
    }
    return this.substring(0, index) + replacement + this.substring(index + 1);
}

//replacing "r" into "l"
city = city.replaceAt(2, 'l');
console.log(city);
//4-Consider a string ‘Node.js’given to you. I want the last three characters removed. How’d you do that?

let str = "node.js";

var newStr = str.substring(0, str.length - 3);
console.log(newStr);

/*5-There’s a string that’s given to you: ‘Reactj’.
 You need to add s to its last index to make it a complete name i.e. ‘Reactjs’*/


var str1 = "Reactj";
var str2 = "s";
var res = str1.concat(str2);
console.log(res);