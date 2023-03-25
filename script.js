const keys = document.querySelectorAll('.keys')
const screen = document.querySelector('.content')
const funcKeys = document.querySelector('.func-keys')
let firstValue = ''
let firstNewValue = ''
let secondValue = ''
let operator = ''

const calculate = (firstNewValue, secondValue, operator) => {
    let x = Number(firstNewValue)
    let y = Number(secondValue)
    let answer = 0;
    
    switch(operator) {
        case "+":
          answer = x + y
          break;
        case "-":
            answer = x - y
          break;
        case "x":
            answer = x * y
          break;
        case "/":
            answer = x / y
          break;
        default:
          answer = NaN;
      }
      return answer
}

const showOnScreen = (value,event) => {
    // screen.innerText = '0'
    if(screen.innerText == 0) {
        screen.innerText = value
    } else {
        screen.innerText += value
    }
    
    if(event.target.classList[0] == 'func-keys') {
        firstValue = screen.innerText.split('')
        operator = firstValue.pop()
        firstNewValue = firstValue.join().replace(',', '')
        screen.innerText= '0'
    }
    if(event.target.classList[1] == 'equal-key'){
        secondValue = screen.innerText.replace('=', '')
        screen.innerText = calculate(firstNewValue, secondValue, operator)
    }
    if(event.target.classList[1] == 'clear-key') {
        screen.innerText = '0'
    }

        //nest if
        // let value = event.target.innerText
        
        // if(screen.innerText == 0) {
        //     screen.innerText = value
        // } else {
        //     screen.innerText += value
        // }
    // console.log(firstNewValue, secondValue, operator)
    // console.log(firstNewValue.replace(',', ''))
}

keys.forEach((key, index) => {
    key.addEventListener('click', (event) => {
        let value = event.target.innerText
        
        // if funcKeys are pressed save previous input accept next input
        showOnScreen(value, event)
        
        
    })
})



//Whatever was pressed before any function key should be saved in firstInput;