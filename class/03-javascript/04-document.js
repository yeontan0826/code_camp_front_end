// get value from input(text)
function changeGreeting() {
    const text = String(document.getElementById("inputData").value);
    if(text.length === 0) {
        alert("아무말이나 써주세요!");
        return;
    }
    document.getElementById("greeting").innerText = text;
    document.getElementById("inputData").value = "";
}

// change font-size to h1,h2,h3
function changeHeading1() {
    document.getElementById("greeting").style.fontSize = "50px";
}
function changeHeading2() {
    document.getElementById("greeting").style.fontSize = "40px";
}
function changeHeading3() {
    document.getElementById("greeting").style.fontSize = "30px";
}