const n_Input = document.querySelector(".n-input");
const getSequenceButton = document.querySelector(".getSequenceButton");
getSequenceButton.addEventListener("click", getSequence);

function fibonacci_series(n) {
  if (n <= 0) return 0;
  let c = [0, 1];
  let a = 0,
    b = 1,
    output = 1;
  for (let i = 2; i <= n; i++) {
    output = a + b;
    c.push(output);
    a = b;
    b = output;
  }
  return c.join(" ");
}

function getSequence() {
  event.preventDefault();

  const fibSequence = document.querySelector(".fibonacciSequence");
  const input_N = n_Input.value;
  console.log(input_N);
  fibSequence.innerText = fibonacci_series(input_N);

  if (n_Input.value == "") {
    fibSequence.innerText = "please enter a number";
  } else if (isNaN(n_Input.value)) {
    fibSequence.innerText = "not a number";
  } else {
    fibSequence.innerText =
      "here is the sequence:" + " " + fibonacci_series(input_N);
  }
}
