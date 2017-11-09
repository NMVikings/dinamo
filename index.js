const dinamo = document.getElementById("dinamo")
const rotate = document.getElementById("rotate")
const result = document.getElementById('result')
const box = rotate.getBoundingClientRect()
const breakpoints = [0, 72, 144, -144, -72]
const interval = 360 / (breakpoints.length * 4)
const breakpointsCounter = new Set()
const boxCenter=[ box.x + box.width/2, box.y + box.height/2 ]

let counter = 0
let timer = 0
let previousTimestamp = 0

const isNear = (num, anchor) => anchor - num <= interval && anchor - num >= -interval

const changeCounterValue = (value) => {
	counter = Math.min(Math.max(counter + value, 0), 10000)
	result.textContent = counter

	if (counter === 10000) {
		clearInterval(timer)
	}
}

const increaseCounterValue = () => {
	const currentTime = Date.now()
	const newValue = Math.ceil(Math.random() * 6) * Math.floor(Math.max(1, 100 / (currentTime - previousTimestamp)))
	previousTimestamp = currentTime

	changeCounterValue(newValue)
}


const checkBreakpoint = (angle) =>{
	for (let breakpoint of breakpoints) {
		if (isNear(angle, breakpoint) && !breakpointsCounter.has(breakpoint)) {
			increaseCounterValue()
			breakpointsCounter.add(breakpoint)
		}
	}

	if (breakpointsCounter.size === breakpoints.length) {
		breakpointsCounter.clear()
	}
}

const changeAngle = (angle) => {
	rotate.style.transform = `rotate(${angle}deg)`
}

const startTick = () => setInterval(() => {
	if (Date.now() - previousTimestamp > 600) {
		changeCounterValue(-1)
	}
}, 100)

startTimer = () => {
	if (previousTimestamp === 0) {
		timer = startTick()
	}
}

const calculateAngle = (e) =>
	(Math.atan2(e.targetTouches[0].pageX - boxCenter[0], - (e.targetTouches[0].pageY - boxCenter[1]) )*(180/Math.PI)).toFixed(0)

rotate.addEventListener("touchmove", (e) => {
	e.preventDefault()

	startTimer()
	const angle = calculateAngle(e)
	checkBreakpoint(angle)
	changeAngle(angle)
})