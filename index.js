var operand1;
var operand2;
let operator = "";

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
      if (operator == "") {
        inputBox.value += event.target.value;
        operand1 = inputBox.value;
        console.log("operand1", operand1);
      } else {
        inputBox.value += event.target.value;
        operand2 = inputBox.value;
        console.log("operand2", operand2);
      }
    });
  }
}

function addOperatorEventListeners(collection) {
  for (let element of collection) {
    element.addEventListener("click", (event) => {
      operator = event.target.value;
      console.log("operator", operator);
      inputBox.value = operator;
      console.log("input", inputBox.value);
      inputBox.value = "";
    });
  }
}

function addClearEventListener(clearElement) {
  console.log("clear =>", clearElement);
  clearElement.addEventListener("click", (event) => {
    console.log("target =>", event.target.value);
  });
}

function addEqualToEventListener(equalToElement) {
  console.log("clear =>", equalToElement);
  equalToElement.addEventListener("click", (event) => {
    console.log("target =>", event.target.value);
  });
}
