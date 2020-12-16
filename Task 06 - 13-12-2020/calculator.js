let firstNumber,
  secondNumber = 0;
let operator = null;
let input = document.getElementById("calculation");
let memory = 0;

function insertNumber(value) {
  input.value += value;
  if (operator == null) {
    firstNumber = Number(input.value);
  } else {
    secondNumber = Number(input.value);
  }
}

function insertOperator(value) {
  //   if (operator != null) {
  //     firstNumber += secondNumber;
  //     secondNumber = 0;
  //     input.value = firstNumber;
  //   }
  switch (value) {
    case "+":
      operator = "+";
      break;
    case "-":
      operator = "-";
      break;
    case "*":
      operator = "*";
      break;
    case "/":
      operator = "/";
      break;
    default:
      operator = null;
      break;
  }
  if (operator != null) {
    input.value = "";
  }
}

function clearData() {
  input.value = "";
  operator = null;
  firstNumber = 0;
  secondNumber = 0;
}

function equal() {
  if (operator != null) {
    switch (operator) {
      case "+":
        firstNumber = firstNumber + secondNumber;
        break;
      case "-":
        firstNumber = firstNumber - secondNumber;
        break;
      case "*":
        firstNumber = firstNumber * secondNumber;
        break;
      case "/":
        if (secondNumber === 0) firstNumber = NaN;
        else firstNumber = firstNumber / parseFloat(secondNumber);
        break;
      default:
        firstNumber = NaN;
        break;
    }

    input.value = firstNumber;
  } else {
    input.value = firstNumber;
  }
}

function removeLastValue() {
  let value = input.value;
  if (value.length > 0) {
    value = value.substr(0, value.length - 1);
  } else {
    value = "";
  }
  if (operator == null) {
    firstNumber = Number(value);
  } else {
    secondNumber = Number(value);
  }
  input.value = value;
}

function convertNumber() {
  let value = Number(input.value);
  value *= -1;
  input.value = value;
  if (operator == null) {
    firstNumber = Number(input.value);
  } else {
    secondNumber = Number(input.value);
  }
}

function clearMemory() {
  memory = 0;
}

function plusMemory() {
  memory = Number(input.value);
}
