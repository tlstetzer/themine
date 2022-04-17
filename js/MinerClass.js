/* global root, createjs */
/* eslint no-unused-vars: 0 */

// JavaScript Document
class MinerClass {
	constructor() {
		this.miner = root.miner_mc;
		this.miner.visible = false;
		this.miner.gotoAndStop('faceRight');
		this.dir = 'right';
		this.loc = 'bank';
		this.tool = 'none';
		this.visible = false;
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
	
	walk(direction) {
		if(direction === 'left') {
			this.miner.gotoAndPlay('walkLeft');
			createjs.Tween.get(this.miner).to({x: 305}, 4000).on('complete', function() { 
				this.target.gotoAndStop('faceLeft'); 
			});
		} else {
			this.miner.gotoAndPlay('walkRight');
			createjs.Tween.get(this.miner).to({x: 785}, 4000).on('complete', function() { 
				this.target.gotoAndStop('faceRight'); 
			});
		}
	}
	
	walkAndTurn() {
		if(this.dir === 'left') {
			this.miner.gotoAndPlay('walkLeft');
			createjs.Tween.get(this.miner).to({x: 305}, 4000).on('complete', function() { this.target.gotoAndPlay('turnRight'); });
			this.dir = 'right';
		} else {
			this.miner.gotoAndPlay('walkRight');
			createjs.Tween.get(this.miner).to({x: 785}, 4000).on('complete', function() { this.target.gotoAndPlay('turnLeft'); });
			this.dir = 'left';
		}
	}
	
	setVisible(mode) { this.miner.visible = mode; }
}
