let firstNumber = '';
let secondNumber = '';
let operation = '';
let result; 

/**
 * Function that add two numbers
 * @param {String} firstNumber - first number to add
 * @param {String} secondNumber - second number to add
 */
function add(firstNumber, secondNumber){
    result = parseInt(firstNumber) + parseInt(secondNumber);
    showH1(result);
}

/**
 * Function that substract two numbers
 * @param {String} firstNumber - first number to add
 * @param {String} secondNumber - second number to add
 */
function sub(firstNumber, secondNumber){
    result = parseInt(firstNumber) - parseInt(secondNumber);
    showH1(result);
}

/**
 * Function that multiply two numbers
 * @param {String} firstNumber - first number to add
 * @param {String} secondNumber - second number to add
 */
function mul(firstNumber, secondNumber){
    result = parseInt(firstNumber) * parseInt(secondNumber);
    showH1(result);
}

/**
 * Function that divide two numbers
 * @param {String} firstNumber - first number to add
 * @param {String} secondNumber - second number to add
 */
function div(firstNumber, secondNumber){
    result = parseInt(firstNumber) / parseInt(secondNumber);
    showH1(result);
}

/**
 * Show the value that i want
 * @param {*} valueToShow - value to show to the h1
 */
function showH1(valueToShow){
    let elementH1 = document.getElementById('result');
    elementH1.innerHTML = valueToShow
}

/**
 * Function that store numbers
 * @param {String} value - value to stock 
 */
function storeNumber(value){
    console.log('Value', value);
    if (operation !== ''){
        secondNumber = secondNumber + value;
        console.log('Second Number', secondNumber);
        showH1(secondNumber);
    }else{
        firstNumber = firstNumber + value;
        console.log('First Number', firstNumber);
        showH1(firstNumber);    
    }
}

/**
 * Function that store the operation
 * @param {*} valOp 
 */
function storeOp(valOp){
    operation = valOp;
    showH1('')
}

/**
 * 
 */
function calculeResultat(){
    switch(operation){
        case '+':
            add(firstNumber, secondNumber);
            break;
        case '-':
            sub(firstNumber, secondNumber);
            break;
        case '/':
            div(firstNumber, secondNumber);
            break;
        case '*':
            mul(firstNumber, secondNumber);
            break;
    }
}