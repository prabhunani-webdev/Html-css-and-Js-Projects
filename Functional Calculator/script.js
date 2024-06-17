console.log("Nani Shree");
 

const resultElement = document.getElementById('result')
 const clearBtn = document.getElementById('clear-Btn')
 const deleteBtn = document.getElementById('delete-Btn')
 const divideBtn = document.getElementById('divide-Btn')
 const multiplyBtn = document.getElementById('multiply-Btn')
 const subtractBtn = document.getElementById('subtract-Btn')
 const addBtn = document.getElementById('add-Btn')
 const decimalBtn = document.getElementById('decimal-Btn')
 const equalBtn = document.getElementById('equal-Btn')
 const numbersBtn = document.querySelectorAll('.number')

  // Intialize the variables
  let result = "";
  let operation = '';
  let previewOparand = 0;

  // Example 24 + 5
  // operation = +
  // previousOprand = 24
  // result = 29
  
  // function to append number
  const appendNumber = (number)=>{
    if(number == '.' && result.includes('.')){
      return;
    }
    result += number;
    updateDisplay();
  }
  // function for update Display
  
  const updateDisplay = () => {
    if(operation){
      resultElement.innerText = `${previewOparand} ${operation} ${result}`
    }
    else{
      resultElement.innerText = result;
    }

  }
  // function for operators

  const selectOperator = (operatorValue) => {
    if(result === '') return;

    if(operation !== '' && previewOparand !== '' ){
      calculateResult();
    }

    operation = operatorValue;
    previewOparand = result;
    result = '';
    updateDisplay();
  };

  // function for calculate result
  const calculateResult = () =>{
    let evaluteddResult;
    const prev = parseFloat(previewOparand);
    const current = parseFloat(result);

    if(isNaN(prev) || isNaN(current)) return;

    switch (operation) {
      case '+':
        evaluteddResult = prev + current;
        break;
      case '-':
        evaluteddResult = prev - current;
        break;
      case '*':
        evaluteddResult = prev * current;
        break;
      case '/':
        evaluteddResult = prev / current;
        break;
    
      default:
        return;
    }

    result = evaluteddResult.toString();
    operation = '';
    previewOparand = '';
  }
  // Add event listener to number buttons
 numbersBtn.forEach(button => {
  button.addEventListener('click', () =>{
    // console.log(button.innerText); || For checking addevent listener actual work;
    appendNumber(button.innerText);
  });
 });

 const clearDisplay = () => {
  result = '';
  previewOparand = '';
  operation = '';
  updateDisplay();
 }
 // function to delete last character from display
 const deleteLastDigit = () => {
  if(result === '') return;
  result = result.slice(0, -1);
  updateDisplay();
 }

 decimalBtn.addEventListener('click', () => appendNumber('.'));
 addBtn.addEventListener('click', () => selectOperator('+'));
 subtractBtn.addEventListener('click', () => selectOperator('-'));
 multiplyBtn.addEventListener('click', () => selectOperator('*'));
 divideBtn.addEventListener('click', () => selectOperator('/'));
 equalBtn.addEventListener('click', () => {
  if( result === '') return;
  calculateResult();
  updateDisplay();
 });
 clearBtn.addEventListener('click', clearDisplay);
 deleteBtn.addEventListener('click', deleteLastDigit);