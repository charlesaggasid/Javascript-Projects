"use strict"

const calculator = {
	displayValue: '0',
	firstOperand: null,
	waitingForSecondOperand: false,
	operator: null,
};

// UPDATE the display

function updateDisplay() {
	const display = document.querySelector('.calculator-screen');
	display.value = calculator.displayValue
}

updateDisplay();