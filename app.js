console.log('test');

const inType = document.querySelector('#inputType');
const playButton = document.querySelector('#playButton');
const pauseButton = document.querySelector('#pauseButton');
const circle = document.querySelector('circle');

//circle.setAttribute('stroke-dashoffset', '200');
const timer = new Timer(inType, playButton, pauseButton, {
	onTick() {
		console.log('1');
		const off = parseInt(circle.getAttribute('stroke-dashoffset')) - 1;
		circle.setAttribute('stroke-dashoffset', off);
	},
	onStart() {
		console.log('2');
	},
	onPause() {
		console.log('3');
	}
});

//console.log(timer.inType.value);
