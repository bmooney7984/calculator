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
