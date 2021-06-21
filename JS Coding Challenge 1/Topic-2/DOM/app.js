// Make index.html, style.css and app.js files.
// Make a heading saying ‘Hello’ one input field for your name, one input field for number, one button saying ‘Send Message’.
// After that, upon click of the button, add your name to ‘Hello’ text and in an alert show ‘The message has been sent on the given number’.

function alertShow() {
    let heading=document.querySelector("h1").innerHTML;
    let name=document.querySelector("#typename").Value;
    let number=parseInt(document.querySelector("#typenumber").Value);
    heading(name + number +"!" );
}