var button = document.querySelector('button')
var body = document.querySelector('body')

button.addEventListener('click', dayToNight)

function dayToNight() {
	body.classList.toggle('night')
}