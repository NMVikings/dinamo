const dinamo = document.getElementById("dinamo")
const result = document.getElementById('result')
let counter = 0

dinamo.addEventListener("touchmove", (e) => {
	e.preventDefault()
	counter++
	result.textContent = counter
	if (counter === 100) {
		alert(100)
	}

})