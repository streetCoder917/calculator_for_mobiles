// access all calculator buttons...
const Buttons = document.querySelectorAll('button');

// screen calculator
const screen = document.getElementById('screenCalc');


for (let Button of Buttons) {
    Button.addEventListener('click', function(){
        switch(this.textContent) {
            case "Ac": clearScreen()
            break
            case "Del": deleteLastValue()
            break
            case "X2": square_value()
            break
            case "X3": cube_value()
            break
            case "=": evaluate()
            break
            default: add_to_screen(this.textContent)
        }
    })
}
// clear screen
function clearScreen() {
    screen.innerHTML = ''
}

// remove last value from screen
function deleteLastValue() {
    let value = screen.innerHTML
    screen.innerHTML = value.slice(0,-1) // remove last value
    return screen.innerHTML
}

// add values to screen
function add_to_screen(value) {
    screen_len = (screen.innerHTML).length
    if (!(screen_len >= 15)) {
        screen.innerHTML += value
    }
    
}

// square value
function square_value() {
    screen_len = (screen.innerHTML).length
    switch(screen_len) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
            screen.innerHTML = Number(screen.innerHTML) ** 2  
    }
}

// cube value
function cube_value() {
    screen_len = (screen.innerHTML).length
    switch(screen_len) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
            screen.innerHTML = Number(screen.innerHTML) ** 3 
    }
}


// this is function for calculate screen calculator values
function evaluate() {
    try {
        screen.innerHTML = math.evaluate(screen.innerHTML)
        
        if (screen.innerHTML === 'undefined' || isNaN(screen.innerHTML) || (screen.innerHTML == 'Infinity')) {
            screen.innerHTML = '<p class="err">invalid input<p>'
        } 
    
    } 
    
    catch(error) {
        error = '<p class="err">invalid</p>'
        screen.innerHTML = error

    }
   
}
