/*-------------------------------- Constants --------------------------------*/

const calculator = document.querySelector('#calculator');
const display = document.querySelector('.display')

/*-------------------------------- Variables --------------------------------*/

/*------------------------ Cached Element References ------------------------*/

/*----------------------------- Event Listeners -----------------------------*/

calculator.addEventListener('click', (event) => {
  // This log is for testing purposes to verify we're getting the correct value
  // You have to click a button to see this log
  console.log(event.target.innerText);

  // Example
  if (event.target.classList.contains('number')) {
    (display.innerText += event.target.innerText)
    // Do something with a number
  }
  if (event.target.classList.contains('operator')) {
    (display.innerText += event.target.innerText)
  }
  // Example
  if (event.target.innerText === 'C') {display.innerText = ''
    
    // Do something with this operator
  }
  if (event.target.innerText === '=') {
    display.innerText = eval (display.innerText)
  }
});



/*-------------------------------- Functions --------------------------------*/
