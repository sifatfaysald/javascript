console.log("app connected!");

const button = document.getElementById("eventButton");

function clicker() {
  console.log("Button clicked!");
}

button.addEventListener("click", clicker);
