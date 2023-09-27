let buttons = document.querySelectorAll(".print");
let equalsButton = document.querySelector("#equals");
let cButton = document.querySelector("#c");
let display = document.querySelector("#calculator-display");
let calculator = new Calculator();

buttons.forEach((button) => {
    button.addEventListener("click", print);
});
equalsButton.addEventListener("click", calculate);
cButton.addEventListener("click", clear);

function print(event) {
    display.textContent += event.target.textContent;
}

function calculate(object) {
    calculator.calculate(display.textContent);
}

function clear(event) {
    display.textContent = "";
}
