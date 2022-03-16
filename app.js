console.log('test');

const inType = document.querySelector('#inputType');
const playButton = document.querySelector('#playButton');
const pauseButton = document.querySelector('#pauseButton');
const circle = document.querySelector('circle');

//circle.setAttribute('stroke-dashoffset', '200');
let offsetTick = 50;
const timer = new Timer(inType, playButton, pauseButton, {
	onTick() {
		const offset = parseFloat(circle.getAttribute('stroke-dashoffset')) - offsetTick;
		circle.setAttribute('stroke-dashoffset', offset);
	},
	onStart() {
		console.log('2');
		offsetTick = parseInt(circle.getAttribute('stroke-dasharray')) / parseInt(inType.value) / 20; // perimeter divided by time by ticks per s
		console.log(offsetTick);
	},
	onPause() {
		console.log('3');
	}
});

//console.log(timer.inType.value);
//stroke-dasharray
