/* global root, createjs */
/* eslint no-unused-vars: 0 */

// JavaScript Document
class ElevClass {
	constructor() {
		this.elev = root.elevator_mc;
		this.window = root.elevatorWindow_mc;
		this.elev.gotoAndStop('top');
		this.window.gotoAndStop('top');
		this.loc = 'town';
		this.door = 'closed';
	}
	
	open() {
		if(this.door == 'closed') {
			if(this.loc === 'town') {
				this.elev.gotoAndPlay('elevOpenTop');
			} else {
				this.elev.gotoAndPlay('elevOpenBottom');
			}
			this.door = 'open';
		}
	}
	
	close() {
		if(this.door == 'open') {
			if(this.loc === 'town') {
				this.elev.gotoAndPlay('elevCloseTop');
			} else {
				this.elev.gotoAndPlay('elevCloseBottom');
			}
			this.door = 'closed';
		}
	}
	
	down() {
		if(this.loc == 'town') {
			this.elev.gotoAndPlay('elevDown');
			this.window.gotoAndPlay('windowDown');
			this.loc = 'tunnel';
		}
	}
	
	up() {
		if(this.loc == 'tunnel') {
			this.elev.gotoAndPlay('elevUp');
			this.window.gotoAndPlay('windowUp');
			this.loc = 'town';
		}
	}
}
