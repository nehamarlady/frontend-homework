const backgroundArea = document.querySelector("#backgroundArea");
const intervalInput = document.querySelector("#intervalInput");
const toggleButton = document.querySelector("#toggleButton");

let intervalId = null;

const changeBackgroundColor = function changeBackgroundColor() {
  const hue = Math.floor(Math.random() * 360);
  backgroundArea.style.backgroundColor = `hsla(${hue}, 65%, 55%, 0.75)`;
};

const startChangingBackground = function startChangingBackground() {
  const seconds = Number(intervalInput.value);

  if (
    intervalInput.value.trim() === "" ||
    !Number.isFinite(seconds) ||
    seconds <= 0
  ) {
    return;
  }

  clearInterval(intervalId);

  changeBackgroundColor();
  intervalId = setInterval(changeBackgroundColor, seconds * 1000);

  toggleButton.value = "Stop";
  toggleButton.classList.replace("btn-primary", "btn-danger");
  intervalInput.disabled = true;
};

const stopChangingBackground = function stopChangingBackground() {
  clearInterval(intervalId);
  intervalId = null;

  toggleButton.value = "Start";
  toggleButton.classList.replace("btn-danger", "btn-primary");
  intervalInput.disabled = false;
};

toggleButton.addEventListener("click", function handleToggle() {
  if (intervalId === null) {
    startChangingBackground();
  } else {
    stopChangingBackground();
  }
});
