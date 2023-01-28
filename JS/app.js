function getPin() {
  const pin = generatePin();
  const pinString = pin + "";
  if (pinString.length == 4) {
    return pin;
  } else {
    return getPin();
  }
}

function generatePin() {
  const pin = Math.round(Math.random() * 10000);
  return pin;
}

document.getElementById("generatePin").addEventListener("click", function () {
  const pin = getPin();
  const pinField = document.getElementById("pinField");
  pinField.value = pin;
});

document
  .getElementById("calculator")
  .addEventListener("click", function (event) {
    const displayField = document.getElementById("display");
    const previousCalcValue = displayField.value;
    const calcValue = event.target.innerText;
    if (isNaN(calcValue)) {
      if (calcValue == "C") {
        displayField.value = "";
      } else if (calcValue == "<") {
        const digits = previousCalcValue.split("");
        digits.pop();
        const remainingDigits = digits.join("");
        displayField.value = remainingDigits;
      }
    } else {
      const newCalcValue = previousCalcValue + calcValue;
      displayField.value = newCalcValue;
    }
  });

document.getElementById("verify-btn").addEventListener("click", function () {
  const displayField = document.getElementById("pinField");
  const generatedPin = displayField.value;
  const typedField = document.getElementById("display");
  const typedPin = typedField.value;
  const message = document.getElementById("correct");
  const errorMessage = document.getElementById("incorrect");
  if (generatedPin == typedPin) {
    message.style.display = "block";
    errorMessage.style.display = "none";
  } else {
    errorMessage.style.display = "block";
    message.style.display = "none";
  }
});
