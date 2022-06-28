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
	// debugging
	miner.setPosition(animMiner, 'townIn'); 	
	animMiner.gotoAndStop('stand');
	enableButtons('buttons');

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
/*	
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
*/	
	// debugging
	enableButtons('buttons');
	stopButton = false;
	elev.setPosition(townElev, 'inTunnel');
	miner.setPosition(animMiner, 'tunnelIn');

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
		miner.piece = miner.shaftPiece[elev.elevLevel];
		arriveTunnel(dir);
	} else if(dir == 'down' && elev.elevLevel == 18) {
		// at the bottom
		miner.elevDir = '';
		miner.piece = miner.shaftPiece[elev.elevLevel];
		arriveTunnel(dir);
	} else if(dir == 'up' && elev.elevLevel < 0) {
		// at the top
		miner.elevDir = '';
		miner.piece = miner.shaftPiece[elev.elevLevel];
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
			// if the clicked button matches the current direction start the next loop
			if(cButton == dir) { elevLevel(dir); } 
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
/*	
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
			setSelected('pickaxe');
			moveInMine('left');
		});
	});
*/
	// debugging
	boardElev.elevLevel = 1;
	boardElev.y = elev.elevY[1];
	boardMiner.y = elev.elevY[1];
	miner.setPosition(animMiner, 'tunnelEnd');
	miner.piece = getByLevel(1);
	enableButtons('all');
	setSelected('pickaxe');

}

function setTool(btn) {
	// reset background
	var x = animMiner.x;
	var y = animMiner.y;
	var s = animMiner.scaleX;
	anim.gotoAndStop('left');
	animMiner.x = x;
	animMiner.y = y;
	animMiner.scaleX = s;
	miner.oldTool = miner.tool;
	
	if(btn == 'pickaxe') { 
		animMiner.gotoAndStop('pickaxe'); 
		miner.setPosition(animMiner, 'tunnelEnd');
		miner.tool = 'pickaxe'; 
	} else if(btn == 'pump') { 
		anim.gotoAndStop('pump'); 
		miner.pos = 'pumpPos';
		miner.tool = 'pump'; 
	} else if(btn == 'jackhammer') { 
		animMiner.gotoAndStop('jackhammer'); 
		miner.setPosition(animMiner, 'tunnelEnd');
		miner.tool = 'jackhammer'; 
	} else if(btn == 'dynamite') { 
		anim.gotoAndStop('dynamite'); 
		miner.pos = 'dynamitePos';
		miner.tool = 'dynamite'; 
	}
}

function playPickaxe(piece, btn) {
	disableButtons('all');
	animMiner.gotoAndPlay('raisePickaxe');
	setTimeout(function() { soundEffect('pickaxe', 0, .2); }, 800);
	setTimeout(function() { soundEffect('pickaxe', 0, .2); }, 1400);
	setTimeout(function() { soundEffect('pickaxe', 0, .2); }, 1900);
	
	// move piece
	setTimeout(function() { 
		enableButtons('all');
		animMiner.gotoAndStop('pickaxe');
		miner.bank -= 5;
		goldPrice();
		
		if(piece.type == 'action') { checkAction(piece, btn) ; }
		else {
			piece.setType('dug');
			movePiece(piece, btn);
		}
	}, 2500);
}

function playJackhammer(piece, btn) {
	disableButtons('all');
	animMiner.gotoAndPlay('drill');
	soundEffect('jackhammer', 0, .2);
	setTimeout(function() { stopEffect(); }, 1500);
	
	// move piece
	setTimeout(function() { 
		enableButtons('all');
		animMiner.gotoAndStop('jackhammer');
		miner.bank -= 35;
		goldPrice();
		
		if(piece.type == 'action') { checkAction(piece, btn) ; }
		else {
			piece.setType('dug');
			movePiece(piece, btn);
		}
	}, 2000);
}

function playPump(piece, btn) {
	disableButtons('all');
	
	animMiner.gotoAndPlay('turnOn');
	createjs.Tween.get(anim).wait(1100).call(function() {
		animMiner.gotoAndStop('stand');
		soundEffect('pump', 0, .2);
		animMiner.gotoAndPlay('pumpRunning');
		
		// lower water
		createjs.Tween.get(anim.water_mc).wait(500).to({y: 300}, 3000).on('complete', function() {
			animMiner.gotoAndPlay('turnOn');
			createjs.Tween.get(anim).wait(600).call(function() { 
				stopEffect(); 
				animMiner.gotoAndPlay('fadeOut');
			});
		});
	});

	// walk to end
	createjs.Tween.get(animMiner).wait(6500).call(function() {
		animMiner.gotoAndPlay('walk');
		createjs.Tween.get(animMiner).to({x: miner.tunnelEnd.X, y: miner.tunnelEnd.Y}, 3000).on('complete', function() {
			animMiner.gotoAndStop('stand');
			miner.setPosition(animMiner, 'tunnelEnd');
			setSelected('pickaxe');
	
			// move piece
			setTimeout(function() { 
				enableButtons('all');
				miner.bank -= 25;
				goldPrice();
		
				if(piece.type == 'action') { checkAction(piece, btn) ; }
				else {
					piece.setType('dug');
					movePiece(piece, btn);
				}
			}, 1000);
		});
	});
}

