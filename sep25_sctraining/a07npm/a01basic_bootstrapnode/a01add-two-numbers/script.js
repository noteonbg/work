function addNumbers() {
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);

  const resultDiv = document.getElementById("result");

  if (isNaN(num1) || isNaN(num2)) {
    resultDiv.className = "alert alert-danger mt-3";
    resultDiv.textContent = "Please enter valid numbers.";
  } else {
    const sum = num1 + num2;
    resultDiv.className = "alert alert-success mt-3";
    resultDiv.textContent = `Result: ${sum}`;
  }

  resultDiv.classList.remove("d-none");
}
