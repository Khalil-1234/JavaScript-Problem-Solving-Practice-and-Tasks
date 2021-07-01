
// Also, check for format of email in the first input field and ensure
//  that password field’s length is not less than 8 character.

document.querySelector("#button").onclick = addEventListener;
function addEventListener() {
    const element1 = document.getElementById("email");
    const element2 = document.getElementById("password");

    if (element1.value == "" && element2.value == "") {
        alert("Fill the requirments first");
    }
    else if(element1.value == "" || element2.value == ""){
        alert("fill all the blanks");
    }
    else {
        alert("logged in successfully");
    } 

}