function playDynamite(piece, btn) {
	disableButtons('all');
	anim.gotoAndPlay('plunge');
	soundEffect('explosion', 0, .2);
	setTimeout(function() { stopEffect(); }, 2200);

	// walk to end
	createjs.Tween.get(animMiner).wait(3000).call(function() {
		animMiner.gotoAndPlay('walk');
		createjs.Tween.get(animMiner).to({x: miner.tunnelEnd.X, y: miner.tunnelEnd.Y}, 3000).on('complete', function() {
			animMiner.gotoAndStop('stand');
			miner.setPosition(animMiner, 'tunnelEnd');
			setSelected('pickaxe');
	
			// move piece
			setTimeout(function() { 
				enableButtons('all');
				miner.bank -= 80;
				goldPrice();
		
				if(piece.type == 'action') { checkAction(piece, btn) ; }
				else {
					piece.setType('dug');
					movePiece(piece, btn);
				}
			}, 1000);
		});
	});
}

function fallDownHole(piece, btn) {
	setTool('');
	disableButtons('all');
	anim.gotoAndPlay('hole');
	showMessage("Watch out - unstable footing!", 'fall', vol=.5);
	
	// falling out of tunnel
	createjs.Tween.get(animMiner).wait(3000).call(function() {
		animMiner.gotoAndStop('stand');
		miner.setPosition(animMiner, 'tunnelEnd');
		setSelected('pickaxe');

		// move piece
		setTimeout(function() { 
			enableButtons('all');
			var newPiece = getPiece(piece.idDown); 
			piece.setType('hole');
			newPiece.setType('dug');
			movePiece(newPiece, btn);
			goldPrice();
		}, 1000);
	});
}

function playCaveIn(piece, btn) {
	var lostGold = false;
	if(random(4) == 3 && miner.goldOz > 0) { lostGold = true; }
	if(lostGold == true) { 
		showMessage("Cave In - lost all of your gold!", 'cavein', vol=.5); 
		miner.goldOz = 0;
	}
	else { showMessage("Watch out - cave in!", 'cavein', vol=.5); }
	
	setTool('');
	disableButtons('all');
	anim.gotoAndPlay('caveIn');

	createjs.Tween.get(animMiner).wait(2200).call(function() {
		stopEffect();
		animMiner.gotoAndPlay('walk');

		// walk to end
		createjs.Tween.get(animMiner).to({x: miner.tunnelEnd.X, y: miner.tunnelEnd.Y}, 3000).on('complete', function() {
			animMiner.gotoAndStop('stand');
			miner.setPosition(animMiner, 'tunnelEnd');
			setSelected('pickaxe');
			enableButtons('all');

			setTimeout(function() { 
				// cave in other pieces
				var aPieces = [];
				for(var r=-1; r<2; r++) {
					var row = random(3) + 40 * r;
					for(var c=-2; c<3; c++) {
						var id = piece.ID.slice(-5);
						var newID = id - c + row;
						aPieces.push('p' + newID);
					}
				}
				
				caveInPiece(aPieces, 14);

				// move piece
				var newPiece = getPiece(piece.idRight);
				piece.setType('cavein');
				newPiece.setType('dug');
				movePiece(newPiece, btn);
				miner.bank -= parseInt(random(50) * miner.bank / 100);
				goldPrice();
			}, 1000);
		});
	});
}

function playSpring(piece, btn) {
	setTool('');
	disableButtons('all');
	anim.gotoAndPlay('spring');
	showMessage("Underground Spring - mine is flooding!", 'water', vol=.5);
	
	createjs.Tween.get(animMiner).wait(3000).call(function() {
		animMiner.gotoAndStop('stand');
		stopEffect();
		
		setTimeout(function() {
			// flood mine
			var aPieces = [];
			var flooded = 0;
			var idNo = 'p' + piece.ID.slice(-5);
			piece.setType('water');
			movePiece(piece, btn);
			
			aBoard.forEach(function(bp) {
				if(bp.ID > idNo && bp.type == 'dug' && flooded < 41) {
					aPieces.push(bp.ID);
					flooded++;
				}
			});
			
			if(aPieces.length > 0) {
				floodPieces(aPieces, 0, piece, btn);
			} else {
				setTimeout(function() { playPump(piece, btn); }, 1000);
			}
			
			miner.bank -= 75;
			goldPrice();
		}, 1000);
	});
}

function caveInPiece(aPieces, loop) {
	setTimeout(function() {
		var cPiece = getPiece(aPieces[loop]);
		if(['action', 'dug', 'water'].includes(cPiece.type)) {
			soundEffect('radar', 0, 0.5);
			cPiece.setType('start');
		}
		if(loop > 0) { caveInPiece(aPieces, loop - 1); }
	}, 200);
}

function floodPieces(aPieces, loop, piece, btn) {
	setTimeout(function() {
		var wPiece = getPiece(aPieces[loop]);
		soundEffect('radar', 0, 0.5);
		wPiece.setType('water');
		if(loop < aPieces.length) { floodPieces(aPieces, loop + 1, piece, btn); }
		else { 
			setTimeout(function() { playPump(piece, btn); }, 1000);
		}
	}, 200);
}
