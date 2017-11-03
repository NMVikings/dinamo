const dinamo = document.getElementById("dinamo")
let counter = 0

dinamo.addEventListener("touchmove", () => {
	counter++
	if (counter === 100) {
		alert(100)
	}
})