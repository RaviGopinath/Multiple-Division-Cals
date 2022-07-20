// var Num1 = parseInt (document.getElementById("number-1"));
// var Num2 = parseInt (document.getElementById("number-2"));
var MulButton = document.getElementById("mul");
var DivButton = document.getElementById("div");
// var result = document.getElementById("output");


MulButton.addEventListener('click', multiply)

function multiply() {
    var Num1 = parseInt (document.getElementById("number-1").value);
    var Num2 = parseInt (document.getElementById("number-2").value);
    document.getElementById("output").innerHTML = Num1 * Num2;
}

DivButton.addEventListener('click', division)

function division() {
    var Num1 = parseInt (document.getElementById("number-1").value);
    var Num2 = parseInt (document.getElementById("number-2").value);

    document.getElementById("output").innerHTML = Num1 / Num2;
}