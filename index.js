// keyboard events keydown keyup keypress
const letter1 = document.getElementById("letter1");
const letter2 = document.getElementById("letter2");
const letter3 = document.getElementById("letter3");
const letter4 = document.getElementById("letter4");
const letter5 = document.getElementById("letter5");
const letter6 = document.getElementById("letter6");
const letter7 = document.getElementById("letter7");

let aToggle = false;
let uToggle = false;

document.addEventListener("keydown", (e) => {
  if (e.repeat) return; // avoid firing repeatedly while key is held
  const key = e.key.toLowerCase();

  switch (key) {
    case "a":
      if (!aToggle) {
        aToggle = true;
        letter1.textContent = "A for Attitude";
        letter1.style.fontSize = "2.5rem";
      } else {
        aToggle = false;
        letter5.textContent = "A for Ambitious";
        letter5.style.fontSize = "2.2rem";
      }
      break;

    case "r":
      letter2.textContent = "R for Rational";
      letter2.style.fontSize = "2.5rem";
      break;

    case "u":
      if (!uToggle) {
        uToggle = true;
        letter3.textContent = "U for Unique";
        letter3.style.fontSize = "2.5rem";
      } else {
        uToggle = false;
        letter7.textContent = "U for Unstoppable";
        letter7.style.fontSize = "2.05rem";
      }
      break;

    case "n":
      letter4.textContent = "N for Noble";
      letter4.style.fontSize = "2.5rem";
      break;

    case "l":
      letter6.textContent = "L for Logical";
      letter6.style.fontSize = "2.5rem";
      break;

    default:
      break;
  }
});
