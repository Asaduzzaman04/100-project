// calculatior javascript code =>

const  display = document.getElementById('output');

const calculate = (i) => {
    display.value += i
}

const clearDisplay = () => {
    display.value = '';
}

const calculateToDisplay = () => {
    display.value = parseFloat(eval(display.value));
}

