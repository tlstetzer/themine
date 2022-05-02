/* global root, createjs */
/* eslint no-unused-vars: 0 */

// JavaScript Document
class BankClass {
	constructor() {
		this.bank = root.town_mc;
		this.bank.gotoAndStop(0);
		this.cash = 0;
		this.gold = 0;
		this.pickaxe = 0;
		this.drill = 0;
		this.explosive = 0;
		this.pump = 0;
		this.bankX = 515;
		this.townX = 817
	}
	
	openDoor() {
		this.bank.gotoAndPlay('openDoor');
	}
	
	closeDoor() {
		this.bank.gotoAndPlay('closeDoor');
	}
	
	subtractCash(tool) {
		switch(tool) {
			case 'pickaxe':
				this.cash = this.cash - this.pickaxe;
				break;
			case 'drill':
				this.cash = this.cash - this.drill;
				break;
			case 'explosive':
				this.cash = this.cash - this.explosive;
				break;
			case 'pump':
				this.cash = this.cash - this.pump;
				break;
		}
	}
	
	addCash(oz) {
		this.cash = this.gold * oz;
	}
}
