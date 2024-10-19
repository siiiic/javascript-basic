'use strict';

const container = {
    inputs: [document.querySelector('.input_1'), document.querySelector('.input_2')],
    masseges: {
        zero: 'На ноль делить нельзя',
        noData: 'Введены не все данные',
    },
    resetInputs () {
        this.inputs.map(input => input.value = '')
    }
}

function clickEvent (event) {
    const operator = event.target.innerText;
    const numbers = [parseInt(container.inputs[0].value), parseInt(container.inputs[1].value)];
    let result = document.querySelector('.result');

    for (const num of numbers) {
        if(isNaN(num)) {
            return result.innerText = container.masseges.noData
        }
    }
    
    container.resetInputs();
    result.innerText = operations(numbers[0], numbers[1], operator);
}

function operations (a, b, operator) {
    switch (operator) {
        case '+':
            return a + b;
        case '−':
            return a - b;
        case '÷':
            if (b === 0) {
                return container.masseges.zero;
            }
            return (a / b).toFixed(1);
        case '×': 
            return (a * b).toFixed(1);
    }
}