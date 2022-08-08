

function generateCalculatorGrid() {
    const calculatorInputGrid = document.getElementById("calculatorInputGrid");
    let row = document.createElement("div");
    row.className = "row";
    let counter = 0;
    for (let i = 9; i >= 0; --i) {
        const col = document.createElement("button");
        col.className = "col";
        col.innerHTML = i;
        col.onclick = function() {
            const input = document.getElementById("calculatorInput");
            input.value += this.innerHTML;
        }
        row.appendChild(col);
        counter++;
        if (counter % 3 == 0) {
            calculatorInputGrid.appendChild(row);
            row = document.createElement("div");
            row.className = "row";
        }
    }
    calculatorInputGrid.appendChild(row);

    const operatorsRow = document.createElement("div");
    operatorsRow.className = "row";
    ["+","-","*","/"].forEach(function (operator) {
        const col = document.createElement("button");
        col.className = "col";
        col.innerHTML = operator;
        col.onclick = function() {
            const input = document.getElementById("calculatorInput");
            input.value += " " + this.innerHTML + " ";
        }
        operatorsRow.appendChild(col);
    });
    calculatorInputGrid.appendChild(operatorsRow);

    const solveRow = document.createElement("div");
    solveRow.className = "row";
    
    const solveCol = document.createElement("button");
    solveCol.className = "col";
    solveCol.innerHTML = "=";
    solveCol.onclick = solve;
    solveRow.appendChild(solveCol);

    const clearCol = document.createElement("button");
    clearCol.className = "col";
    clearCol.innerHTML = "C";
    clearCol.onclick = clear;
    solveRow.appendChild(clearCol);

    calculatorInputGrid.appendChild(solveRow);
}
generateCalculatorGrid();

function clear() {
    document.getElementById("calculatorInput").value = "";
}

function solve() {
    const input = document.getElementById("calculatorInput").value;
    const inputArray = input.split(" ");
    let result = 0;
    while (inputArray.length > 1) {
        result = operate(inputArray[0], inputArray[2], inputArray[1]);
        inputArray.splice(0, 3, result);
    }
    document.getElementById("calculatorInput").value = result;
    console.log(result);
}




/**
 * 
 * @param {number} a 
 * @param {number} b 
 */
function add(a, b) {
    return a + b;
}

/**
 * 
 * @param {*} a 
 * @param {*} b 
 * @returns 
 */
function subtract(a,b) {
    return a-b;
}

/**
 * 
 * @param {*} a 
 * @param {*} b 
 * @returns 
 */
function multiply(a,b) {
    return a*b;
}

/**
 * 
 * @param {*} a 
 * @param {*} b 
 * @returns 
 */
function divide (a,b) {
    return a/b;
}

/**
 * 
 * @param {*} a 
 * @param {*} b 
 * @param {*} operator 
 */
function operate(a, b, operator) {
    a = Number(a);
    b = Number(b);
    switch (operator) {
        case '+':
        case 'add':
            return add(a, b);
        case '-':
        case 'subtract':
            return subtract(a, b);
        case '*':
        case 'multiply':
            return multiply(a,b);
        case '/':
        case 'divide':
            return divide(a,b);
        default:
            return a;
    }
}

