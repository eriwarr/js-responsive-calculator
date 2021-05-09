const numbers = document.querySelectorAll(".number");
const operators = document.querySelectorAll(".operator, .clear");
const equalSign = document.querySelector(".equal-sign");
const calculatorScreen = document.querySelector('.calculator-screen');
const clearButton = document.querySelector('.clear');
var firstNumber = ""
var secondNumber = ""
var calculation = [];
var sign = "";
var result;

numbers.forEach(function(number) {
  number.addEventListener('click', function () {
    calculation.push(parseInt(this.innerHTML));
    calculatorScreen.value = this.innerHTML;

    firstNumber = calculation[0];
    secondNumber = calculation[2];
  })
})


operators.forEach(function(operator) {
  operator.addEventListener('click', function pushOperator() {
    sign = this.value
    calculation.push(this.innerHTML);

  });
})

function calculate() {

if (sign === '+') {
  result = firstNumber + secondNumber
  calculatorScreen.value = result;
}
if (sign === '-') {
  result = firstNumber - secondNumber
  calculatorScreen.value = result;
}
if (sign === '*') {
  result = firstNumber * secondNumber
  calculatorScreen.value = result;
}
if (sign === '/') {
  result = firstNumber / secondNumber
  calculatorScreen.value = result;
}
}



equalSign.addEventListener('click', function () {
 calculate();
})

clearButton.addEventListener('click', function(){
  calculatorScreen.value = 0;
  firstNumber = ""
  secondNumber = ""
  calculation = [];
})
