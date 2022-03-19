/* eslint no-unused-vars: 0 */
/* eslint no-undef: 0 */
/* eslint-env es6 */

class Game {
	constructor(stage, root, lib) {
		this.stage = stage;
		this.root = root;
		this.lib = lib;
		this.init();
	}

	init() {
		const game = this;

		// movie clips
		this.elev = this.root.elevator_mc;
		this.win = this.root.elevatorWindow_mc;
		this.bank = this.root.town_mc;

		// bank
		this.root.btnBankOpen.on('click', function() { game.bank.gotoAndPlay('openDoor'); });
		this.root.btnBankClose.on('click', function() { game.bank.gotoAndPlay('closeDoor'); });
		
		// elevator
		this.root.btnElevOpen.on('click', function() { game.elev.gotoAndPlay('openDoor'); });
		this.root.btnElevClose.on('click', function() { game.elev.gotoAndPlay('closeDoor'); });
		this.root.btnElevDown.on('click', function() {  
			game.elev.gotoAndPlay('elevDown'); 
			game.win.gotoAndPlay('windowDown'); 
		});
		this.root.btnElevUp.on('click', function() { 
			game.elev.gotoAndPlay('elevUp'); 
			game.win.gotoAndPlay('windowUp'); 
		});
	}
}
