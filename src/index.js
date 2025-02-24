function calculate() {
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);

  // Validate input
  if (isNaN(num1) || isNaN(num2)) {
      document.getElementById("result").innerText = "Result: Please enter valid numbers";
      return;
  }

  let result = num1 + num2;  // Perform numerical addition
  document.getElementById("result").innerText = "Result: " + result.toFixed(2);
}

function resetFields() {
  document.getElementById("num1").value = "";
  document.getElementById("num2").value = "";
  document.getElementById("operator").innerText = "+";  // Fix: use innerText, not value
  document.getElementById("result").innerText = "Result: ";
}
