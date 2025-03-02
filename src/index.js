
let currentOperator = "+";

function changeOperation(op) {
  currentOperator = op;
  
  document.getElementById("sum-button").classList.remove("active");
  document.getElementById("subtract-button").classList.remove("active");
  document.getElementById("multiply-button").classList.remove("active");
  document.getElementById("divide-button").classList.remove("active");
  
  switch(op) {
    case "+":
      document.getElementById("sum-button").classList.add("active");
      break;
    case "-":
      document.getElementById("subtract-button").classList.add("active");
      break;
    case "*":
      document.getElementById("multiply-button").classList.add("active");
      break;
    case "/":
      document.getElementById("divide-button").classList.add("active");
      break;
  }
}

function calculate() {
  let num1 = parseFloat(document.getElementById("num1").value);
  let num2 = parseFloat(document.getElementById("num2").value);

  if (isNaN(num1) || isNaN(num2)) {
      alert("Please enter valid numbers.");
      return;
  }

  let result;
  switch (currentOperator) {
      case "+":
          result = num1 + num2;
          break;
      case "-":
          result = num1 - num2;
          break;
      case "*":
          result = num1 * num2;
          break;
      case "/":
          if (num2 === 0) {
              alert("Cannot divide by zero.");
              return;
          }
          result = num1 / num2;
          break;
      default:
          alert("Invalid operator");
          return;
  }
  document.getElementById("result").innerText = "Result: " + result;
}

function resetFields() {
  document.getElementById("num1").value = "";
  document.getElementById("num2").value = "";
  document.getElementById("result").innerText = "Result:";
  
  changeOperation("+");
}
