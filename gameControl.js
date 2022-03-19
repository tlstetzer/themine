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

		this.root.btnOpenDoor.on('click', function() { game.elev.gotoAndPlay('openDoor'); });
		this.root.btnCloseDoor.on('click', function() { game.elev.gotoAndPlay('closeDoor'); });
		this.root.btnTownDown.on('click', function() { 
			game.elev.gotoAndPlay('townDown'); 
			game.win.gotoAndPlay('townDown'); 
		});
		this.root.btnTunnelDown.on('click', function() { 
			game.elev.gotoAndPlay('tunnelDown'); 
			game.win.gotoAndPlay('tunnelDown'); 
		});
	}
}
