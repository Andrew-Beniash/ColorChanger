const button = document.getElementById("btn");
const color = document.querySelector(".color");

const hex = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
];

function randomColor() {
  let randomColor = "#";
  for (let i = 0; i < 6; i++) {
    randomColor += hex[Math.floor(Math.random() * hex.length)];
  }
  return randomColor;
}

button.addEventListener("click", () => {
  let hexColor = randomColor();
  document.body.style.backgroundColor = hexColor;
  color.textContent = hexColor;
});
