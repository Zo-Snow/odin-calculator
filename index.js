let currentValue = "";
let prevValue = "";
let currentOperator = ""; 

const display = document.querySelector(".display");
const operatorsList = document.querySelectorAll(".operator");
const numbersList = document.querySelectorAll(".number");
const clearButton = document.querySelector(".clear");
const equalsButton = document.querySelector(".equal");

numbersList.forEach((number) => {
    number.addEventListener('click', () => {   
        currentValue = currentValue + number.textContent;
        updateDisplay(currentValue);

    });
}) 

operatorsList.forEach((button) => {
    button.addEventListener('click', () => {
        if (button.textContent === "+") {
            setValues("add");
        } 
        
        else if (button.textContent === "-") {
            setValues("subtract");
        } 
        
        else if (button.textContent === "x") {
            setValues("multiply");
        } 
        
        else if (button.textContent === "÷") {
            setValues("divide");
        }
 })})

equalsButton.addEventListener('click', () => {
    if (currentOperator === "add") {
        let answer = parseInt(prevValue) + parseInt(display.textContent);
        updateDisplay(answer);
        resetValues();
        
    } 
    else if (currentOperator === "subtract") {
        let answer = parseInt(prevValue) - parseInt(display.textContent);
        updateDisplay(answer);
        resetValues();
    } 
    else if (currentOperator === "multiply") {
        let answer = parseInt(prevValue) * parseInt(display.textContent);
        updateDisplay(answer);
        resetValues();
    } 
    else if (currentOperator === "divide") {
        let answer = parseInt(prevValue) / parseInt(display.textContent);
        updateDisplay(answer);
        resetValues();
    }
})

clearButton.addEventListener('click', clearDisplay);

// Functions

function resetValues() {
    prevValue = "";
    currentValue = "";
    currentOperator = "";
}

function setValues(operator) {
    if (prevValue === "") {
        prevValue = currentValue;
        currentValue = "";
    } else {operate();}
      currentOperator = operator;
}

function operate() {
    if(currentOperator === "add") {
        prevValue = parseInt(prevValue) + parseInt(currentValue);
        currentValue = "";
    } 
    else if (currentOperator === "subtract") {
        prevValue = parseInt(prevValue) - parseInt(currentValue);
        currentValue = "";
    } 
    else if (currentOperator === "multiply") {
        prevValue = parseInt(prevValue) * parseInt(currentValue);
        currentValue = "";
    } 
    else if (currentOperator === "divide") {
        prevValue = parseInt(prevValue) / parseInt(currentValue);
        currentValue = "";
    }
}

function clearDisplay() {
    updateDisplay("");
    currentValue = "";
    prevValue = "";
    currentOperator = "";
}

function updateDisplay(value) {
    display.textContent = value;
}

