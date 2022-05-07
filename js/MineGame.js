/* global mineGame, root */
/* eslint no-unused-vars: 0 */

// global variables
var buttonFirst = true;
var disp, tools;

// JavaScript Document
class MineGame {
	constructor() {
//		miner.setLocation('bank');
		disp = root.displayArea_mc;
		tools = root.displayArea_mc.minerTools_mc;
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
		root.btnExitBank.on('click', function() { 
			disp.miner_mc.visible = true;
			tools.visible = false;
			disp.gotoAndPlay('exitBank'); 
		});
		root.btnElevDown.on('click', function() { 
			disp.miner_mc.visible = true;
			tools.visible = false;
			disp.gotoAndPlay('elevatorDown'); 
		});
		root.btnElevUp.on('click', function() { 
			disp.miner_mc.visible = true;
			tools.visible = false;
			disp.gotoAndPlay('goToBank'); 
		});
		root.btnPickaxe.on('click', function() { 
			disp.miner_mc.visible = false;
			tools.visible = true;
			tools.gotoAndPlay('raisePickaxe'); 
		});
		root.btnJackhammer.on('click', function() { 
			disp.miner_mc.visible = false;
			tools.visible = true;
			tools.gotoAndPlay('Jackhammer'); 
		});
		root.btnExplosive.on('click', function() { 
			disp.miner_mc.visible = false;
			tools.visible = true;
			disp.gotoAndPlay('Explosion'); 
		});
	}

}
