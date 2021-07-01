let element = document.querySelector(".div-class");
console.log(element);

// // class name changed
let b = document.querySelector(".div-class").className = "Changed-class";
console.log(b);

// //style attribute
element.style.color = "red";
element.style.border = " 3px solid blue";