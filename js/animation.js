/* eslint no-unused-vars: 0 no-undef: 0*/

var anim, animMiner, boardMiner, boardElev, townElev, tunnelElev;

function animationInit() {
	// symbols
	anim = exportRoot.animation_mc;
	animMiner = anim.miner_mc;
	boardMiner = exportRoot.mineBoard_mc.boardMiner_mc;
	boardElev = exportRoot.mineBoard_mc.boardElev_mc;
	townElev = anim.elev_town_mc;
	tunnelElev = anim.elev_tunnel_mc;
	
	// miner start locations
	miner.setPosition(animMiner, 'bank');
	miner.setPosition(boardMiner, 'elevAboveShaft');
	
	// elevator start locations
	elev.setPosition(townElev, 'inTown');
	elev.setPosition(tunnelElev, 'aboveTunnel');
	elev.setPosition(boardElev, 'aboveShaft');
}

/* exit bank and enter elevator */
function exitBank() {
	miner.setPosition(animMiner, 'townIn'); 	// debugging
	animMiner.gotoAndStop('stand');				// debugging
	enableButtons('buttons');					// debugging
/*
	animMiner.gotoAndPlay('walk');
	anim.town_mc.gotoAndPlay('door');
	
	// walk to elevator
	createjs.Tween.get(animMiner).to({x: miner.townOut.X, y: miner.townOut.Y}, 1200).on('complete', function() { 
		animMiner.gotoAndStop('stand'); 
		townElev.gotoAndPlay('openDoor');
		
		createjs.Tween.get(animMiner).wait(500).call(function() {
			animMiner.gotoAndPlay('walk');
			
			// enter elevator
			createjs.Tween.get(animMiner).to({x: miner.townIn.X, y: miner.townIn.Y}, 500).on('complete', function() {
				animMiner.gotoAndStop('stand');
				miner.setPosition(animMiner, 'townIn');
				townElev.gotoAndPlay('closeDoor');
				enableButtons('buttons');
			});
		});
	});
*/
}

/* lower elevator from town and start elevator in shaft */
function exitTown() {
	// lower elevator
	createjs.Tween.get(townElev).to({y: elev.belowTown.Y}, 1000).on('complete', function() { 
		elev.setPosition(townElev, 'belowTown');
		elev.elevLevel = -1;
		stopButton = false;
		elevLevel('down');
	});
	
	// lower miner
	createjs.Tween.get(animMiner).to({y: 390}, 1000).on('complete', function() { 
		miner.setPosition(animMiner, 'townBelow');
	});
}

/* raise elevator to town */
function arriveTown() {
	disableButtons('all');
	miner.setPosition(animMiner, 'townBelow');  // move miner into town elevator
	
	// raise elevator
	createjs.Tween.get(townElev).to({y: elev.inTown.Y}, 1000).on('complete', function() { 
		elev.elevLevel = 0;
		stopButton = false;
		enableButtons('buttons');
	});
	
	// raise miner
	createjs.Tween.get(animMiner).to({y: miner.inTown.Y}, 1000).on('complete', function() {
		miner.setPosition(animMiner, 'townIn');
	});
}

/* raise or lower elevator into tunnel */
function arriveTunnel(dir) {
	disableButtons('all'); 
	var elevY = elev.inTunnel.Y;
	var minerY = miner.tunnelIn.Y;
	
	// move miner into tunnel elevator
	if(dir == 'down') { miner.setPosition(animMiner, 'tunnelAbove'); } 
	else { miner.setPosition(animMiner, 'tunnelBelow'); }
	
	// move elevator
	createjs.Tween.get(tunnelElev).to({y: elevY}, 1000).on('complete', function() { 
		elev.setPosition(townElev, 'inTunnel');
		stopButton = false;
		enableButtons('buttons');
	});
	
	// move miner
	createjs.Tween.get(animMiner).to({y: minerY}, 1000).on('complete', function() {
		miner.setPosition(animMiner, 'tunnelIn');
	});
}


