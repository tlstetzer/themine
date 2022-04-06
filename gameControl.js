/* eslint-env es6 */
/* eslint no-unused-vars: 0 */

// global variables
var gameStage, root, lib, miner;
var elev, win, bank, minerWalk;
var createJS = this.createjs;

function gameInit(stage, exportRoot, compLib) {
	// adobe globals
	gameStage = stage;
	root = exportRoot; 
	lib = compLib;

	// call functions
	initMovieClips();
	eventHandlers();
	initMiner();
}

function initMovieClips() {
	// elevator
	win = root.elevatorWindow_mc;
	elev = root.elevator_mc;
	elev.loc = 'town';
	
	// town
	bank = root.town_mc;
	
	// miner
	minerWalk = root.miner_walking_mc;
}

function initMiner() {
	miner = {
		"X": 830,
		"Y": 675,
		"bank": 1000,
		"mc": 'minerWalk',
		"dir": 'left',
		"loc": 'tunnel',
		"tool": 'none'
	};
}

function eventHandlers() {
	// bank
	root.btnBankOpen.on('click', function() { bank.gotoAndPlay('openDoor'); });
	root.btnBankClose.on('click', function() { bank.gotoAndPlay('closeDoor'); });

	// elevator
	root.btnElevOpen.on('click', function() { elev.gotoAndPlay('openDoor'); });
	root.btnElevClose.on('click', function() { elev.gotoAndPlay('closeDoor'); });
	root.btnElevDown.on('click', function() {  
		elev.gotoAndPlay('elevDown'); 
		win.gotoAndPlay('windowDown'); 
	});
	root.btnElevUp.on('click', function() { 
		elev.gotoAndPlay('elevUp'); 
		win.gotoAndPlay('windowUp'); 
	});
	
	//miner
	root.btnWalkLeft.on('click', function() { minerWalking(315); });
}

function minerWalking(newX) {
	var dir;
	var temp = minerWalk;
	
	// left or right of current position
	if(miner.X > newX) { dir = 'left'; }
	else { dir = 'right'; }
	
	minerWalk.gotoAndPlay('walk');
	createJS.Tween.get(minerWalk).to({x: newX}, 2000).on('complete', function() { minerWalk.gotoAndStop(0); });
}
