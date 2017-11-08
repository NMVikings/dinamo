const dinamo = document.getElementById("dinamo")
const rotate = document.getElementById("rotate")
const result = document.getElementById('result')
let counter = 0
let subCounter = new Set()
let previousAngle = 0;

isNear = (num, anchor) => anchor - num < 5 && anchor - num > -5

rotate.addEventListener("touchmove", (e) => {
	e.preventDefault()
	// counter++
	result.textContent = counter
	const box = rotate.getBoundingClientRect()
	var boxCenter=[box.x + box.width/2, box.y + box.height/2];

	var angle = (Math.atan2(e.targetTouches[0].pageX - boxCenter[0], - (e.targetTouches[0].pageY - boxCenter[1]) )*(180/Math.PI)).toFixed(0);

	rotate.style.transform = `rotate(${angle / 2}deg)`;

	if (isNear(angle, 0)) {
		subCounter.add(0)
	}
	if (isNear(angle, 90)) {
		subCounter.add(90)
	}
	if (isNear(angle, -90)) {
		subCounter.add(-90)
	}
	if (isNear(angle, 180) || isNear(angle, -180)) {
		subCounter.add(180)
	}

	if (subCounter.size === 4) {
		subCounter.clear()
		counter += 10
	}
	previousAngle = angle;
})