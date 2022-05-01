/* global mineGame, root */
/* eslint no-unused-vars: 0 */

// global variables
var buttonFirst = true;
var disp;

// JavaScript Document
class MineGame {
	constructor() {
//		miner.setLocation('bank');
		disp = root.displayArea_mc;
		this.eventHandlers();
	}
	
	firstClick() {
		if(buttonFirst === true) {
			buttonFirst = false;
			return true;
		} else {
			buttonFirst = true;
			return false;
		}
	}

	eventHandlers() {
		root.btnExitBank.on('click', function() { disp.gotoAndPlay('exitBank'); });
		root.btnElevDown.on('click', function() { disp.gotoAndPlay('elevatorDown'); });
		root.btnElevUp.on('click', function() { disp.gotoAndPlay('goToBank'); });
	}

}