/* raise or lower elevator out of tunnel */
function exitTunnel(dir) {
	disableButtons('all');
	var elevY, minerY, elevP, minerP;
	
	if(dir == 'up') { 
		elevY = elev.aboveTunnel.Y; 
		minerY = miner.tunnelAbove.Y; 
		elevP = 'aboveTunnel';
		minerP = 'tunnelAbove';
	} else { 
		elevY = elev.belowTunnel.Y; 
		minerY = miner.tunnelBelow.Y; 
		elevP = 'belowTunnel';
		minerP = 'tunnelBelow';
	}
	
	// move elevator
	createjs.Tween.get(tunnelElev).to({y: elevY}, 1000).on('complete', function() { 
		elev.setPosition(townElev, elevP);
		stopButton = false;
		enableButtons('buttons');
		elevLevel(dir);
	});
	
	// move miner
	createjs.Tween.get(animMiner).to({y: minerY }, 1000).on('complete', function() {
		miner.setPosition(animMiner, minerP);
	});
}

/* move elevator in shaft */
function elevLevel(dir) {
	if(stopButton == true) {
		// stop clicked
		miner.elevDir = '';
		arriveTunnel(dir);
	} else if(dir == 'down' && elev.elevLevel == 18) {
		// at the bottom
		miner.elevDir = '';
		arriveTunnel(dir);
	} else if(dir == 'up' && elev.elevLevel < 0) {
		// at the top
		miner.elevDir = '';
		arriveTown(dir);
	} else {
		// next level
		var eStartY = boardElev.y;			// debugging
		var mStartY = boardMiner.y;			// debugging
		if(dir == 'down') { elev.elevLevel++; }
		if(dir == 'up')   { elev.elevLevel--; }
		var level = elev.elevLevel;
		var elevY = elev.elevY[level];
		
		var elevatorY = boardElev.y;		// debugging
		var minerY = boardMiner.y;			// debugging

		// move elevator
		createjs.Tween.get(boardElev).to({y: elevY}, 1000).on('complete', function() { 
			if(cButton == dir) { elevLevel(dir); } // keep moving in the same direction otherwise stop the loop for this direction
			gBoard.info_text.text = 'Level ' + elev.elevLevel + ' (' + elevatorY + ', ' + minerY +')'; 	// debugging
		});
		
		// move miner
		createjs.Tween.get(boardMiner).to({y: elevY }, 1000).on('complete', function() { 
			var nmY = boardMiner.y; 	// debugging
			var d = 'debugging';
		});
	}
}

/* exit elevator in tunnel */
function exitElevator() {
	disableButtons('all');
	tunnelElev.gotoAndPlay('openDoor');
	createjs.Tween.get(animMiner).wait(500).call(function() {
		// walk to end
		animMiner.gotoAndPlay('walk');
		tunnelElev.gotoAndPlay('closeDoor');
		createjs.Tween.get(animMiner).to({x: miner.tunnelEnd.X, y: miner.tunnelEnd.Y}, 3000).on('complete', function() {
			animMiner.gotoAndStop('stand');
			miner.setPosition(animMiner, 'tunnelEnd');
			miner.piece = getByLevel(elev.elevLevel);
			enableButtons('all');
			setSelected('', 'pickaxe');
			
			// check board piece
		});
	});
}

function moveMiner(nPiece) {
	miner.piece = nPiece.ID;
}

function setTool(btn) {
	if(btn == 'pickaxe') { 
		animMiner.gotoAndStop('pickaxe'); 
		miner.setPosition(animMiner, 'tunnelEnd');
		miner.tool = 'pickaxe'; 
	} else if(btn == 'pump') { 
		animMiner.gotoAndStop('pump'); 
		miner.setPosition(animMiner, 'pumpPos');
		miner.tool = 'pump'; 
	} else if(btn == 'jackhammer') { 
		animMiner.gotoAndStop('jackhammer'); 
		miner.setPosition(animMiner, 'tunnelEnd');
		miner.tool = 'jackhammer'; 
	} else if(btn == 'dynamite') { 
		animMiner.gotoAndStop('dynamite'); 
		miner.setPosition(animMiner, 'dynamitePos');
		miner.tool = 'dynamite'; 
	}
}
