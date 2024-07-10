
let add = document.getElementById("add");
let sub = document.getElementById("sub");
let mul = document.getElementById("mul");
let div = document.getElementById("div");

function addNum() {
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let result = document.getElementById("result");
    let label = document.getElementById("lab");

    // Convert into numbers
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);

    // Add numbers
    let sum = num1 + num2;
    result.innerText = `${num1} + ${num2} => ${sum}`;
    result.style.border = "3px solid green";
}

function subNum() {
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let result = document.getElementById("result");

    // Convert into numbers
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);

    // Subtract numbers
    let sub = num1 - num2;
    result.innerText = `${num1} - ${num2} => ${sub}`;
    result.style.border = "3px solid green";
}

function mulNum() {
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let result = document.getElementById("result");

    // Convert into numbers
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);

    // Multiply numbers
    let mul = num1 * num2;
    result.innerText = `${num1} * ${num2} => ${mul}`;
}

function divNum() {
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let result = document.getElementById("result");

    // Convert into numbers
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);

    // Divide numbers
    let div = num1 / num2;
    result.innerText = `${num1} / ${num2} => ${div}`;
    result.style.border = "3px solid green";
}

// Add event listners to buttons
add.addEventListener("click", addNum);
sub.addEventListener("click", subNum);
mul.addEventListener("click", mulNum);
div.addEventListener("click", divNum);