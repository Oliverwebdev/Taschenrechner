

function add(){
    var num1 = Number(document.getElementById('num1').value);
    var num2 = Number(document.getElementById('num2').value);
    document.getElementById('result').innerHTML = num1 + num2;
}

function subtract(){
    var num1 = Number(document.getElementById('num1').value);
    var num2 = Number(document.getElementById('num2').value);
    document.getElementById('result').innerHTML = num1 - num2;
}

function multiply(){
    var num1 = Number(document.getElementById('num1').value);
    var num2 = Number(document.getElementById('num2').value);
    document.getElementById('result').innerHTML = num1 * num2;
}

function divide(){
    var num1 = Number(document.getElementById('num1').value);
    var num2 = Number(document.getElementById('num2').value);
    document.getElementById('result').innerHTML = num1 / num2;
}