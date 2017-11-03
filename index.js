const dinamo = document.getElementById("dinamo")
const rotate = document.getElementById("rotate")
const result = document.getElementById('result')
let counter = 0

rotate.addEventListener("touchmove", (e) => {
	e.preventDefault()
	counter++
	result.textContent = counter
	const deg = -counter % 360
	rotate.style.transform = `rotate(${deg}deg)`;
})