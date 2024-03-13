//Calculator

const display = document.getElementById('display');

const appendToDisplay=(input)=>{
    display.value +=input;
}

const clearScreen=()=>{
    display.value = " ";
}

const calculate=()=>{
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value  = "Error :("
    }
}