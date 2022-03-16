class Timer {
	constructor(inType, playButton, pauseButton, callbacks) {
		this.inType = inType;
		this.playButton = playButton;
		this.pauseButton = pauseButton;

		this.playButton.addEventListener('click', this.start);
		this.pauseButton.addEventListener('click', this.pause);
		this.inType.value = '0';

		if (callbacks) {
			this.onTick = callbacks.onTick;
			this.onStart = callbacks.onStart;
			this.onPause = callbacks.onPause;
		}
	}

	start = () => {
		console.log('START', this);
		this.onStart();
		this.tick();
		this.interval = setInterval(() => {
			this.tick();
		}, 50);
	};
	pause = () => {
		this.onPause();
		console.log('pause', this);
		clearInterval(this.interval);
	};
	tick = () => {
		//let time = inType.getAttribute('value');
		//	console.log('tick');
		if (this.timerDur <= 0) return clearInterval(this.interval);
		this.onTick();
		this.timerDur = this.timerDur - 0.05;
	};

	get timerDur() {
		//console.log(this.inType.value);
		return parseFloat(this.inType.value);
	}
	set timerDur(time) {
		this.inType.value = time.toFixed(2);
	}
}
