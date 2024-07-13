
let add = document.getElementById("add");
let sub = document.getElementById("sub");
let mul = document.getElementById("mul");
let div = document.getElementById("div");

add.addEventListener("click", () => {
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let result = document.getElementById("result");

    // Convert string into numbers
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);

    if(isNaN(num1)) {
        alert("1st number not entered ..!");
    } else if(isNaN(num2)) {
        alert("2nd number not entered ..!");
    } else {
        // Add numbers
        let sum = num1 + num2;
        result.innerText = `=> ${sum}`;
        result.style.border = "3px solid green";
    }
});

sub.addEventListener("click", () => {
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let result = document.getElementById("result");

    // Convert string into numbers
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);

    if(isNaN(num1)) {
        alert("1st number not entered ..!");
    } else if(isNaN(num2)) {
        alert("2nd number not entered ..!");
    } else {
        // Subtract numbers
        let sub = num1 - num2;
        result.innerText =  `=> ${sub}`;
        result.style.border = "3px solid green";
    }
});

mul.addEventListener("click", () => {
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let result = document.getElementById("result");

    // Convert string into numbers
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);

    if(isNaN(num1)) {
        alert("1st number not entered ..!");
    } else if(isNaN(num2)) {
        alert("2nd number not entered ..!");
    } else {
        // Multiply numbers
        let mul = num1 * num2;
        result.innerText = `=> ${mul}`;
    }
});

div.addEventListener("click", () => {
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let result = document.getElementById("result");

    // Convert string into numbers
    num1 = parseFloat(num1);
    num2 = parseFloat(num2);

    if(isNaN(num1)) {
        alert("1st number not entered ..!");
    } else if(isNaN(num2)) {
        alert("2nd number not entered ..!");
    } else {
        // Divide numbers
        let div = num1 / num2;
        result.innerText = `=> ${div}`;
        result.style.border = "3px solid green";
        result.style.height = "7rem";
    }
});    

let btn = document.querySelector("#btn");
let body = document.querySelector("body");
let currMode = "light";
let result = document.getElementById("result");

btn.addEventListener("click", () => {
    if(currMode === "light") {
        currMode = "dark";
        body.style.backgroundColor = "black";
        body.style.color = "white";
        result.style.border = "2px solid white";
        btn.innerText = "Light";
    } else {
        currMode = "light";
        body.style.backgroundColor = "white";
        body.style.color = "black";
        result.style.border = "2px solid black";
        btn.innerText = "Dark";
    }
});
