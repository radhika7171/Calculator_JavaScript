var operand1;
var operand2;
let operator;

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
      inputBox.value = "";
    });
  }
}

function addClearEventListener(clearElement) {
  console.log("clear =>", clearElement);
  clearElement.addEventListener("click", (event) => {
    operand1 = null;
    operand2 = null;
    operator = null;
    inputBox.value = "";
  });
}

function addEqualToEventListener(equalToElement) {
  equalToElement.addEventListener("click", (event) => {
    if (!operand1 || !operator || !operand2) {
      alert("Not a valid operation!");
    } else {
      inputBox.value = (function () {
        switch (operator) {
          case "+":
            return operand1 + operand2;
          case "-":
            return operand1 - operand2;
          case "*":
            return operand1 * operand2;
          case "/":
            return operand1 / operand2;
        }
      })();
    }
  });
}
