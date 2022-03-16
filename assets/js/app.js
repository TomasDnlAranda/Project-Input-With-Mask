const inputCard = document.getElementById('inputCard');
const inputNumber = document.getElementById('inputDate');
const inputCvv = document.getElementById('inputCVV');

// mascaras con un patron de como tiene que ir los caracteres
const maskCard = '####-####-####-####';
const maskNumber = '##/##';
const maskCvv = '###';

// cada tecla que el user toca lo vamos a guardar aca y lo vamos a concatenar todas las teclas y mostrarlo
let arrCard = [];
let arrNumber = [];
let arrCvv = [];

// delegacion de eventos
document.addEventListener('keydown', (e) => {
	if (e.key === 'tab') {
		return;
	}
	e.preventDefault();

	if (e.target.matches('.inputCard')) {
		// ejecutamos la funcion con la tecla, el array, y la mascara
		handleInput(e.key, arrCard, maskCard);
		// el valor del input correspondiente va a ser la union de todos los caracteres del array
		inputCard.value = arrCard.join('');
	}

	if (e.target.matches('.inputDate')) {
		handleMonthExpiration(e.key, arrNumber, maskNumber);
		inputNumber.value = arrNumber.join('');
	}

	if (e.target.matches('.inputCVV')) {
		handleInput(e.key, arrCvv, maskCvv);
		inputCvv.value = arrCvv.join('');
	}
});

// funcion para validar y pushear las teclas
const handleInput = (key, arr, mask) => {
	const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

	// cuando quiera borrar algo el user borramos la ultimo elemento del array
	if (key === 'Backspace' && arr.length > 0) {
		arr.pop();
		return;
	}
	// 1ra validacion para que solo incluya numeros y que el input no supere la cantidad de caracteres que la mascara
	if (numbers.includes(key) && arr.length + 1 <= mask.length) {
		// 2da validaacion si la mascara posicion de cuantos caracteres tiene el array, encuentra el slash o el guion
		if (mask[arr.length] === '/' || mask[arr.length] === '-') {
			// va a pushear el slash o guion y la letra
			arr.push(mask[arr.length], key);
		} else {
			// sino la letra sola
			arr.push(key);
		}
	}
};

// funcion exclusiva del inputDate
// la misma funcion que la anterior solo tiene mas validaciones para que el mes sea del 1 al 12 y el año del 22 al 29
const handleMonthExpiration = (key, arr, mask) => {
	inputNumber.style.border = '1px solid #fff';

	const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
	if (key === 'Backspace' && arr.length > 0) {
		arr.pop();
		return;
	}
	if (numbers.includes(key) && arr.length + 1 <= mask.length) {
		if (mask[arr.length] === '/') {
			arr.push(mask[arr.length], key);
		} else {
			arr.push(key);
		}
	}
	if (arr[0] >= '2') {
		arr.pop();
		inputNumber.focus();
		inputNumber.style.border = '1px solid red';
	} else if (arr[0] === '1') {
		if (arr[1] >= '3') {
			arr.pop();
			inputNumber.focus();
			inputNumber.style.border = '1px solid red';
		}
	}
	if (arr[3] > '2' || arr[3] < '2') {
		console.log(arr[3]);
		arr.pop();
		inputNumber.focus();
		inputNumber.style.border = '1px solid red';
	} else if (arr[4] < '2') {
		arr.pop();
		inputNumber.focus();
		inputNumber.style.border = '1px solid red';
	}
};
