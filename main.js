var input = document.querySelector('.input');
var showResult = document.querySelector('.show-result');
var result = document.querySelector('.result');

showResult.addEventListener('click', frg)
function frg() {

	let frginput = input.value;

	let frgResult = (5 / 9) * (frginput - 32);

	var mainResult = frgResult.toFixed(2);

	result.innerHTML = "C is: " + mainResult;
};


var inputC = document.querySelector('.input-c');
var showResultC = document.querySelector('.show-result-c');
var resultC = document.querySelector('.result-c');

showResultC.addEventListener('click', celcius);

function celcius() {

	let cinput = inputC.value;

	let cresult = (cinput * 1.8) + 32;

	var mainResultC = cresult.toFixed(2);

	resultC.innerHTML = "F is: " + mainResultC;
};
