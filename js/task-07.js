const fontSizeControl = document.getElementById("font-size-control");
const textElement = document.getElementById("text");

fontSizeControl.addEventListener("input", function () {
  const fontSize = this.value + "px";
  textElement.style.fontSize = fontSize;
});
