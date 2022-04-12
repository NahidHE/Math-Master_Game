let form = document.querySelector("#keyboard");
const my_result = document.querySelector("#my__result");
let submitted_result = 0;

form.addEventListener("click", (e) => {
  e.preventDefault();
  if (e.target.value) {
    if (e.target.value == "submit") console.log("Submit");
    else if (e.target.value == "cut")
      submitted_result = Math.floor((submitted_result /= 10));
    else submitted_result = submitted_result * 10 + parseInt(e.target.value);
  }
  console.log(e.target.value);
  console.log(submitted_result);
  my_result.innerHTML = submitted_result;
});
