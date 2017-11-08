const dinamo = document.getElementById("dinamo")
const rotate = document.getElementById("rotate")
const result = document.getElementById('result')
let counter = 0
let subCounter = new Set()
let previousTimestamp = Date.now();

isNear = (num, anchor) => anchor - num <= 9 && anchor - num >= -9

addCounter = () => {
	const currentTime = Date.now()
	const newValue = Math.ceil(Math.random() * 3 * Math.max(1, 100 / (currentTime - previousTimestamp)))
	console.log(newValue)
	counter += newValue
	previousTimestamp = currentTime
}

rotate.addEventListener("touchmove", (e) => {
	e.preventDefault()
	// counter++
	result.textContent = counter
	const box = rotate.getBoundingClientRect()
	var boxCenter=[box.x + box.width/2, box.y + box.height/2];

	var angle = (Math.atan2(e.targetTouches[0].pageX - boxCenter[0], - (e.targetTouches[0].pageY - boxCenter[1]) )*(180/Math.PI)).toFixed(0);

	rotate.style.transform = `rotate(${angle / 2}deg)`;

	if (isNear(angle, 0) && !subCounter.has(0)) {
		addCounter()
		subCounter.add(0)
	}
	if (isNear(angle, 36) && !subCounter.has(36)) {
		addCounter()
		subCounter.add(36)
	}
	if (isNear(angle, 72) && !subCounter.has(72)) {
		addCounter()
		subCounter.add(72)
	}
	if (isNear(angle, 108) && !subCounter.has(108)) {
		addCounter()
		subCounter.add(108)
	}
	if (isNear(angle, 144) && !subCounter.has(144)) {
		addCounter()
		subCounter.add(144)
	}
	if (isNear(angle, -36) && !subCounter.has(-36)) {
		addCounter()
		subCounter.add(-36)
	}
	if (isNear(angle, -72) && !subCounter.has(-72)) {
		addCounter()
		subCounter.add(-72)
	}
	if (isNear(angle, -108) && !subCounter.has(-108)) {
		addCounter()
		subCounter.add(-108)
	}
	if (isNear(angle, -144) && !subCounter.has(-144)) {
		addCounter()
		subCounter.add(-144)
	}
	if (isNear(angle, 180) || isNear(angle, -180) && !subCounter.has(180)) {
		addCounter()
		subCounter.add(180)
	}

	if (subCounter.size === 10) {
		subCounter.clear()
	}
	previousAngle = angle;
})