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
	animMiner.gotoAndPlay('walk');
	anim.town_mc.gotoAndPlay('door');
	
	// walk to elevator
	createjs.Tween.get(animMiner).to({x: miner.townOut.X, y: miner.townOut.Y}, 1200).on('complete', function() { 
		animMiner.gotoAndStop('stand'); 
		townElev.gotoAndPlay('openDoor');
		
		createjs.Tween.get(animMiner).wait(500).call(function() {
			animMiner.gotoAndPlay('walk');
			
			// enter elevator
			createjs.Tween.get(animMiner).to({x: miner.townIn.X-50, y: miner.townIn.Y}, 500).on('complete', function() {
				animMiner.gotoAndStop('stand');
				miner.setPosition(animMiner, 'townIn');
				townElev.gotoAndPlay('closeDoor');
				enableButtons('buttons');
				
				if(miner.bankTotal == 1000 && miner.goldPrice == 600) {
					setTimeout(function() { showMessage('Begin Mining!', 'begin', .1); }, 500);
				}
			});
		});
	});
}

/* exit elevator and enter bank */
function enterBank() {
	disableButtons('all');

	townElev.gotoAndPlay('openDoor');
	createjs.Tween.get(animMiner).wait(500).call(function() {
		// walk to end
		animMiner.gotoAndPlay('walk');
		townElev.gotoAndPlay('closeDoor');
		
		// open bank door
		createjs.Tween.get(animMiner).wait(1200).call(function() {
			anim.town_mc.gotoAndPlay('door');
		});
		
		// walk to bank
		createjs.Tween.get(animMiner).to({x: miner.bank.X+50, y: miner.bank.Y}, 2000).on('complete', function() {
			animMiner.gotoAndStop('stand');
			miner.setPosition(animMiner, 'bank');
			soundEffect('bankDeposit', 0, .5);
			
			// exit bank
			setTimeout(function() { 
				stopEffect(); 
				exitBank();
				
				// update bank
				var gold = miner.goldOz * miner.goldPrice;
				miner.bankTotal += gold;
				miner.goldOz = 0;
				goldPrice();
			}, 2500);
		});
	});
}

/* lower elevator from town and start elevator in shaft */
function exitTown() {
	// lower elevator
	soundEffect('elevator', -1, .5);
	createjs.Tween.get(townElev).wait(1000).to({y: elev.belowTown.Y}, 1000).on('complete', function() { 
		elev.setPosition(townElev, 'belowTown');
		elev.elevLevel = -1;
		stopButton = false;
		elevLevel('down');
	});
	
	// lower miner
	createjs.Tween.get(animMiner).wait(1000).to({y: 390}, 1000).on('complete', function() { 
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
		stopEffect();
		stopButton = false;
		soundEffect('ding', 0, .5);
		enableButtons('buttons');
	});
	
	// raise miner
	createjs.Tween.get(animMiner).to({y: miner.townIn.Y}, 1000).on('complete', function() {
		miner.setPosition(animMiner, 'townIn');
	});
}

/* raise or lower elevator into tunnel */
function arriveTunnel(dir) {
	disableButtons('all'); 
	var elevY = elev.inTunnel.Y;
	var minerY = miner.tunnelIn.Y;

	// move miner into tunnel elevator
	if(dir == 'down') { 
		miner.setPosition(animMiner, 'tunnelAbove'); 
		elev.setPosition(tunnelElev, 'aboveTunnel');
	} else { 
		miner.setPosition(animMiner, 'tunnelBelow'); 
		elev.setPosition(tunnelElev, 'belowTunnel');
	}

	// move elevator
	createjs.Tween.get(tunnelElev).to({y: elevY}, 1000).on('complete', function() { 
		elev.setPosition(tunnelElev, 'inTunnel');
		stopEffect();
		stopButton = false;
		soundEffect('ding', 0, .5);
		enableButtons('buttons');
	});
	
	// move miner
	createjs.Tween.get(animMiner).to({y: minerY}, 1000).on('complete', function() {
		miner.setPosition(animMiner, 'tunnelIn');
	});
	
	// debugging
	enableButtons('buttons');
	stopButton = false;
	elev.setPosition(tunnelElev, 'inTunnel');
	miner.setPosition(animMiner, 'tunnelIn');

}

/* raise or lower elevator out of tunnel */
function exitTunnel(dir) {
	disableButtons('all');
	var elevY, minerY, elevP, minerP;
	soundEffect('elevator', -1, .5); 

	if(dir == 'down') { 
		elevY = elev.belowTunnel.Y; 
		minerY = miner.tunnelBelow.Y; 
		elevP = 'belowTunnel';
		minerP = 'tunnelBelow';
	} else { 
		elevY = elev.aboveTunnel.Y; 
		minerY = miner.tunnelAbove.Y; 
		elevP = 'aboveTunnel';
		minerP = 'tunnelAbove';
	}

	// move elevator
	createjs.Tween.get(tunnelElev).wait(1000).to({y: elevY}, 1000).on('complete', function() { 
		elev.setPosition(tunnelElev, elevP);
		stopButton = false;
		enableButtons('buttons');
		elevLevel(dir);
	});
	
	// move miner
	createjs.Tween.get(animMiner).wait(1000).to({y: minerY }, 1000).on('complete', function() {
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
	} else if(dir == 'up' && elev.elevLevel == 0) {
		// at the top
		miner.elevDir = '';
		miner.piece = miner.shaftPiece[elev.elevLevel];
		arriveTown(dir);
	} else {
		// next level
		if(dir == 'down') { elev.elevLevel++; }
		if(dir == 'up')   { elev.elevLevel--; }
		var level = elev.elevLevel;
		var elevY = elev.elevY[elev.elevLevel];
		if(level %2 == 0) { soundEffect('ping', 0, .5); }

		// move elevator
		createjs.Tween.get(boardElev).to({y: elevY}, 1000).on('complete', function() { 
			// if the clicked button matches the current direction start the next loop
			if(cButton == dir) { elevLevel(dir); } 
		});
		
		// move miner
		createjs.Tween.get(boardMiner).to({y: elevY }, 1000);
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
			setSelected('pickaxe');
			moveInMine('left');
		});
	});
}

