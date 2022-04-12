let form = document.querySelector("#keyboard");
const my_result = document.querySelector("#my__result");
const score_field = document.querySelector("#score");

let submitted_result = 0;
let number1 = 0,
  number2 = 0,
  operator = "",
  result = 0,
  score = 0,
  live = 5;
expression = "";

function generateOperator() {
  let random_operator = Math.floor(Math.random() * 8);
  switch (random_operator) {
    case 0:
    case 1:
    case 2:
      operator = "+";
      break;
    case 3:
    case 4:
      operator = "-";
      break;
    case 5:
    case 6:
      operator = "*";
      break;
    case 7:
      operator = "/";
      break;
  }
}

function generateNumber(score) {
  let level = Math.floor(Math.log(score / 50) / Math.log(3));
  if (!level) level = 0;
  else if (level > 4) level = 4;
  const limits = [21, 101, 501, 1001, 5001, 6, 11, 21, 31, 51];
  let limit = 0;
  generateOperator();
  if (operator == "+" || operator == "-") limit = limits[level];
  else limit = limits[5 + level];
  number1 = Math.floor(Math.random() * limit);
  number2 = Math.floor(Math.random() * limit);
  if (number1 < number2) {
    number1 = number1 + number2;
    number2 = number1 - number2;
    number1 = number1 - number2;
  }
}

function getMath() {
  generateNumber();
  switch (operator) {
    case "+":
      expression = number1 + " + " + number2;
      result = number1 + number2;
      break;
    case "-":
      expression = number1 + " - " + number2;
      result = number1 - number2;
      break;
    case "*":
      expression = number1 + " * " + number2;
      result = number1 * number2;
      break;
    case "/":
      if (number2 == 0) number2++;
      result = number1 * number2;
      result = result + number1;
      number1 = result - number1;
      result = result - number1;
      expression = number1 + " / " + number2;
      result = number1 / number2;
      break;
  }
  console.log(expression, " = ", result);
}

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
