/* global root, createjs, miner, bank, elev */
/* eslint no-unused-vars: 0 */

// JavaScript Document
class MinerClass {
	constructor() {
		this.miner = root.miner_mc;
		this.tool = 'none';
		this.dir = 'right';
		this.loc = 'bank';
	}

	turn(direction) {
		if(direction === 'left') {
			this.miner.gotoAndPlay('turnLeft');
		} else {
			this.miner.gotoAndPlay('turnRight');
		}
		this.dir = direction;
	}
	
	turnAround() {
		if(this.dir === 'left') {
			this.turn('right');
		} else {
			this.turn('left');
		} 
	}
	
	walk(direction, loc) {
		if(direction === 'left') {
			this.miner.gotoAndPlay('walkLeft');
			createjs.Tween.get(this.miner).to({x: loc}, 4000).on('complete', function() { 
				this.target.gotoAndStop('faceLeft'); 
			});
		} else {
			this.miner.gotoAndPlay('walkRight');
			createjs.Tween.get(this.miner).to({x: loc}, 4000).on('complete', function() { 
				this.target.gotoAndStop('faceRight'); 
			});
		}
	}
	
	turnAndWalk(newLoc, newX) {
		if(this.dir === 'left') {
			this.miner.gotoAndPlay('turnRightWalk');
			createjs.Tween.get(this.miner).wait(500).to({x: newX}, 4000).on('complete', function() { this.target.gotoAndStop('faceRight'); });
			this.dir = 'right';
		} else {
			this.miner.gotoAndPlay('turnLeftWalk');
			createjs.Tween.get(this.miner).wait(500).to({x: newX}, 4000).on('complete', function() { this.target.gotoAndStop('faceLeft'); });
			this.dir = 'left';
		}
		this.loc = newLoc;
	}
	
	exitBank() {
		miner.setLocation('bank');
		bank.openDoor();
		setTimeout(function() { miner.setVisible(true); miner.walk('right', bank.townX); }, 300);
		setTimeout(function() { bank.closeDoor(); }, 500);
		setTimeout(function() { miner.setLocation('town'); }, 5000);
	}
	
	enterBank() {
		miner.setLocation('town');
		miner.setVisible(true); 
		miner.walk('left', bank.bankX);

		setTimeout(function() { bank.openDoor(); }, 3500);
		setTimeout(function() { miner.setLocation('bank'); }, 3900);
		setTimeout(function() { bank.closeDoor(); }, 4000);
	}
	
	enterElevator() {
		elev.open();
		setTimeout(function() { elev.walk('left', bank.bankX); }, 3500);
		setTimeout(function() { bank.openDoor(); }, 3500);
		setTimeout(function() { elev.close(); }, 3500);
	}
	
	setLocation(newLoc) {
		switch(newLoc) {
			case 'bank':
				this.miner.visible = false;
				this.miner.x = 515;
				this.miner.y = 180;
				this.miner.gotoAndStop('faceRight');
				this.dir = 'right';
				this.loc = 'bank';
				break;
			case 'town':
				this.miner.visible = true;
				this.miner.x = 817;
				this.miner.y = 180;
				this.miner.gotoAndStop('faceRight');
				this.dir = 'right';
				this.loc = 'town';
				break;
			case 'wall':
				this.miner.visible = true;
				this.miner.x = 300;
				this.miner.y = 625;
				this.miner.gotoAndStop('faceLeft');
				this.dir = 'left';
				this.loc = 'wall';
				break;
			case 'tunnel':
				this.miner.visible = true;
				this.miner.x = 810;
				this.miner.y = 625;
				this.miner.gotoAndStop('faceLeft');
				this.dir = 'left';
				this.loc = 'tunnel';
				break;
		}
	}

	setVisible(mode) { this.miner.visible = mode; }
}
