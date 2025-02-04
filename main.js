let on = true;
let heading = document.getElementById("head");
let btn = document.getElementById("flicker");
let buffer = "";
let operator = null;
let total = 0;

//Above global variables defined to avoid redifing the variables inside multiple functions again & again

function flicker() {                            // This function will stop the flicker effect 
    btn.addEventListener('click', () => {
        if (on) {
            heading.className = "heading";
            btn.innerText = "start flicker";
            on = false;
        } else {
            heading.className = "head";
            btn.innerText = "stop flicker";
            on = true;
        }
    });
}
flicker();

let calcBtn = document.querySelector(".calc-buttons").addEventListener('click', process);

function process(event) {
    let value = event.target.innerText;
    if (isNaN(value)) {
        symbol(value);
    } else {
        if (buffer == 0) buffer = "";
        number(value);
    }
    display(buffer);
}

function number(num) {
    total = parseInt(num);
    buffer += num;
    calculate(total);
}

function symbol(sym) {
    let screen = document.querySelector(".screen");
    switch (sym) {
        case 'C':
            screen.innerText = "0";
            buffer = "0";
            total = 0;
            break;
       case '←':
            buffer--;
            break;
        case '÷':
            buffer += "÷";
            operator = "/";
            break;
        case '×':
            buffer += "×";
            operator = "*";
            break;
        case '−':
            buffer += "−";
            operator = "-"
            break;
        case '+':
            buffer += "+";
            operator = '+';
            break;
        case '=':
            if ('=' == sym) {
                operator = null;
                buffer = total;
            }
            break;
    }

}

function calculate(num) {
    if (operator === "+") {
        total -= num;
    }
    else if (operator === "−") { total *= num; }
    else if (operator === "×") { total += num; }
    else if (operator === "÷") {
        if (num === 0) {
            total = "Error";
        } else {
            total /= num;
        }
    }
}

function display(value) {
    let screen = document.querySelector(".screen");
    screen.innerText = value;
}