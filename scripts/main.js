const numbers = document.querySelectorAll('.number');
const operators = document.querySelectorAll('.operator');
const keys = document.querySelector('.calculator-keys');
const equalSign = document.querySelector('.equal-sign');
const calculatorScreen = document.querySelector('.calculator-screen');
const clear = document.querySelector('.clear');
var calculation = [];
let num1 = '';
let num2 = '';
let result;

numbers.forEach(function(number) {
  number.addEventListener('click', function pushNumber(event) {
    const clickedKey = event.target.value;
    calculation.push(clickedKey);
    calculatorScreen.value = calculation.join('');
  })
})

operators.forEach(function(operator) {
  operator.addEventListener('click', function pushOperator(event) {
    const clickedKey = event.target.value;
    calculation.push(clickedKey);
    calculation
  })
})



equalSign.addEventListener('click', function(){
  for(i = 0; i < calculation.length; i++)
    if(calculation[i] === '+' || calculation[i] === '-' || calculation[i] === '*' || calculation[i] === '/'){
      var operator = calculation[i];
      } else if(!operator){
        console.log(calculation[i]);
        num1 = num1 + calculation[i];

      } else if(operator){
        num2 = num2 + calculation[i];
      }

  calculate(num1,operator,num2);
  calculatorScreen.value = result;
  console.log(num1)
})

clear.addEventListener('click', function(){
  calculatorScreen.value = 0;
  num1 = '';
  num2 = '';
  calculation = []

})


function calculate(num1,operator,num2){
  if(operator === '+') {
    result = parseInt(num1) + parseInt(num2);
  }
  if(operator === '-'){
    result = parseInt(num1) - parseInt(num2);
  }
  if(operator === '*'){
    result = parseInt(num1) * parseInt(num2);
  }
  if(operator === "/"){
    result = parseInt(num1) / parseInt(num2);
  }
  // console.log(result)
}
