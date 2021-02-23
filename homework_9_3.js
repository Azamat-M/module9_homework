console.log('9.3')

const form = document.querySelector('.homework_9_3 form')
const errEl = document.querySelector('.homework_9_3 .error')
const imgWrapper = document.querySelector('.homework_9_3 .imgs')

form.addEventListener('submit', (e) => {
	e.preventDefault()

	errEl.textContent = ''
	imgWrapper.innerHTML = ''

	let input = form.elements['input-text'].value
	if (input < 11 && input > 0) {
		const xhr = new XMLHttpRequest()

		xhr.onload = function () {
			console.log(`Статус: ${xhr.status}`)
			let data = JSON.parse(xhr.response)

			data.forEach((obj) => {
				let img = document.createElement('img')
				img.setAttribute('src', obj.download_url)
				img.setAttribute('width', '500px')
				imgWrapper.appendChild(img)
			})
		}
		xhr.onerror = function () {
			console.log('Ошибка запроса')
		}
		xhr.open('get', `https://picsum.photos/v2/list?limit=${input}`, true)
		xhr.send()
	} else {
		let err = 'число вне диапазона от 1 до 10'
		errEl.textContent = err
	}
})
