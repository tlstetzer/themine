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
	createjs.Tween.get(anim.elev_town_mc).to({y: -500}, 1000).on('complete', function() { 
		positionSymbol(bElev, 446, -150);
		miner.elevLevel = 0;
		stopButton = false;
		elevLevel('down');
	});
	createjs.Tween.get(aMiner).to({y: -200}, 1000).on('complete', function() { 
		positionSymbol(bMiner, 439, -167);
	});
}

function elevLevel(dir) {
	if(miner.elevLevel < 19 && stopButton == false) {
		var newY = bElev.y;
		if(dir == 'down') { newY = bElev.y + 27; miner.elevLevel++; }
		if(dir == 'up') { newY = bElev.y - 27; miner.elevLevel--; }

		createjs.Tween.get(bElev).to({y: newY}, 1000).on('complete', function() { 
			elevLevel(dir);
		});
	}
}

function positionSymbol(symbol, x, y) {
	symbol.x = x;
	symbol.y = y;
}
