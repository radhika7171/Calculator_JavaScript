let operand1 = null;
let operand2 = null;
let operator = null;

window.onload = () => {
  var operandElements = document.getElementsByClassName("operand");
  var operatorElements = document.getElementsByClassName("operator");
  var clearButton = document.getElementById("clear");
  var equalTo = document.getElementById("equalTo");
  var inputBox = document.getElementById("inputBox");

  // adding event listeners
  addOperandEventListeners(operandElements);
  addOperatorEventListeners(operatorElements);
  addClearEventListener(clearButton);
  addEqualToEventListener(equalTo);
};

function addOperandEventListeners(collection) {
  for (let element of collection) {
    element.addEventListener("click", (event) => {
      if (operator === null) {
        inputBox.value += event.target.value;
        operand1 = parseInt(inputBox.value);
      } else {
        if (Number.isNaN(parseInt(inputBox.value))) {
          inputBox.value = "";
        }
        inputBox.value += event.target.value;
        operand2 = parseInt(inputBox.value);
      }
    });
  }
}

function addOperatorEventListeners(collection) {
  for (let element of collection) {
    element.addEventListener("click", (event) => {
      operator = event.target.value;
      inputBox.value = operator;
    });
  }
}

function addClearEventListener(clearElement) {
  clearElement.addEventListener("click", (event) => {
    operand1 = null;
    operand2 = null;
    operator = null;
    inputBox.value = "";
  });
}

function addEqualToEventListener(equalToElement) {
  equalToElement.addEventListener("click", (event) => {
    console.log("op1", operand1);
    console.log("op2 =>", operand2);
    console.log("oper =>", operator);
    console.log("condition", !operand1 || !operand2 || !operand2);
    if (!operand1 || !operator || !operand2) {
      alert("Not a valid operation!");
    } else {
      result = (function () {
        switch (operator) {
          case "+":
            return operand1 + operand2;
          case "-":
            return operand1 - operand2;
          case "*":
            return operand1 * operand2;
          case "/":
            return operand1 / operand2;
          case "%":
            return operand1 % operand2;
        }
      })();
      inputBox.value = result;
      operand1 = result;
      operator = null;
      operand2 = null;
      console.log("result", result);
    }
  });
}
