class Timer {
	constructor(inType, playButton, pauseButton, callbacks) {
		this.inType = inType;
		this.playButton = playButton;
		this.pauseButton = pauseButton;

		this.playButton.addEventListener('click', this.start);
		this.startOn = false;
		this.pauseOn = false;
		this.pauseButton.addEventListener('click', this.pause);
		this.inType.value = '5';

		if (callbacks) {
			this.onTick = callbacks.onTick;
			this.onStart = callbacks.onStart;
			this.onPause = callbacks.onPause;
		}
	}

	start = () => {
		//if (this.pauseOn === true) this.pause();
		if (this.startOn === true) return;
		inType.disabled = true;
		this.startOn = true;
		console.log('START', this);
		this.onStart();
		this.tick();
		this.interval = setInterval(() => {
			this.tick();
		}, 50);
	};
	pause = () => {
		if (this.startOn === false) return;

		if (this.pauseOn === false) {
			inType.disabled = false;
			this.onPause();
			console.log('pause', this);
			clearInterval(this.interval);
			this.pauseOn = true;
		} else if ((this.pauseOn = true)) {
			inType.disabled = true;
			this.pauseOn = false;
			this.onStart();
			this.tick();
			this.interval = setInterval(() => {
				this.tick();
			}, 50);
		}
		//this.startOn = false;
	};
	tick = () => {
		//let time = inType.getAttribute('value');
		//	console.log('tick');
		if (this.timerDur <= 0) {
			this.startOn = false;
			offsetTick = 0;
			return clearInterval(this.interval);
		}
		this.onTick();
		this.timerDur = this.timerDur - 0.05 < 0 ? 0 : this.timerDur - 0.05;
	};

	get timerDur() {
		//console.log(this.inType.value);
		return parseFloat(this.inType.value);
	}
	set timerDur(time) {
		this.inType.value = time.toFixed(2);
	}
}
