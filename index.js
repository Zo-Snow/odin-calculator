let string = "";
let string2 = "";
let mathButton = "";

displayNums("one", 1);
displayNums("two", 2);
displayNums("three", 3);
displayNums("four", 4);
displayNums("five", 5);
displayNums("six", 6);
displayNums("seven", 7);
displayNums("eight", 8);
displayNums("nine", 9);
displayNums("zero", 0);

document.querySelector(".clear").addEventListener('click', () => {
    clear();
})

const buttonsList = ["add", "subtract", "multiply", "divide"];

buttonsList.map((button) => {
    document.querySelector(`.${button}`).addEventListener('click', () => {
        string2 = string;
        clear();
        mathButton = button;
    })
})

document.querySelector('.equal').addEventListener('click', () => {
    console.log(mathButton);
    if (mathButton === "add") {
        getSolution(add);
    } else if (mathButton === "subtract") {
        getSolution(subtract);
    } else if (mathButton === "multiply") {
        getSolution(multiply);
    } else {
        getSolution(divide);
    }
})

// Functions

function getSolution(operator) {
    let value1 = parseInt(string);
    let value2 = parseInt(string2);
    console.log(value1);
    console.log(value2);
    let answer = calculator(operator, value2, value1);
    console.log(typeof(answer));
    document.querySelector(".display").textContent = answer;
    string = answer;
}

function clear() {
    document.querySelector(".display").textContent = "";
    string = "";
}

function displayNums(className, num) {
    document.querySelector(`.${className}`).addEventListener('click', () => {
        string = string + num;
        document.querySelector(".display").textContent = string;
    })
}

function add(n1, n2) {
    return n1 + n2;
}

function subtract(n1, n2) {
    return n1 - n2;
}

function multiply(n1, n2) {
    return n1 * n2;
}

function divide(n1, n2) {
    return n1 / n2;
}

function calculator(operator, n1, n2) {
    let result = operator(n1, n2);
        return result; 
}





