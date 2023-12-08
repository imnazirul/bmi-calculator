const weigthinput = document.getElementById("weigthinput");
const heightinput = document.getElementById("heightinput");
const btnEl = document.querySelector(".btn");
const resultEl = document.getElementById("result");
const healthEl = document.getElementById("health");

let bmiValue;

btnEl.addEventListener("click", (event) => {
  if (weigthinput.value !== "" && heightinput.value !== "") {
    bmiValue = (
      +weigthinput.value /
      (heightinput.value * heightinput.value)
    ).toFixed(2);

    resultEl.value = bmiValue;
  }
  showhealth();
});
window.addEventListener("keypress", (event2) => {
  if (event2.key === "Enter") {
    if (weigthinput.value !== "" && heightinput.value !== "") {
      bmiValue = (
        +weigthinput.value /
        (heightinput.value * heightinput.value)
      ).toFixed(2);

      resultEl.value = bmiValue;
    }
    showhealth();
  }
});

function showhealth() {
  if (bmiValue < 18.5) {
    healthEl.innerText = "UnderWeight";
  } else if (bmiValue >= 18.5 && bmiValue <= 24.9) {
    healthEl.innerText = "Normal Weight";
  } else if (bmiValue >= 18.5 && bmiValue <= 24.9) {
    healthEl.innerText = "Normal Weight";
  } else if (bmiValue >= 25 && bmiValue <= 29.9) {
    healthEl.innerText = "Pre-Obese";
  } else if (bmiValue >= 30 && bmiValue <= 34.9) {
    healthEl.innerText = "Obese";
  } else if (bmiValue >= 35 && bmiValue <= 40) {
    healthEl.innerText = "Obese Type 1 (obese)";
  } else if (bmiValue >= 40.1 && bmiValue <= 50) {
    healthEl.innerText = "Obese Type 2 (morbid obese)";
  } else if (bmiValue >= 50.1) {
    healthEl.innerText = "Obese Type 3 (super obese)";
  }
}
