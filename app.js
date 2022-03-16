// // capturamos los inputs de HTML para trabajar con JS
// const inputCard = document.getElementById('inputCard');
// const inputDate = document.getElementById('inputDate');
// const inputCVV = document.getElementById('inputCVV');

// // nuestras mascaras para guiarnos
// const maskNumber = '####-####-####';
// const maskDate = '##/##';
// const maskCVV = '###';

// // current es actualidad, de momento vacio
// let current = '';
// // y para cada array vamos a guardar lo que el user ponga y desde aca lo vamos a mostrar
// let cardNumber = [];
// let dateNumber = [];
// let cvvNumber = [];

// // al primer input le generamos un evento de tecla
// document.addEventListener('keydown', (e) => {
// 	if (e.key === 'Tab') {
// 		return;
// 	}

// 	e.preventDefault();
// 	// al evento le enviamos la mascara, la tecla y el array
// 	if (e.target.matches('.inputCard')) {
// 		handleInput(maskNumber, e.key, cardNumber);
// 		inputCard.value = cardNumber.join('');
// 	}
// 	if (e.target.matches('.inputDate')) {
// 		handleInput(maskDate, e.key, dateNumber);
// 		inputDate.value = dateNumber.join('');
// 	}
// 	if (e.target.matches('.inputCVV')) {
// 		handleInput(maskCVV, e.key, cvvNumber);
// 		inputCVV.value = cvvNumber.join('');
// 	}
// });
// // esta funcion se ejecuta cada vez que se toque una tecla y recibe la mascara, la tecla y el array del primer input
// const handleInput = (mask, key, arr) => {
// 	// creamos un array de numeros
// 	let numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// 	// si la tecla que se presiona es espacio y la sumatoria de teclas es mayor a 0, va a eliminar la ultima tecla
// 	// y lo retorna, no sigue con el flujo del programa
// 	if (key === 'Backspace' && arr.length > 0) {
// 		arr.pop();
// 		return;
// 	}
// 	// si la tecla que presionamos esta incluida en el array de numeros, o sea esto para que si o si le de a un numero
// 	// y la cantidad de arreglos + 1 es igual o menor a la cantidad de la mask va a ejecutar algo
// 	if (numbers.includes(key) && arr.length + 1 <= mask.length) {
// 		// el arr.length cada vez que se teclee se va aumentando
// 		// entonces cuando la posicion de la mask, o sea en el primer input cuando llegue a la posicion 5 y coincida con el / que si en algun momento coincide
// 		if (mask[arr.length] === '-' || mask[arr.length] === '/') {
// 			// al array va a pushear el caracter y la tecla
// 			// cuando llegue a la posicion 5, al array le vamos agregar el caracter "/" + tecla
// 			arr.push(mask[arr.length], key);
// 		} else {
// 			// y sino tecla solo
// 			arr.push(key);
// 		}
// 	}
// };

const inputCard = document.getElementById('inputCard');
const inputNumber = document.getElementById('inputDate');
const inputCvv = document.getElementById('inputCVV');

const maskCard = '####-####-####-####';
const maskNumber = '##/##';
const maskCvv = '###';

let arrCard = [];
let arrNumber = [];
let arrCvv = [];

document.addEventListener('keydown', (e) => {
	if (e.key === 'tab') {
		return;
	}

	e.preventDefault();

	if (e.target.matches('.inputCard')) {
		handleInput(e.key, arrCard, maskCard);
		inputCard.value = arrCard.join('');
	}

	if (e.target.matches('.inputDate')) {
		handleInput(e.key, arrNumber, maskNumber);
		inputNumber.value = arrNumber.join('');
	}

	if (e.target.matches('.inputCVV')) {
		handleInput(e.key, arrCvv, maskCvv);
		inputCvv.value = arrCvv.join('');
	}
});

const handleInput = (key, arr, mask) => {
	const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
	if (key === 'Backspace' && arr.length > 0) {
		arr.pop();
		return;
	}
	if (numbers.includes(key) && arr.length + 1 <= mask.length) {
		if (mask[arr.length] === '/' || mask[arr.length] === '-') {
			arr.push(mask[arr.length], key);
		} else {
			arr.push(key);
		}
	}
};
