/* global root */
/* eslint no-unused-vars: 0 */

// global variables
var buttonFirst = true;
var anim;

// JavaScript Document
class MineGame {
	constructor() {
		anim = root.animation_mc;
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
		$('#btnExit').on('click', function() { 
			anim.gotoAndPlay('exitBank'); 
		});
		$('#btnDown').on('click', function() { 
			anim.gotoAndPlay('elevatorDown'); 
		});
		$('#btnPickaxe').on('click', function() {
			anim.miner_mc.gotoAndPlay('pickaxe'); 
			anim.miner_mc.gotoAndPlay('raisePickaxe'); 
		});
		$('#btnJackhammer').on('click', function() { 
			anim.miner_mc.gotoAndPlay('jackhammer'); 
			anim.miner_mc.gotoAndPlay('drill'); 
		});
		$('#btnDynamite').on('click', function() { 
			anim.gotoAndPlay('explosive'); 
			anim.gotoAndPlay('plunge'); 
		});
		$('#btnPump').on('click', function() { 
			anim.gotoAndPlay('pump'); 
			anim.gotoAndPlay('pumpOn'); 
		});
		$('#btnBank').on('click', function() { 
			anim.gotoAndPlay('depositGold'); 
		});
	}

}
