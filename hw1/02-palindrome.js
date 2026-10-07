const elem = document.querySelector("input");

elem.addEventListener("input", handleInput);

function handleInput(event) {
  const value = event.target.value;

  result.className = "";

  if (value === "") {
    result.textContent = "";
    return;
  }

  const number = Number(value);

  if (!Number.isInteger(number) || number <= 0) {
    result.textContent = "Please enter a positive number.";
    result.classList.add("result-error");
    return;
  }

  const numberString = String(number);
  const reversed = numberString.split("").reverse().join("");

  if (numberString === reversed) {
    result.textContent = "Yes. This is a palindrome!";
    result.classList.add("result-success");
  } else {
    result.textContent = "No. Try again.";
    result.classList.add("result-error");
  }
}
