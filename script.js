function add(operandA, operandB) {
  return operandA + operandB;
}

function subtract(operandA, operandB) {
  return operandA - operandB;
}

function multiply(operandA, operandB) {
  return operandA * operandB;
}

function divide(operandA, operandB) {
  return operandA / operandB;
}

function operate(operandA, operator, operandB) {
  switch (operator) {
    case '+':
      return add(operandA, operandB);
    case '-':
      return subtract(operandA, operandB);
    case '*':
      return multiply(operandA, operandB);
    case '/':
      return divide(operandA, operandB);
  }
}

function updateDisplay() {  //to run after every button pressed; displays the current expression
  let printOperator = operator;
  let printOperandB = operandB;

  if (operator === null) {
    printOperator = '';
  }
  if (operandB === null) {
    printOperandB = '';
  }

  const display = document.querySelector('.display');
  display.textContent = operandA + ' ' + printOperator + ' ' + printOperandB;
}

//the three variables to be manipulated
let operandA = 0;
let operator = null;
let operandB = null;

function respondToDigit(click) {  //to be triggered by clicking digit button; updates variables and display accordingly
  if (operator === null && operandB === null) {
    if (operandA === 0) {
      operandA = Number(click.target.textContent);
    } else {
      operandA = Number(operandA.toString() + click.target.textContent)
    }
  } else {
    if (operandB === null) {
      operandB = Number(click.target.textContent);
    } else {
      operandB = Number(operandB.toString() + click.target.textContent)
    }
  }

  updateDisplay();
}

const digits = document.querySelectorAll('.digit');
digits.forEach(function(digit) {
  digit.addEventListener('click', respondToDigit);
});

function respondToOperator(click) {  //to be triggered by clicking operator button; updates variables and display accordingly
  if (operandB === null) {
    operator = click.target.textContent;
  } else {
    respondToEquals();
    operator = click.target.textContent;
  }

  updateDisplay();
}

const operators = document.querySelectorAll('.operator');
operators.forEach(function(operator) {
  operator.addEventListener('click', respondToOperator);
});

function respondToEquals() {  //to be triggered by clicking equals button; updates variables and display accordingly
  if (operator === null || operandB === null) {
    return;
  } else {
    operandA = operate(operandA, operator, operandB);
    operator = null;
    operandB = null;
  }

  updateDisplay();
}

const equals = document.querySelector('.equals');
equals.addEventListener('click', respondToEquals);

function respondToClear() {  //to be triggered by clicking clear button; updates variables and display accordingly
  operandA = 0;
  operator = null;
  operandB = null;

  updateDisplay();
}

const clear = document.querySelector('.clear');
clear.addEventListener('click', respondToClear);
