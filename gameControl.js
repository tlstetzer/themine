/* eslint-env es6 */
/* eslint no-unused-vars: 0 */

// global variables
var gameStage, root, lib, miner;
var elev, win, bank, minerWalk;

function gameInit(stage, exportRoot, compLib) {
	// adobe globals
	gameStage = stage;
	root = exportRoot; 
	lib = compLib;

	// call functions
	initMovieClips();
	eventHandlers();
}

function initMovieClips() {
	// elevator
	win = root.elevatorWindow_mc;
	elev = root.elevator_mc;
	elev.loc = 'town';
	
	// town
	bank = root.town_mc;
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
}
