function checkNumber() {
    let marks=document.querySelector("input").value;
    if (marks >= 50) {
        alert("PASS");
    } else {
        alert("FAIL");
    }
}