const buttonsEl = document.querySelectorAll("button");
const inputFieldEl = document.getElementById("result");

for (let i = 0; i < buttonsEl.length; i++) {
  buttonsEl[i].addEventListener("click", () => {
    const buttonValue = buttonsEl[i].textContent;
    if (buttonValue === "C") {
      clearResult();
    } else if (buttonValue === "⌫") {
      backspace();
    } else if (buttonValue === "=") {
      calculateResult();
    } else {
      appendValue(buttonValue);
    }
  });
}

function backspace() {
  inputFieldEl.value = inputFieldEl.value.slice(0, -1);
}
   

function clearResult() {
  inputFieldEl.value = "";
}

function calculateResult() {
  try {
    inputFieldEl.value = eval(inputFieldEl.value);
  } catch (error) {
    inputFieldEl.value = "Error";
  }
}

function appendValue(buttonValue) {
  const currentValue = inputFieldEl.value;

  const parts = currentValue.split(/[\+\-\*\/]/);
  const currentNumber = parts[parts.length - 1];

  if (buttonValue === "." && currentNumber.includes(".")) return;

  if (currentNumber.includes(".")) {
    const [integerPart, decimalPart] = currentNumber.split(".");

    if (decimalPart.length >= 2 && !isNaN(buttonValue)) return;

    if (decimalPart.length < 2 && !isNaN(buttonValue)) {
      const num = Number(buttonValue);
      if (num < 1 || num > 8) return; 
    }
  }

  inputFieldEl.value += buttonValue;
}

