/* eslint-env es6 */
/* eslint no-unused-vars: 0 */

// global variables
var gameStage, root, lib, miner;
var elev, win, bank, minerMC;
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
	minerMC = root.miner_mc;
}

function initMiner() {
	miner = {
		"X": 785,
		"Y": 573,
		"stop": 0,
		"bank": 1000,
		"mc": 'minerMC',
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
	root.btnTurnLeft.on('click', function() { 
		minerMC.gotoAndPlay('turnLeft'); 
	});
	root.btnTurnRight.on('click', function() { 
		minerMC.gotoAndPlay('turnRight');  
	});
	root.btnTurnAround.on('click', function() { 
		if(miner.dir == 'left') {
			minerMC.gotoAndPlay('turnRight');
			miner.dir = 'right';
		} else {
			minerMC.gotoAndPlay('turnLeft');
			miner.dir = 'left';
		} 
	});
	
	root.btnWalkLeft.on('click', function() { 
//		minerWalking(305); 
		minerMC.gotoAndPlay(''); 
	});
	root.btnWalkRight.on('click', function() { 
//		minerWalking(785); 
		minerMC.gotoAndPlay(''); 
	});
	root.btnWalkTurn.on('click', function() {
		var mc = minerMC;
		var m = miner;
		
		if(miner.dir == 'left') {
			minerMC.gotoAndPlay('turnRight');
			miner.dir = 'right';
		} else {
			minerMC.gotoAndPlay('turnLeft');
			miner.dir = 'left';
		}
		
//		if(miner.X == 785) {
//			minerWalking(305);
//			minerTurnAround();
//		} else {
//			minerWalking(785);
//			minerTurnAround();
//		}
	});
}

function minerWalking(newX) {
	var dir, face;
	
	var mc = minerMC;
	var xd = miner.dir;
	var isLeft;
	if(miner.dir != 'left') { isLeft = false; }
	else isLeft = true;
	
	// walk direction
	if(miner.X > newX) { 
		if(miner.dir != 'left') { 
			minerTurnAround(); 
		} 
		dir = 'walkLeft';
		face = 'faceLeft';
	} else { 
		if(miner.dir != 'right') { 
			minerTurnAround(); 
		} 
		dir = 'walkRight';
		face = 'faceRight';
	}

	minerMC.gotoAndPlay(dir);
	createJS.Tween.get(minerMC).to({x: newX}, 4000).on('complete', function() { 
		minerMC.gotoAndStop(face); 
	});
	miner.X = newX;
}

function minerTurnAround() {
	var dir = '';
	
	if(miner.dir == 'left') { 
		miner.dir = 'right';
		dir = 'turnRight';
	} else { 
		miner.dir = 'left';
		dir = 'turnLeft';
	}
	minerMC.gotoAndPlay(dir);
//	sleep(1000);  // wait for miner to finish turning
	var b = 'break';
}

function sleep(ms) {
	const date = Date.now();
	var currentDate = null;
	do {
		currentDate = Date.now();
	} while(currentDate - date < ms);
}
