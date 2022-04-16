/* global miner, root */
/* eslint no-unused-vars: 0 */

// global variables
var buttonFirst = true;

// JavaScript Document
class MineGame {
	constructor() {
		this.init();
		this.eventHandlers();
	}
	
	init() {
		
	}
	
	eventHandlers() {
		// turn
		root.btnTurnLeft.on('click', function() { 
			if(buttonFirst === true) {
				miner.turn('left'); 
				buttonFirst = false;
			} else { buttonFirst = true; }
		});
		root.btnTurnRight.on('click', function() { 
			if(buttonFirst === true) {
				miner.turn('right'); 
				buttonFirst = false;
			} else { buttonFirst = true; }
		});
		root.btnTurnAround.on('click', function() { 
			if(buttonFirst === true) {
				miner.turnAround('left'); 
				buttonFirst = false;
			} else { buttonFirst = true; }
		});
	
		// walk
		root.btnWalkLeft.on('click', function() { 
			if(buttonFirst === true) {
				miner.walk('left'); 
				buttonFirst = false;
			} else { buttonFirst = true; }
		});
		root.btnWalkRight.on('click', function() { 
			if(buttonFirst === true) {
				miner.walk('right'); 
				buttonFirst = false;
			} else { buttonFirst = true; }
		});
		root.btnWalkTurn.on('click', function() { 
			if(buttonFirst === true) {
				miner.walkAndTurn(); 
				buttonFirst = false;
			} else { buttonFirst = true; }
		});
	}
}
