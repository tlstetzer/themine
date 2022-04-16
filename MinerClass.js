/* global root, createjs */
/* eslint no-unused-vars: 0 */

// JavaScript Document
class MinerClass {
	constructor() {
		this.miner = root.miner_mc;
		this.miner.gotoAndStop('faceLeft');
		this.miner.dir = 'left';
	}
	
	facing() {
		return this.miner.dir;
	}
	
	turn(direction) {
		if(direction === 'left') {
			this.miner.gotoAndPlay('turnLeft');
		} else {
			this.miner.gotoAndPlay('turnRight');
		}
		this.miner.dir = direction;
	}
	
	turnAround() {
		if(this.facing() === 'left') {
			this.turn('right');
		} else if(this.facing() === 'right') {
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
		if(this.facing() === 'left') {
			this.miner.gotoAndPlay('walkLeft');
			createjs.Tween.get(this.miner).to({x: 305}, 4000).on('complete', function() { this.target.gotoAndPlay('turnRight'); });
			this.miner.dir = 'right';
		} else {
			this.miner.gotoAndPlay('walkRight');
			createjs.Tween.get(this.miner).to({x: 785}, 4000).on('complete', function() { this.target.gotoAndPlay('turnLeft'); });
			this.miner.dir = 'left';
		}
	}
}
