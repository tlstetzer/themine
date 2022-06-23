/* eslint no-unused-vars: 0 no-undef: 0*/

function soundInit() {
	var audioPath = 'audio/';
	var sounds = [
		{ id: 'cavein', src: 'cavein.mp3' },
		{ id: 'explosion', src: 'explosion.mp3' },
		{ id: 'jackhammer', src: 'jackhammer.mp3' },
		{ id: 'radar', src: 'Windows Information Bar.wav' },
		{ id: 'water', src: 'water.mp3' }
	];
	
	createjs.Sound.registerPlugins([createjs.HTMLAudioPlugin]);
	createjs.Sound.registerSounds(sounds, audioPath);
}

function soundEffect(id, loop, vol) {
	var props = { loop: loop, volume: vol };
	createjs.Sound.play(id, props);
}

function stopEffect(id) {
	createjs.Sound.stop();
}