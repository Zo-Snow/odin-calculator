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

let string = "";

function displayNums(className, num) {
    document.querySelector(`.${className}`).addEventListener('click', () => {
        string = string + num;
        document.querySelector(".display").textContent = string;
    })
}

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
    document.querySelector(".display").textContent = "";
    string = "";
})





