let form = document.querySelector("#keyboard");
const my_result = document.querySelector("#my__result");
const score_field = document.querySelector("#score");

let submitted_result = 0;
let number1 = 0,
  number2 = 0,
  operator = "+",
  result = 0;
let score = 0,
  live = 5;

function generate() {}

function onSubmit() {
  score_field.innerHTML = score;
  submitted_result = 0;
  my_result.innerHTML = submitted_result;
}

form.addEventListener("click", (e) => {
  e.preventDefault();
  if (e.target.value) {
    if (e.target.value == "submit") onSubmit();
    else if (e.target.value == "cut")
      submitted_result = Math.floor((submitted_result /= 10));
    else submitted_result = submitted_result * 10 + parseInt(e.target.value);
  }
  //Showing Entered Result
  my_result.innerHTML = submitted_result;
});

// Keyboard
document.addEventListener("keydown", (e) => {
  if (e.key >= 0 && e.key <= 9)
    submitted_result = submitted_result * 10 + parseInt(e.key);
  if (e.key == "Backspace")
    submitted_result = Math.floor((submitted_result /= 10));
  if (e.key == "Enter") onSubmit();
  //Showing Entered Result
  my_result.innerHTML = submitted_result;
});
