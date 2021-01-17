// Selector
const inputHeight = document.querySelector(".input-height");
const inputWeight = document.querySelector(".input-weight");
const calculateButton = document.querySelector(".calculate-btn");
const bmiResult = document.querySelector(".bmi-result");

bmiResult.style.visibility = "hidden";

// Event Listener
calculateButton.addEventListener("click", (e) => {
  e.preventDefault();
  const heightValue = inputHeight.value / 100;
  const weightValue = inputWeight.value;
  const result = (weightValue / (heightValue * heightValue)).toFixed(2);
  // console.log(heightValue, weightValue);
  // console.log(result);
  if (result < 18.5) {
    bmiResult.innerHTML = `<p>Your BMI are ${result} (Underweight)</p>`;
  } else if (result <= 25) {
    bmiResult.innerHTML = `<p>Your BMI are ${result} (Ideal)</p>`;
  } else {
    bmiResult.innerHTML = `<p>Your BMI are ${result} (Overweight)</p>`;
  }
  bmiResult.style.visibility = "visible";
});
