console.log('9.5')

const form3 = document.querySelector('.homework_9_5 form')
const errEl3 = document.querySelector('.homework_9_5 .error')
const imgWrapper3 = document.querySelector('.homework_9_5 .imgs')

const data = localStorage.getItem('localData')

showImgs(JSON.parse(data))

form3.addEventListener('submit', (e) => {
	e.preventDefault()

	errEl3.textContent = ''
	imgWrapper3.innerHTML = ''

	let inputPage = form3.elements['input-page'].value
	let inputLimit = form3.elements['input-limit'].value

	if (
		(inputPage > 10 || inputPage < 1) &&
		(inputLimit > 10 || inputLimit < 1)
	) {
		let err = 'Номер страницы и лимит вне диапазона от 1 до 10'
		errEl3.textContent = err
	} else if (inputPage > 10 || inputPage < 1) {
		let err = 'Номер страницы вне диапазона от 1 до 10'
		errEl3.textContent = err
	} else if (inputLimit > 10 || inputLimit < 1) {
		let err = 'Лимит вне диапазона от 1 до 10'
		errEl3.textContent = err
	} else {
		fetch(`https://picsum.photos/v2/list?page=${inputPage}&limit=${inputLimit}`)
			.then((response) => {
				return response.json()
			})
			.then((data) => {
				console.log(data)
				localStorage.setItem('localData', JSON.stringify(data))
				showImgs(data)
			})
			.catch((e) => {
				console.log('Ошибка запроса', e)
			})
	}
})

function showImgs(data) {
	if (data) {
		data.forEach((obj) => {
			let img = document.createElement('img')
			img.setAttribute('src', obj.download_url)
			img.setAttribute('width', '500px')
			imgWrapper3.appendChild(img)
		})
	}
}
