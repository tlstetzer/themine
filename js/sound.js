/* eslint no-unused-vars: 0 no-undef: 0*/

function soundInit() {
	var audioPath = 'audio/';
	// elevator sound
	// door sound
	var sounds = [
		{ id: 'bankDeposit', src: 'bankDeposit.mp3' },
		{ id: 'begin', src: 'begin.mp3' },
		{ id: 'cavein', src: 'cavein.mp3' },
		{ id: 'ding', src: 'ding.mp3' },
		{ id: 'elevator', src: 'elevator.mp3' },
		{ id: 'error', src: 'error.mp3' },
		{ id: 'fall', src: 'fall.mp3' },
		{ id: 'explosion', src: 'explosion.mp3' },
		{ id: 'gold', src: 'yeehaw.mp3' },
		{ id: 'jackhammer', src: 'jackhammer.mp3' },
		{ id: 'pickaxe', src: 'pickaxe.wav' },
		{ id: 'ping', src: 'ping.mp3' },
		{ id: 'pump', src: 'pump.mp3' },
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

function stopEffect() {
	createjs.Sound.stop();
}

function showMessage(msg, id, vol=.5) {
	if(id != '') { soundEffect(id, 0, vol); }
	gBoard.info_text.text = msg;
}
