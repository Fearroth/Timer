console.log('test');

const inType = document.querySelector('#inputType');
const playButton = document.querySelector('#playButton');
const pauseButton = document.querySelector('#pauseButton');
const circle = document.querySelector('circle');

//circle.setAttribute('stroke-dashoffset', '200');
let offsetTick = 0;
const timer = new Timer(inType, playButton, pauseButton, {
	onTick() {
		let offset = parseFloat(circle.getAttribute('stroke-dashoffset')) - offsetTick;
		offset < 0
			? circle.setAttribute('stroke-dashoffset', parseInt(circle.getAttribute('stroke-dasharray')))
			: circle.setAttribute('stroke-dashoffset', offset);
	},
	onStart() {
		console.log('2');
		if (offsetTick === 0) {
			offsetTick = parseInt(circle.getAttribute('stroke-dasharray')) / parseInt(inType.value) / 20; // perimeter divided by time by ticks per s
			console.log(offsetTick, 'offset tick');
		}
	},
	onPause() {
		console.log('3');
	}
});

//console.log(timer.inType.value);
//stroke-dasharray

console.log('poprawic css zlozyc w calosc');
console.log('przypisac do zmiennych wartosc pierscienia/ ticku, promien nie moze byc zapisany jako %?');
//console.log('offset przyspiesza z kazdym kliknieciem start'); ok
//console.log('poprawic css zlozyc w calosc');
inType.addEventListener(
	'input',
	debounce(() => {
		offsetTick = 0;
		circle.setAttribute('stroke-dashoffset', 0);
		timer.startOn = false;
		timer.pauseOn = false;
	})
);
