function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, "0")}`;
}

document.addEventListener("DOMContentLoaded",function createBoxes()) {
  const boxCountInput = document.querySelector(".boxCountInput");
  const boxCount = parseInt(boxCountInput.value, 10);

  console.log("boxCountInput");

  if (isNaN(boxCount) || boxCount <= 0) {
    alert("Por favor ingrese un número mayor que 0.");
    return;
  }

  const boxesContainer = document.querySelector("boxes");
  boxesContainer.innerHTML = "";

  let size = 30;

  for (let i = 0; i < boxCount; i++) {
    const box = document.createElement("div");
    box.style.width = size + "px";
    box.style.height = size + "px";
    box.style.backgroundColor = getRandomHexColor();
    box.classList.add("box");

    boxesContainer.appendChild(box);
    size += 10;
  }
};
/* button = document.getElementById("button");
newBox = document.getElementById("boxes");
button.onClick = agregarCaja;
function agregarCaja() {
  return console.log("sisas");
}
function destroyBoxes() {
  const boxesContainer = document.querySelector("boxes");
  boxesContainer.innerHTML = "";
} */
