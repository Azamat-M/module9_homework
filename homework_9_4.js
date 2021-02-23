console.log('9.4')

const form2 = document.querySelector('.homework_9_4 form')
const errEl2 = document.querySelector('.homework_9_4 .error')
const imgWrapper2 = document.querySelector('.homework_9_4 .imgs')

form2.addEventListener('submit', (e) => {
	e.preventDefault()

	errEl2.textContent = ''
	imgWrapper2.innerHTML = ''

	let inputNum1 = form2.elements['input-num1'].value
	let inputNum2 = form2.elements['input-num2'].value
	console.log(inputNum1, inputNum2)
	if (inputNum1 < 301 && inputNum1 > 99 && inputNum2 < 301 && inputNum2 > 99) {
		fetch(`https://picsum.photos/${inputNum1}/${inputNum2}`)
			.then((response) => {
				let img = document.createElement('img')
				img.setAttribute('src', response.url)
				img.setAttribute('width', '500px')
				imgWrapper2.appendChild(img)
			})
			.catch((e) => {
				console.log('Ошибка запроса', e)
			})
	} else {
		let err = 'одно из чисел вне диапазона от 100 до 300'
		errEl2.textContent = err
	}
})
