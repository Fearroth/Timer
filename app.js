console.log('test');

const inType = document.querySelector('#inputType');
const playButton = document.querySelector('#playButton');
const pauseButton = document.querySelector('#pauseButton');

class Timer {
	constructor(inType, playButton, pauseButton) {
		this.inType = inType;
		this.playButton = playButton;
		this.pauseButton = pauseButton;

		this.playButton.addEventListener('click', this.start);
		this.pauseButton.addEventListener('click', this.pause);
	}

	start = () => {
		console.log('START', this);
	};
	pause = () => {
		console.log('pause', this);
	};
	timervalue = () => {
		let time = inType.getAttribute('value');
	};
}

const timer = new Timer(inType, playButton, pauseButton);