function enterTunnelElevator(piece, btn) {
	disableButtons('all');
	animMiner.scaleX = -1;
	animMiner.gotoAndPlay('walk');
	createjs.Tween.get(animMiner).to({x: miner.tunnelOut.X, y: miner.tunnelOut.Y}, 3000).on('complete', function() {
		animMiner.gotoAndStop('stand');
		tunnelElev.gotoAndPlay('openDoor');
		
		// enter elevator
		createjs.Tween.get(animMiner).wait(500).call(function() {
			animMiner.gotoAndPlay('walk');
			createjs.Tween.get(animMiner).to({x: miner.tunnelIn.X-50, y: miner.tunnelIn.Y}, 500).on('complete', function() {
				animMiner.gotoAndStop('stand');
				miner.setPosition(animMiner, 'tunnelIn');
				tunnelElev.gotoAndPlay('closeDoor');
				enableButtons('buttons');
				movePiece(piece, btn);
			});
		});
	});
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
		miner.bankTotal -= 5;
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
		setSelected('pickaxe');
		miner.bankTotal -= 35;
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
				if(piece.type == 'water') { piece.setType('dug'); }
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
				miner.bankTotal -= 25;
				goldPrice();
		
				if(piece.type == 'action') { checkAction(piece, btn); }
				else {
					piece.setType('dug');
					movePiece(piece, btn);
				}
			}, 2000);
		});
	});
}

function playDynamite(piece, btn) {
	disableButtons('all');
	anim.gotoAndPlay('plunge');
	showMessage('Stand clear - dangerous explosion!', 'explosion', vol=.5)
	setTimeout(function() { stopEffect(); }, 2200); 

	// walk to end
	createjs.Tween.get(animMiner).wait(3000).call(function() {
		animMiner.gotoAndPlay('walk');
		createjs.Tween.get(animMiner).to({x: miner.tunnelEnd.X, y: miner.tunnelEnd.Y}, 3000).on('complete', function() {
			animMiner.gotoAndStop('stand');
			miner.setPosition(animMiner, 'tunnelEnd');
			setSelected('pickaxe');
			
			setTimeout(function() { 
				// cave in other pieces
				var aPieces = [];
				var id = parseInt(piece.ID.slice(-5));
				for(var r=-2; r<3; r++) {
					for(var c=1; c< 5; c++) {
						var newID = id + (r * 40) - random(4) - c;
						var newPID = 'p' + newID;
						var newPiece = getPiece(newPID);
						if(newPiece) {
							if(newPiece.type == 'start' || newPiece.type == 'cavein' || newPiece.type == 'rock') { aPieces.push(newPID); }
						}
					}
				}
				
				dynamitePiece(aPieces, aPieces.length - 1);

				// move piece
				if(piece.type == 'action') { checkAction(piece, btn) ; }
				else {
					piece.setType('dug');
					movePiece(piece, btn);
					enableButtons('all');
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
			var newPiece = getPiece(piece.idRight);

			setTimeout(function() { 
				// cave in other pieces
				var aPieces = [];
				for(var r=-1; r<2; r++) {
					var row = random(3) + 40 * r;
					for(var c=-2; c<3; c++) {
						var id = parseInt(piece.ID.slice(-5));
						var newID = id - c + row;
						var newPID = 'p' + newID;
						if(newPID != newPiece.ID) { aPieces.push(newPID); }
					}
				}
				
				caveInPiece(aPieces, aPieces.length - 1);

				// move piece
				piece.setType('cavein');
				newPiece.setType('dug');
				movePiece(newPiece, btn);
				miner.bankTotal -= parseInt(random(50) * miner.bankTotal / 100);
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
				if(bp.ID > idNo && ['dug', 'gold'].includes(bp.type) && flooded < 41) {
					aPieces.push(bp.ID);
					flooded++;
				}
			});
			
			if(aPieces.length > 0) {
				floodPieces(aPieces, 0, piece, btn);
			} else {
				setTimeout(function() { playPump(piece, btn); }, 1000);
			}
			
			miner.bankTotal -= 75;
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

function dynamitePiece(aPieces, loop) {
	setTimeout(function() {
		var cPiece = getPiece(aPieces[loop]);
		soundEffect('radar', 0, 0.5);
		cPiece.setType('dug');
		if(loop > 0) { dynamitePiece(aPieces, loop - 1); }
	}, 200);
}

function floodPieces(aPieces, loop, piece, btn) {
	setTimeout(function() {
		var wPiece = getPiece(aPieces[loop]);
		soundEffect('radar', 0, 0.5);
		wPiece.setType('water');
		if(loop < aPieces.length - 1) { floodPieces(aPieces, loop + 1, piece, btn); }
		else { 
			setTimeout(function() { playPump(piece, btn); }, 1000);
		}
	}, 200);
}

function gameWon() {
	soundEffect('gold', 0, 0.5);
	exportRoot.gotoAndStop('won');
}

function gameLost() {
	soundEffect('error', 0, 0.5);
	exportRoot.gotoAndStop('lost');
}
