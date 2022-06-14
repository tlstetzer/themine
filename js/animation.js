/* eslint no-unused-vars: 0 no-undef: 0*/

var anim, aMiner, bMiner, bElev;

function animationInit() {
	anim = exportRoot.animation_mc;
	aMiner = anim.miner_mc;
	bMiner = exportRoot.mineBoard_mc.boardMiner_mc;
	bElev = exportRoot.mineBoard_mc.boardElev_mc;
	aMiner.scaleX = -1;
	positionSymbol(aMiner, 1350, 170);
}

function exitBank(callback='') {
	miner.setPosition(aMiner, 'elevTown');
	miner.pos = 'elevTown';
	enableButtons();
/*
	miner.setPosition(aMiner, 'bank');
	aMiner.gotoAndPlay('walk');
	anim.town_mc.gotoAndPlay('door');
	createjs.Tween.get(aMiner).to({x: 1660, y: 180}, 1200).on('complete', function() { 
		aMiner.gotoAndPlay('stand'); 
		anim.elev_town_mc.gotoAndPlay('openDoor');
		createjs.Tween.get(aMiner).wait(500).call(function() {
			aMiner.gotoAndPlay('walk');
			createjs.Tween.get(aMiner).to({x: 1760, y: 183}, 500).on('complete', function() {
				// all done
				aMiner.gotoAndStop('stand');
				miner.setPosition(aMiner, 'elevTown');
				anim.elev_town_mc.gotoAndPlay('closeDoor');
				if(callback) { callback(); }
			});
		});
	});
*/
}

function exitTown() {
	createjs.Tween.get(anim.elev_town_mc).to({y: 120}, 1000).on('complete', function() { 
		positionSymbol(bElev, 446, -188);
		positionSymbol(bMiner, 448, -165);
		miner.pos = 'elev';
		miner.elevLevel = -1;
		stopButton = false;
		elevLevel('down');
	});
	createjs.Tween.get(aMiner).to({y: 390}, 1000).on('complete', function() { 
		positionSymbol(bMiner, 439, -167);
	});
}

function arriveTown() {
	disableButtons();
	bElev.y = -200;
	anim.elev_town_mc.y = 120;
	positionSymbol(aMiner, 1800, 390);
	createjs.Tween.get(anim.elev_town_mc).to({y: -103}, 1000).on('complete', function() { 
		miner.pos = 'elevTown';
		miner.elevLevel = 0;
		stopButton = false;
		enableButtons();
	});
	createjs.Tween.get(aMiner).to({y: 183}, 1000);
}

function arriveTunnel(dir) {
	disableButtons();
	elevY = -120; 
	minerY = 170; 
	
	if(dir == 'up') { 
		// come up from below	
		positionSymbol(anim.elev_tunnel_mc, 918, 130);
		positionSymbol(aMiner, 938, 430);
	}
	else { 	
		// come down from above
		positionSymbol(anim.elev_tunnel_mc, 918, -382);
		positionSymbol(aMiner, 938, -115);
	}
	
	// move
	createjs.Tween.get(anim.elev_tunnel_mc).to({y: elevY}, 1000).on('complete', function() { 
		miner.pos = 'elevTunnel';
		stopButton = false;
		enableButtons();
	});
	createjs.Tween.get(aMiner).to({y: minerY}, 1000);
}

function exitTunnel(dir) {
	disableButtons();
	positionSymbol(anim.elev_tunnel_mc, 918, -120);
	positionSymbol(aMiner, 938, 170);
	var elevY, minerY;
	
	if(dir == 'up') { elevY = -382, minerY = -115; }
	else { elevY = 130, minerY = 430; }
	
	createjs.Tween.get(anim.elev_tunnel_mc).to({y: elevY}, 1000).on('complete', function() { 
		miner.pos = 'elev';
		stopButton = false;
		enableButtons();
		elevLevel(dir);
	});
	createjs.Tween.get(aMiner).to({y: minerY }, 1000);
}

function elevLevel(dir) {
	if(stopButton == true) {
		// stop clicked
		miner.elevDir = '';
		arriveTunnel(dir);
	} else if(dir == 'down' && miner.elevLevel == 18) {
		// at the bottom
		miner.elevDir = '';
		arriveTunnel(dir);
	} else if(dir == 'up' && miner.elevLevel < 0) {
		// at the top
		miner.elevDir = '';
		arriveTown(dir);
	} else {
		// move elevator
		if(dir == 'down') { miner.elevLevel++; }
		if(dir == 'up')   { miner.elevLevel--; }
		var level = miner.elevLevel;
		var elevY = miner.elevY[level];

		createjs.Tween.get(bElev).to({y: elevY}, 1000).on('complete', function() { 
//			if(miner.elevLevel != 6) { elevLevel(dir); }
			if(cButton == dir) { elevLevel(dir); }
			gBoard.info_text.text = 'Level ' + miner.elevLevel + ' (' + bElev.y +')';
		});
		createjs.Tween.get(bMiner).to({y: elevY }, 1000);
	}
}

function positionSymbol(symbol, x, y) {
	symbol.x = x;
	symbol.y = y;
}
